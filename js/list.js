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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M11.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-9 9a.5.5 0 0 1-.354.146H2.5a.5.5 0 0 1-.5-.5V12a.5.5 0 0 1 .146-.354l9-9z"/><path fill-rule="evenodd" d="M12.854.146a1.5 1.5 0 0 1 2.12 0l1 1a1.5 1.5 0 0 1 0 2.122l-9 9a1.5 1.5 0 0 1-2.122 0l-1-1a1.5 1.5 0 0 1 0-2.122l9-9z"/></svg>
                    </a>
                    <a id="delete-icon" class="icon-link icon-link-hover" style="cursor: pointer" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
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
