let regButton = document.querySelector('.RegBtn')

document.addEventListener('DOMContentLoaded', () => {
    const loginInput = document.querySelector('.Login');
    const passwordInput = document.querySelector('.password');
    const loginBtn = document.querySelector('.LogButton');

    loginBtn.addEventListener('click', () => {
        const enteredLogin = loginInput.value;
        const enteredPassword = passwordInput.value;

        const adminLogin = 'Moderator';
        const adminPassword = '123123';

        try {
            // Получаем данные о пользователях из localStorage
            const storedUsers = JSON.parse(localStorage.getItem('users')) || {};

            // Проверка для администратора
            if (enteredLogin === adminLogin && enteredPassword === adminPassword) {
                localStorage.setItem('isAdmin', 'true');
                window.location.href = '../index.html';
            } else {
                // Поиск пользователя в localStorage по введенным логину и паролю
                const foundUser = Object.values(storedUsers).find(user => user.login === enteredLogin && user.password === enteredPassword);

                if (foundUser) {
                    localStorage.setItem('currentUser', enteredLogin);
                    window.location.href = '../index.html';
                } else {
                    console.log('Не найден пользователь в localStorage:', enteredLogin, enteredPassword, storedUsers);
                    alert('Неверный логин или пароль');
                }
            }
        } catch (error) {
            console.error('Ошибка при доступе к localStorage:', error);
        }
    });
});

regButton.addEventListener('click', () =>{
    window.location.href = 'registration.html';
})