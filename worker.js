document.addEventListener('DOMContentLoaded', () => {
    const currentUserLogin = localStorage.getItem('currentUser');
    const userInfoElement = document.getElementById('userInfo');
    userInfoElement.innerHTML = `${currentUserLogin}`;
});

let logOutBtn = document.getElementById('LogOutBtn');

logOutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.href = 'logreg/login.html';
});