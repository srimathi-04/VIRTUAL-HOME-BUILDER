document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("pswd").value;
    const email = document.getElementById("email").value;
    
    // Debugging: Check if values are correctly retrieved
    console.log(username, password, email);

    // Ensure the 'message' element exists
    const messageElement = document.getElementById("message");

    if (username && password && email) {
        localStorage.setItem("username", username);
        localStorage.setItem("pswd", password);
        localStorage.setItem("email", email);
        messageElement.textContent = "Signup successful!";
    } else {
        messageElement.textContent = "Please fill in all fields.";
    }
});
const messageElement = document.getElementById("message");
console.log(messageElement);