$(document).ready(function() {
    let token = localStorage.getItem('token');
    if (token == null) {
        window.location.href = 'login.html';
    }
})

function userLogout() {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
}