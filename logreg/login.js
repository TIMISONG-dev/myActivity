document.addEventListener('DOMContentLoaded', () => {
    const loginInput = document.querySelector('.Login');
    const passwordInput = document.querySelector('.password');
    const loginBtn = document.querySelector('.LogButton');
    
    loginBtn.addEventListener('click', () => {
        const enteredLogin = loginInput.value;
        const enteredPassword = passwordInput.value;

        try {
            // Получаем данные о пользователях из localStorage
            const storedUsers = JSON.parse(localStorage.getItem('users')) || {};
            // Поиск пользователя в localStorage по введенным логину и паролю
            const foundUser = Object.values(storedUsers).find(user => user.login === enteredLogin && user.password === enteredPassword);

            if (foundUser) {
                localStorage.setItem('currentUser', enteredLogin);

                // Проверка типа пользователя и перенаправление
                if (foundUser.isExecutor) {
                    window.location.href = '../worker.html'; // Исполнитель
                } else if (foundUser.isCustomer) {
                    window.location.href = '../index.html'; // Заказчик
                } else {
                    console.log('Не указан тип пользователя для:', enteredLogin);
                    alert('Ошибка при определении типа пользователя');
                }
            } else {
                console.log('Не найден пользователь в localStorage:', enteredLogin, enteredPassword, storedUsers);
                alert('Неверный логин или пароль');
            }
        } catch (error) {
            console.error('Ошибка при доступе к localStorage:', error);
        }
    });

    // Добавлен обработчик для кнопки регистрации
    const regButton = document.querySelector('.RegBtn');
    regButton.addEventListener('click', () => {
        window.location.href = 'registration.html';
    });
});
