document.addEventListener('DOMContentLoaded', function () {
  // Функция для обработки списка
  function handleList(menu, aboveList, key) {
    var listItems = menu.querySelectorAll('.list_item');

    listItems.forEach(function (item) {
      item.addEventListener('click', function () {
        var selectedItemText = item.textContent;
        aboveList.textContent = selectedItemText;

        // Сохранение выбранного значения в localStorage
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
          var userEvents = JSON.parse(localStorage.getItem(currentUser)) || {};
          userEvents[key] = selectedItemText;
          localStorage.setItem(currentUser, JSON.stringify(userEvents));
        }
      });
    });
  }

  // Обработка первого списка
  var eventMenu = document.getElementById('menu_event');
  var eventAboveList = eventMenu.querySelector('.abovelist');
  handleList(eventMenu, eventAboveList, 'event');

  // Обработка второго списка
  var timeMenu = document.getElementById('menu_time');
  var timeAboveList = timeMenu.querySelector('.abovelist');
  handleList(timeMenu, timeAboveList, 'time');

  // Обработка третьего списка
  var employeeMenu = document.getElementById('menu_employee');
  var employeeAboveList = employeeMenu.querySelector('.abovelist');
  handleList(employeeMenu, employeeAboveList, 'employee');

  // Обновление данных при загрузке страницы
  var currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
    var userEvents = JSON.parse(localStorage.getItem(currentUser)) || {};
    
    // Обновление первого списка
    if (userEvents['event']) {
      eventAboveList.textContent = userEvents['event'];
      document.querySelector('.event_title').textContent = userEvents['event'];
      document.querySelector('.event_status').textContent = "Есть мероприятие";
    }

    // Обновление второго списка
    if (userEvents['time']) {
      timeAboveList.textContent = userEvents['time'];
      document.querySelector('.event_time').textContent = userEvents['time'];
    }

    // Обновление третьего списка
    if (userEvents['employee']) {
      employeeAboveList.textContent = userEvents['employee'];
      document.querySelector('.event_emp').textContent = userEvents['employee'];
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const list = document.getElementById('list1');
  var dialog = document.getElementById("dialog");
  var okd_button = document.getElementById("okd_button");
  var canceld_button = document.getElementById("canceld_button");

  // Навешиваем обработчик на событие клик
  list.addEventListener('click', function () {
    dialog.showModal();
  });

  // Добавляем обработчик события для кнопки "Ок"
  okd_button.addEventListener("click", function () {
    // Получаем выбранное мероприятие и время
    var selectedEvent = document.getElementById('event').textContent;
    var selectedTime = document.getElementById('time').textContent;
    var selectedEmp = document.getElementById('employee').textContent;
    if (selectedEvent == "Мероприятие"){
      alert('Введите значения для мероприятия');
    } else {
      if (selectedTime == "Время"){
        alert('Введите значения для времени');
      } else {
        if (selectedEmp == "Работник"){
          alert('Введите значения для работника');
        } else {
                // Обновляем текст в элементах
                document.querySelector('.event_name').textContent = selectedEvent;
                document.querySelector('.event_time').textContent = selectedTime;
                document.querySelector('.event_emp').textContent = selectedEmp;
                document.querySelector('.event_status').textContent = "Есть мероприятие";
  
                // Закрываем диалоговое окно
                dialog.close();
                alert('Создано мероприятие');
        }
      }
    }
  });

  // Кнопка отмены
  canceld_button.addEventListener("click", function(){
    dialog.close();
  });
});

let logOutBtn = document.getElementById('LogOutBtn');

document.addEventListener('DOMContentLoaded', () =>{
    const currentUserLogin = localStorage.getItem('currentUser');
    const isAdmin = localStorage.getItem('isAdmin') === 'true';


    if(isAdmin){
        const userInfoElement = document.getElementById('userInfo');
        userInfoElement.innerHTML = 'Moderator';
    }
    else{
        const userInfoElement = document.getElementById('userInfo');
        userInfoElement.innerHTML = `${currentUserLogin}`;
    }

    //сonst adminButton = document.getElementById('adminButtons');
    //if(isAdmin){
      //  adminButton.style.display = block;
    //}
});

logOutBtn.addEventListener('click', () =>{
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isAdmin');
    window.location.href = 'logreg/login.html';

})

document.getElementById('timeList').addEventListener('click', (event) => {
  const clickedTime = event.target.dataset.time;
  if (clickedTime) {
    const timeHeader = document.getElementById(clickedTime);
    const listItem = event.target;

    if (timeHeader.style.display !== 'none') {
      timeHeader.style.display = 'none';
      listItem.style.textDecoration = 'line-through'; // Линия через текст
    } else {
      timeHeader.style.display = 'block'; // Или 'inline-block', в зависимости от вашего дизайна
      listItem.style.textDecoration = 'none';
    }
  }
});