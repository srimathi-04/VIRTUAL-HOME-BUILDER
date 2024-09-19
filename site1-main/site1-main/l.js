document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if user credentials are stored in localStorage
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  const messageElement = document.getElementById("message");

  // Basic validation
  if (email === storedEmail && password === storedPassword) {
      messageElement.textContent = "Login successful!";
      // Redirect or perform additional actions here
      window.location.href = "welcome.html"; // Example redirect
  } else {
      messageElement.textContent = "Invalid email or password.";
  }
});
