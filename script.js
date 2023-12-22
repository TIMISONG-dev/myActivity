// localStorage.clear();
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

  var box_plan = document.getElementById('box-plan');

  // Обновление данных при загрузке страницы
  var currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
    var userEvents = JSON.parse(localStorage.getItem(currentUser)) || {};
    
    // Обновление первого списка
    if (userEvents['event']) {
      eventAboveList.textContent = userEvents['event'];
      document.querySelector('.event_name').textContent = userEvents['event'];
      // document.querySelector('.event_status').textContent = "Есть мероприятие";
      box_plan.style.display = 'block';
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
  var dialog = document.getElementById("dialog");
  var okd_button = document.getElementById("okd_button");
  var canceld_button = document.getElementById("canceld_button");
  var box_plan = document.getElementById('box-plan');
  var dateList = document.querySelector('.date-list');
  var list1 = document.querySelector('.list');

  var n = 7;

  for (var i = 0; i < n; i++) {
      var newList = list1.cloneNode(true);
      // ID
      newList.id = 'list' + (i + 2);
      // Date
      var dateTitle = newList.querySelector('.date_title');
      var dateName = newList.querySelector('.date_name');
      dateTitle.textContent = i + 2;

      d = i + 2;

      if (d === 1){
        dateName.textContent = "Пт"
      } else {
        if (d === 2){
          dateName.textContent = "Сб"
        } else {
          if (d === 3){
            dateName.textContent = "Вс"
          } else {
            if (d === 4){
              dateName.textContent = "Пн"
            } else {
              if (d === 5){
                dateName.textContent = "Вт"
              } else {
                if (d === 6){
                  dateName.textContent = "Ср"
                } else {
                  if (d === 7){
                    dateName.textContent = "Чт"
                  }
                }
              }
            }
          }
        }
      }
      // Move to container
      dateList.appendChild(newList);
  }

  var listItems = document.querySelectorAll('.date-list .list');

  listItems.forEach(function (listItem) {
      listItem.addEventListener('click', function () {
          // Добавляем класс к элементу списка, который был кликнут
          listItems.forEach(function (item) {
              item.classList.remove('clicked');
          });
          listItem.classList.add('clicked');
  
          dialog.showModal();
      });
  });
  
  // Обработчик "Ok" вне цикла
  okd_button.addEventListener("click", function () {
      var clickedListItem = document.querySelector('.date-list .list.clicked');
      if (!clickedListItem) {
          alert('Выберите элемент списка!');
          return;
      }
  
      // Получаем выбранное мероприятие и время
      var selectedEvent = document.getElementById('event').textContent;
      var selectedTime = document.getElementById('time').textContent;
      var selectedEmp = document.getElementById('employee').textContent;
  
      if (selectedEvent == "Мероприятие") {
          alert('Введите значения для мероприятия');
      } else {
          if (selectedTime == "Время") {
              alert('Введите значения для времени');
          } else {
              if (selectedEmp == "Работник") {
                  alert('Введите значения для работника');
              } else {
                  document.querySelector('.event_name').textContent = selectedEvent;
                  document.querySelector('.event_time').textContent = selectedTime;
                  document.querySelector('.event_emp').textContent = selectedEmp;
                  box_plan.style.display = 'block';
                  var eventStatus = clickedListItem.querySelector('.event_status');
                  eventStatus.textContent = "Есть бля";
  
                  dialog.close();
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