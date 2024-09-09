// upload.js
document.getElementById('upload-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    handleUpload(); // Call the function to handle file upload
});

function handleUpload() {
    const fileInput = document.getElementById('fileInput');
    const selectedFile = fileInput.files[0];

    if (!selectedFile) {
        alert("Please select a file first.");
        return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    fetch("http://localhost:4000/api/upload", {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Include token if needed for authentication
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'ok') {
            alert("File upload successful");

            // Display the uploaded image
            const img = document.createElement('img');
            img.src = `http://localhost:4000/uploads/${data.file.filename}`;
            img.alt = 'Uploaded Image';
            img.style.maxWidth = '100%';
            document.getElementById('result').innerHTML = ''; // Clear previous content
            document.getElementById('result').appendChild(img);
                    
        } else {
            alert("Failed to upload the file: " + data.error);
        }
    })
    .catch(error => {
        console.error("Error while uploading the file:", error);
        
    });
}
