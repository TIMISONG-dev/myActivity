let login = document.querySelector('.loginn');
let password = document.querySelector('.password');
let LogBtn = document.querySelector('.LogBtn');
let RegBtn = document.querySelector('.RegBtn');

let users = JSON.parse(localStorage.getItem('users')) || {};

class User {
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }
}

function createID(users){
    return Object.keys(users).length;
}

RegBtn.addEventListener('click', () =>{
        const loginUser = login.value;
        const passwordUser = password.value;

        if(loginUser === '' || passwordUser === ''){
            alert('Все поля должны быть заполнены');
        }
        else{

        const user = new User(loginUser, passwordUser);
    
        const userID = 'User' + createID(users);
        users[userID] = user;
    
        localStorage.setItem('users', JSON.stringify(users));
    
        console.log(users);
    
        window.location.href = 'login.html';

    }
       
}) 


LogBtn.addEventListener('click', () =>{
    window.location.href = 'login.html';
})