// localStorage.clear();
document.addEventListener('DOMContentLoaded', function () {
  function handleList(menu, aboveList, keyPrefix) {
    var listItems = menu.querySelectorAll('.list_item');

    listItems.forEach(function (item) {
      item.addEventListener('click', function () {
        var selectedListId = menu.id;
        var selectedItemText = item.textContent;
        aboveList.textContent = selectedItemText;

        var currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
          var userEvents = JSON.parse(localStorage.getItem(currentUser)) || {};
          userEvents[keyPrefix + selectedListId] = selectedItemText;
          
          // Новые ключи для isCustomer и currentUser
          userEvents['isCustomer'] = true;  // Предполагается, что это клиент
          userEvents['currentUser'] = currentUser;

          localStorage.setItem(currentUser, JSON.stringify(userEvents));
        }
      });
    });
  }

  var eventMenu = document.getElementById('menu_event');
  var eventAboveList = eventMenu.querySelector('.abovelist');
  handleList(eventMenu, eventAboveList, 'event_');

  var timeMenu = document.getElementById('menu_time');
  var timeAboveList = timeMenu.querySelector('.abovelist');
  handleList(timeMenu, timeAboveList, 'time_');

  var currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
    var userEvents = JSON.parse(localStorage.getItem(currentUser)) || {};

    // Lists

    if (userEvents['event_list1']) {
      eventAboveList.textContent = userEvents['event_list1'];
      document.querySelector('.event_status1').textContent = userEvents['event_list1'];
    }

    if (userEvents['event_list2']) {
      eventAboveList.textContent = userEvents['event_list2'];
      document.querySelector('.event_status2').textContent = userEvents['event_list2'];
    }

    if (userEvents['event_list3']) {
      eventAboveList.textContent = userEvents['event_list3'];
      document.querySelector('.event_status3').textContent = userEvents['event_list3'];
    }

    if (userEvents['event_list4']) {
      eventAboveList.textContent = userEvents['event_list4'];
      document.querySelector('.event_status4').textContent = userEvents['event_list4'];
    }

    if (userEvents['event_list5']) {
      eventAboveList.textContent = userEvents['event_list5'];
      document.querySelector('.event_status5').textContent = userEvents['event_list5'];
    }

    if (userEvents['event_list6']) {
      eventAboveList.textContent = userEvents['event_list6'];
      document.querySelector('.event_status6').textContent = userEvents['event_list6'];
    }

    if (userEvents['event_list7']) {
      eventAboveList.textContent = userEvents['event_list7'];
      document.querySelector('.event_status7').textContent = userEvents['event_list7'];
    }

    // Boxes

    var box_plan1 = document.getElementById('box-plan1');
    var box_plan2 = document.getElementById('box-plan2');
    var box_plan3 = document.getElementById('box-plan3');
    var box_plan4 = document.getElementById('box-plan4');
    var box_plan5 = document.getElementById('box-plan5');
    var box_plan6 = document.getElementById('box-plan6');
    var box_plan7 = document.getElementById('box-plan7');

    if (userEvents['plan_list1']) {
      eventAboveList.textContent = userEvents['plan_list1'];
      document.querySelector('.event_name1').textContent = userEvents['plan_list1'];
      document.querySelector('.event_title1').textContent = "Пятница";
      box_plan1.style.display = 'block';
    }

    if (userEvents['plan_list2']) {
      eventAboveList.textContent = userEvents['plan_list2'];
      document.querySelector('.event_name2').textContent = userEvents['plan_list2'];
      document.querySelector('.event_title2').textContent = "Суббота";
      box_plan2.style.display = 'block';
    }

    if (userEvents['plan_list3']) {
      eventAboveList.textContent = userEvents['plan_list3'];
      document.querySelector('.event_name3').textContent = userEvents['plan_list3'];
      document.querySelector('.event_title3').textContent = "Воскресенье";
      box_plan3.style.display = 'block';
    }

    if (userEvents['plan_list4']) {
      eventAboveList.textContent = userEvents['plan_list4'];
      document.querySelector('.event_name4').textContent = userEvents['plan_list4'];
      document.querySelector('.event_title4').textContent = "Понедельник";
      box_plan4.style.display = 'block';
    }

    if (userEvents['plan_list5']) {
      eventAboveList.textContent = userEvents['plan_list5'];
      document.querySelector('.event_name5').textContent = userEvents['plan_list5'];
      document.querySelector('.event_title5').textContent = "Вторник";
      box_plan5.style.display = 'block';
    }

    if (userEvents['plan_list6']) {
      eventAboveList.textContent = userEvents['plan_list6'];
      document.querySelector('.event_name6').textContent = userEvents['plan_list6'];
      document.querySelector('.event_title6').textContent = "Среда";
      box_plan6.style.display = 'block';
    }

    if (userEvents['plan_list7']) {
      eventAboveList.textContent = userEvents['plan_list7'];
      document.querySelector('.event_name7').textContent = userEvents['plan_list7'];
      document.querySelector('.event_title7').textContent = "Четверг";
      box_plan7.style.display = 'block';
    }

    // Times

    if (userEvents['time_list1']) {
      timeAboveList.textContent = userEvents['time_list1'];
      document.querySelector('.event_time1').textContent = userEvents['time_list1'];
    }

    if (userEvents['time_list2']) {
      timeAboveList.textContent = userEvents['time_list2'];
      document.querySelector('.event_time2').textContent = userEvents['time_list2'];
    }

    if (userEvents['time_list3']) {
      timeAboveList.textContent = userEvents['time_list3'];
      document.querySelector('.event_time3').textContent = userEvents['time_list3'];
    }

    if (userEvents['time_list4']) {
      timeAboveList.textContent = userEvents['time_list4'];
      document.querySelector('.event_time4').textContent = userEvents['time_list4'];
    }

    if (userEvents['time_list5']) {
      timeAboveList.textContent = userEvents['time_list5'];
      document.querySelector('.event_time5').textContent = userEvents['time_list5'];
    }

    if (userEvents['time_list6']) {
      timeAboveList.textContent = userEvents['time_list6'];
      document.querySelector('.event_time6').textContent = userEvents['time_list6'];
    }

    if (userEvents['time_list7']) {
      timeAboveList.textContent = userEvents['time_list7'];
      document.querySelector('.event_time7').textContent = userEvents['time_list7'];
    }
  }  
});

document.addEventListener('DOMContentLoaded', function () {
  var dialog = document.getElementById("dialog");
  var selectedListId;

  document.querySelectorAll('.list').forEach(function (list) {
    list.addEventListener('click', function () {
      selectedListId = this.id;
      dialog.showModal();
    });
  });

  var okButton = document.getElementById("okd_button");
  okButton.addEventListener("click", function () {
    var selectedEvent = document.getElementById('event').textContent;
    var selectedTime = document.getElementById('time').textContent;

    var eventStatusId = 'event_status' + selectedListId.slice(-1);
    var eventTitleId = 'event_name' + selectedListId.slice(-1);
    var timeId = 'event_time' + selectedListId.slice(-1);

    var eventKey = 'event_' + selectedListId;
    var timeKey = 'time_' + selectedListId;
    var eventTitle = 'plan_' + selectedListId;

    document.querySelector('.' + eventStatusId).textContent = "Есть мероприятие";
    document.querySelector('.' + eventTitleId).textContent = selectedEvent;
    document.querySelector('.' + timeId).textContent = selectedTime;


    var currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      var userEvents = JSON.parse(localStorage.getItem(currentUser)) || {};
      userEvents[eventKey] = "Есть мероприятие";
      userEvents[timeKey] = selectedTime;
      userEvents[eventTitle] = selectedEvent;

      var box_plan1 = document.getElementById('box-plan1');
      var box_plan2 = document.getElementById('box-plan2');
      var box_plan3 = document.getElementById('box-plan3');
      var box_plan4 = document.getElementById('box-plan4');
      var box_plan5 = document.getElementById('box-plan5');
      var box_plan6 = document.getElementById('box-plan6');
      var box_plan7 = document.getElementById('box-plan7');

      if (userEvents['plan_list1']) {
        document.querySelector('.event_name1').textContent = userEvents['plan_list1'];
        document.querySelector('.event_title1').textContent = "Пятница";
        box_plan1.style.display = 'block';
      }
  
      if (userEvents['plan_list2']) {
        document.querySelector('.event_name2').textContent = userEvents['plan_list2'];
        document.querySelector('.event_title2').textContent = "Суббота";
        box_plan2.style.display = 'block';
      }
  
      if (userEvents['plan_list3']) {
        document.querySelector('.event_name3').textContent = userEvents['plan_list3'];
        document.querySelector('.event_title3').textContent = "Воскресенье";
        box_plan3.style.display = 'block';
      }
  
      if (userEvents['plan_list4']) {
        document.querySelector('.event_name4').textContent = userEvents['plan_list4'];
        document.querySelector('.event_title4').textContent = "Понедельник";
        box_plan4.style.display = 'block';
      }
  
      if (userEvents['plan_list5']) {
        document.querySelector('.event_name5').textContent = userEvents['plan_list5'];
        document.querySelector('.event_title5').textContent = "Вторник";
        box_plan5.style.display = 'block';
      }
  
      if (userEvents['plan_list6']) {
        document.querySelector('.event_name6').textContent = userEvents['plan_list6'];
        document.querySelector('.event_title6').textContent = "Среда";
        box_plan6.style.display = 'block';
      }
  
      if (userEvents['plan_list7']) {
        document.querySelector('.event_name7').textContent = userEvents['plan_list7'];
        document.querySelector('.event_title7').textContent = "Четверг";
        box_plan7.style.display = 'block';
      }

      localStorage.setItem(currentUser, JSON.stringify(userEvents));
    }

    dialog.close();
  });

  var canceld_button = document.getElementById('canceld_button');
  canceld_button.addEventListener("click", function (){
    dialog.close();
  });
});



let logOutBtn = document.getElementById('LogOutBtn');

document.addEventListener('DOMContentLoaded', () => {
  const currentUserLogin = localStorage.getItem('currentUser');
  const userInfoElement = document.getElementById('userInfo');
  userInfoElement.innerHTML = `${currentUserLogin}`;
  
});

logOutBtn.addEventListener('click', () => {
  // Удаление как currentUser, так и isCustomer при выходе
  localStorage.removeItem('currentUser');
  localStorage.removeItem('isCustomer');
  window.location.href = 'logreg/login.html';
});
