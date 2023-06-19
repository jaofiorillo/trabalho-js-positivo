const email = document.getElementById('email');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btn-login');

function validaLogin() {
    if (!email.value || !password.value) {
        btnLogin.setAttribute('disabled', 'disabled');
        btnLogin.setAttribute('style', 'cursor: not-allowed');
    } else {
        btnLogin.removeAttribute('disabled');
        btnLogin.setAttribute('style', 'cursor: pointer');
    }
}

function guideToList(e) {
    e.preventDefault();
    window.location.href = 'file:///C:/Users/Usuario/Desktop/front_ruim/try-bank-app/html/list.html'
}

window.onload = () => validaLogin();

email.onchange = () => validaLogin();
password.onchange = () => validaLogin();

btnLogin.onclick = (e) => guideToList(e);