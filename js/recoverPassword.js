const email = document.getElementById('email')

async function handleRecoverPassword() {
    try {
        fetch(`http://localhost:3000/employer/recover-password`, { method: 'PUT', body: JSON.stringify({ email: email.value })});
    } catch (err) {
        console.error(err);
    }
}