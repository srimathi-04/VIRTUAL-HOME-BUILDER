document.getElementById('signup-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const name = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('pswd').value;

  if (!name || !email || !password) {
      alert('All fields are required.');
      return;
  }

  try {
      const response = await fetch('http://localhost:4000/api/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
          throw new Error(data.error || 'An unknown error occurred');
      }

      alert(data.message || 'Registration successful!');
      window.location.href = 'fileupload.html';
  } catch (error) {
      console.error('Error:', error);
      alert(`An error occurred: ${error.message}`);
  }
});
