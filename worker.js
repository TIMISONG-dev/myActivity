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




// Получаем все ключи из локального хранилища
const allKeys = Object.keys(localStorage);

// Фильтруем ключи, оставляя только те, которые относятся к заказчикам
const customerKeys = allKeys.filter(key => {
  try {
    const userData = JSON.parse(localStorage.getItem(key));
    // Проверяем, что userData является объектом и имеет isCustomer === true
    return typeof userData === 'object' && userData.isCustomer === true;
  } catch (error) {
    console.error(`Ошибка при обработке данных пользователя: ${key}`);
    return false;
  }
});

// Перебираем ключи заказчиков и обрабатываем соответствующие данные
customerKeys.forEach(customerKey => {
  try {
    const userData = JSON.parse(localStorage.getItem(customerKey));

    // Проверяем, что userData является объектом
    if (typeof userData === 'object') {
      // Перебор блоков
      for (let i = 1; i <= 7; i++) {
        const timeKey = `time_list${i}`;
        const planKey = `plan_list${i}`;

        // Проверяем, что userData содержит свойства timeKey и planKey и они являются строками
        if (
          userData.hasOwnProperty(timeKey) &&
          typeof userData[timeKey] === 'string' &&
          userData.hasOwnProperty(planKey) &&
          typeof userData[planKey] === 'string'
        ) {
          const timeData = userData[timeKey];
          const planData = userData[planKey];

          // Формирование ID элементов
          const boxId = `box-plan${i}`;
          const eventTimeId = `event_time${i}`;
          const eventNameId = `event_name${i}`;
          const okBtnId = `okBtn${i}`;
          const canBtnId = `canBtn${i}`;
          const nadpisId = `nadpis${i}`;

          // Обновление соответствующих блоков данными
          const boxElement = document.getElementById(boxId);
          const eventTimeElement = boxElement.querySelector(`.${eventTimeId}`);
          const eventNameElement = boxElement.querySelector(`.${eventNameId}`);
          const okBtn = boxElement.querySelector(`#${okBtnId}`);
          const canBtn = boxElement.querySelector(`#${canBtnId}`);
          const nadpisElement = boxElement.querySelector(`.${nadpisId}`);

          // Проверяем, есть ли сохраненные данные для текущего блока в localStorage
          const savedData = JSON.parse(localStorage.getItem('acceptedTasks')) || {};
          const savedTask = savedData[boxId];

          if (savedTask) {
            // Заполнение данных времени и плана в блок из сохраненных данных
            eventTimeElement.textContent = savedTask.time;
            eventNameElement.textContent = savedTask.plan;

            // Показываем блок, так как есть сохраненные данные
            boxElement.style.display = 'block';
            boxElement.style.visibility = 'visible';

            // Скрываем кнопки "Принять" и "Отклонить", так как задача уже обработана
            okBtn.style.display = 'none';
            canBtn.style.display = 'none';
            nadpisElement.textContent = 'Обработано';
          } else {
            // Заполнение данных времени и плана в блок
            if (timeData) {
              eventTimeElement.textContent = timeData;
            }

            if (planData) {
              eventNameElement.textContent = planData;
            }

            // Показываем блок, если есть хотя бы одно из полей (время или план)
            if (timeData.trim() !== '' || planData.trim() !== '') {
              boxElement.style.display = 'block';
              boxElement.style.visibility = 'visible';
            } else {
              // Скрываем блок, если нет данных
              boxElement.style.display = 'none';
              boxElement.style.visibility = 'hidden';
            }
          }

          // Добавим обработчик для кнопки "Принять"
          okBtn.addEventListener('click', () => {
            alert('Поручение принято');
            okBtn.style.display = 'none';
            canBtn.style.display = 'none';
            nadpisElement.textContent = 'Принято';

            // Проверим, является ли текущий пользователь исполнителем
            if (userData.currentUser) {
              // Создадим объект для хранения принятых поручений текущего пользователя
              const acceptedTasks = JSON.parse(localStorage.getItem('acceptedTasks')) || {};
              
              // Запишем принятое поручение в объект
              acceptedTasks[boxId] = { time: timeData, plan: planData };
              
              // Сохраним объект обратно в localStorage
              localStorage.setItem('acceptedTasks', JSON.stringify(acceptedTasks));
            }
          });

          // Добавим обработчик для кнопки "Отклонить"
          canBtn.addEventListener('click', () => {
            alert('Поручение отклонено');
            canBtn.style.display = 'none';
            nadpisElement.textContent = 'Отклонено';
          });
        }
      }
    }
  } catch (error) {
    console.error(`Ошибка при обработке данных пользователя: ${customerKey}`);
  }
});

