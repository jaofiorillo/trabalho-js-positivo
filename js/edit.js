async function handleEditUser() {
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const user = localStorage.getItem('user')

    try {
        await fetch(`http://localhost:3000/users/update/${user.id}`, {
            method: 'PUT',
            body: JSON.stringify({ nome: nome.value, email: email.value })
        })

        window.location.href = 'file:///C:/Users/Usuario/Desktop/front_ruim/try-bank-app/html/list.html'
    } catch (error) {
        console.error(error)
    }
}
