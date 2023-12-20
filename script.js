document.addEventListener('DOMContentLoaded', function() {
  const list = document.getElementById('list');
  var dialog = document.getElementById("dialog");
  var dialog_button = document.getElementById("dialog_button");

  // навешиваем обработчик на событие клик
  list.addEventListener('click', function () {
    dialog.showModal();
  });
  dialog_button.addEventListener("click", function () {
    dialog.close();
  });
});