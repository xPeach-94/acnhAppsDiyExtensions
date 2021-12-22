const myTimer = function (date) {
  var date = document.getElementById("date");
  var time = document.getElementById("time");
  date.innerHTML = new Date().toLocaleDateString();
  time.innerHTML = new Date().toLocaleTimeString();
}

setInterval(myTimer, 100);