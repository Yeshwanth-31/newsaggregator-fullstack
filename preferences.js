document.getElementById("preferences-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const preferences = Array.from(document.querySelectorAll("input[name='preferences']:checked"))
        .map(input => input.value);

    const token = localStorage.getItem("token");

    const res = await fetch('http://localhost:5000/api/auth/preferences', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ preferences })
    });

    const data = await res.json();

    if (res.ok) {
        alert('Preferences saved successfully!');
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        alert(data.message);
    }
});
