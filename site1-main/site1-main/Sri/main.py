import streamlit as st
import cv2
import numpy as np
import os

# Title of the app
st.title('Floorplan to 3D Model')

# Function to detect walls/lines and convert to 3D .obj file
def process_image_to_obj(image_path):
    # Load the image in grayscale
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    
    # Apply edge detection to find walls (edges in the image)
    edges = cv2.Canny(img, 100, 200)

    # Use HoughLines to detect straight lines (potential walls)
    lines = cv2.HoughLinesP(edges, 1, np.pi / 180, threshold=100, minLineLength=50, maxLineGap=10)

    # Prepare to write OBJ file
    obj_file = 'output.obj'
    
    vertices = []
    faces = []
    
    # Variables to define the floor boundary
    min_x, min_z = float('inf'), float('inf')
    max_x, max_z = float('-inf'), float('-inf')
    
    if lines is not None:
        # Create vertices based on line coordinates
        for i, line in enumerate(lines):
            x1, y1, x2, y2 = line[0]
            
            # Rotate 90 degrees along the X-axis (swap and negate Y and Z)
            vertices.append((x1, 0, y1))    # First point (was bottom of the wall, now rotated)
            vertices.append((x2, 0, y2))    # Second point (was bottom of the wall, now rotated)
            vertices.append((x1, 100, y1))  # First point (was top of the wall, now rotated)
            vertices.append((x2, 100, y2))  # Second point (was top of the wall, now rotated)

            # Track boundary for floor
            min_x, max_x = min(min_x, x1, x2), max(max_x, x1, x2)
            min_z, max_z = min(min_z, y1, y2), max(max_z, y1, y2)

            # Create faces for the wall using the 4 vertices (two triangles)
            faces.append((4 * i + 1, 4 * i + 2, 4 * i + 3))  # Triangle 1
            faces.append((4 * i + 2, 4 * i + 3, 4 * i + 4))  # Triangle 2

    # Add vertices for the floor
    floor_vertices_start = len(vertices) + 1
    vertices.append((min_x, 0, min_z))  # Bottom-left corner
    vertices.append((max_x, 0, min_z))  # Bottom-right corner
    vertices.append((max_x, 0, max_z))  # Top-right corner
    vertices.append((min_x, 0, max_z))  # Top-left corner

    # Add faces for the floor (two triangles)
    faces.append((floor_vertices_start, floor_vertices_start + 1, floor_vertices_start + 2))  # Triangle 1
    faces.append((floor_vertices_start, floor_vertices_start + 2, floor_vertices_start + 3))  # Triangle 2

    # Write vertices and faces to the OBJ file
    with open(obj_file, 'w') as f:
        for v in vertices:
            f.write(f"v {v[0]} {v[1]} {v[2]}\n")
        for face in faces:
            f.write(f"f {face[0]} {face[1]} {face[2]}\n")

    return obj_file

# Upload floorplan image
uploaded_file = st.file_uploader("Upload a floorplan image", type=["png", "jpg", "jpeg"])

if uploaded_file is not None:
    # Display the uploaded image
    st.image(uploaded_file, caption='Uploaded Floorplan', use_column_width=True)
    
    # Save the uploaded image
    image_path = os.path.join("temp", uploaded_file.name)
    with open(image_path, 'wb') as f:
        f.write(uploaded_file.getbuffer())
    
    st.write("Processing...")
    
    # Process the image and convert to OBJ
    obj_file = process_image_to_obj(image_path)
    
    # Provide download link for the generated OBJ file
    with open(obj_file, 'rb') as f:
        st.download_button("Download 3D Model (.obj)", f, file_name="floorplan.obj")
    
    st.success("3D model generation complete!")











#streamlit run main.py