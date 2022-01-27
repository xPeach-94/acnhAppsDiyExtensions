let dateObj = new Date();

const myTimer = function (date) {
  var date = document.getElementById("date");
  var time = document.getElementById("time");
  date.innerHTML = new Date().toLocaleDateString();
  time.innerHTML = new Date().toLocaleTimeString();
}

setInterval(myTimer, 100);

const leadingZeros = function (number) {
  if ((number.toString()).length < 2) {
    number = "0" + number;
  }
  
  return number.toString();
}


const getYear = function () {
  let currentYear = dateObj.getFullYear();

  // return "2022";
  return currentYear;
}

const getMonth = function () {
  let currentMonth = dateObj.getMonth() + 1;

  currentMonth = leadingZeros(currentMonth);

  // return "02";
  return currentMonth;
}

const getDate = function () {
  let currentDate = dateObj.getDate();

  currentDate = leadingZeros(currentDate);

  // return "11";
  return currentDate;
}

let curDate = getYear() + "-" + getMonth() + "-" + getDate();
// console.log("Today's Date", curDate);