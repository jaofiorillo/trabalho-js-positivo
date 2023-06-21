async function handleListUsers() {
    let users = []

    try {
        const response = await fetch('http://localhost:3000/users/', {
            method: 'GET'
        })

        users = await response.json()
    } catch (err) {
        console.error(err)
    }

    if (!!users.length) {
        const tbody = document.getElementById('userTableBody')
        
        tbody.innerHTML = ''

        users.forEach((user) => {
            const row = document.createElement('tr');
            row.innerHTML =
                '<td>' +
                user.id +
                '</td>' +
                '<td>' +
                user.name +
                '</td>' +
                '<td>' +
                user.email +
                '</td>' +
                `<td>
                    <a href="../html/edit.html" class="icon-link icon-link-hover">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-2-front-fill" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
                        </svg>
                    </a>
                    <a id="delete-icon" class="icon-link icon-link-hover" style="cursor: pointer" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </a>
                </td>`;
            
            tbody.appendChild(row);
        })

        users.forEach((user) => {
            const deleteIcon = document.getElementById('delete-icon');

            deleteIcon.onclick = () => {
                localStorage.setItem('user', JSON.stringify(user))
            };
        })
    }
}

async function handleConfirmDelete() {
    const user = JSON.parse(localStorage.getItem('user'));

    try {
        await fetch(`http://localhost:3000/users/delete/${user.id}`, { method: 'DELETE' })
        window.location.reload();
    } catch (error) {
        console.error(error);
    }
}

window.onload = () => handleListUsers()

const btnDelete = document.getElementById('btn-delete');

btnDelete.onclick = () => handleConfirmDelete();
