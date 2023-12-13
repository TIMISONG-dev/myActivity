document.addEventListener('DOMContentLoaded', function() {
  const list = document.getElementById('list');
  var dialog = document.getElementById("dialog");
  var ok = document.getElementById("ok");

  // навешиваем обработчик на событие клик
  list.addEventListener('click', function () {
    dialog.showModal();
  });
  ok.addEventListener("click", function () {
    dialog.close();
  });
});