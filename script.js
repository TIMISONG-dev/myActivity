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

  function statusList(key, text) {
    var currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      var userEvents = JSON.parse(localStorage.getItem(currentUser)) || {};
      userEvents[key] = text;
      localStorage.setItem(currentUser, JSON.stringify(userEvents));
    }
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

  console.log("handle");

  var box_plan = document.getElementById('box-plan');

  // Обновление данных при загрузке страницы
  var currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
    var userEvents = JSON.parse(localStorage.getItem(currentUser)) || {};
    
    // Обновление первого списка
    if (userEvents['event']) {
      eventAboveList.textContent = userEvents['event'];
      document.querySelector('.event_name').textContent = userEvents['event'];
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

    if (userEvents['one']) {
      document.querySelector('.event_status1').textContent = userEvents['one'];
      console.log("one");
    }
  }

  var dialog = document.getElementById("dialog");
  var okd_button = document.getElementById("okd_button");
  var canceld_button = document.getElementById("canceld_button");
  var box_plan = document.getElementById('box-plan');
  var list1 = document.getElementById('list1');

  list1.addEventListener("click", function () {
    dialog.showModal();
  });
  
  // Обработчик "Ok" вне цикла
  okd_button.addEventListener("click", function () {
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
                  document.querySelector('.event_status1').textContent = "test"; // замените на выбранное значение
                  // Сохранение выбранного значения в localStorage
                  var selectedStatus = document.querySelector('.event_status1').textContent;
                  statusList('one', selectedStatus);
                  box_plan.style.display = 'block';

                  console.log("OK");
  
                  dialog.close();
              }
          }
      }
  });

  var currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
    var userEvents = JSON.parse(localStorage.getItem(currentUser)) || {};
    document.querySelector('.event_status1').textContent = userEvents['one'];
    document.querySelector('.event_status2').textContent = userEvents['two'];
    document.querySelector('.event_status3').textContent = userEvents['thr'];
    document.querySelector('.event_status4').textContent = userEvents['fou'];
    document.querySelector('.event_status5').textContent = userEvents['fiv'];
    document.querySelector('.event_status6').textContent = userEvents['six'];
    document.querySelector('.event_status7').textContent = userEvents['sev'];
    console.log(userEvents['one']);
  }
  
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