document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();

    if (res.ok) {
        alert('Registration successful! You can now log in.');
        window.location.href = 'login.html'; // Redirect to login page after successful registration
    } else {
        alert(data.message);
    }
});
