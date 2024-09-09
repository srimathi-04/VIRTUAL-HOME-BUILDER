document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.status === 'ok') {
            localStorage.setItem('token', data.token); // Save token to localStorage
            window.location.href = 'fileupload.html'; // Redirect to upload page
        } else {
            document.getElementById('error-message').textContent = data.error || 'An unknown error occurred';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('error-message').textContent = 'An error occurred. Please try again.';
    }
});
