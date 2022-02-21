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


const getMonthName = function(month)
{
  switch (month) 
  {
    case 1:
        return "January";
    case 2:
        return "February";
    case 3:
        return "March";
    case 4:
        return "April";
    case 5:
        return "May";
    case 6:
        return "June";
    case 7:
        return "July";
    case 8:
        return "August";
    case 9:
        return "September";
    case 10:
        return "October";
    case 11:
        return "November";
    case 12:
        return "December";

    default:
        console.log("oops something went wrong :(", month);
        break;
  }
}

const getMonthDays = function (month, year) {
  switch (month) {
      case 1:
          return 31;
      case 2:
          return checkLeapYear(year);
      case 3:
          return 31;
      case 4:
          return 30;
      case 5:
          return 31;
      case 6:
          return 30;
      case 7:
          return 31;
      case 8:
          return 31;
      case 9:
          return 30;
      case 10:
          return 31;
      case 11:
          return 30;
      case 12:
          return 31;

      default:
          console.log("oops something went wrong :(", month);
          break;
  }
}

const getYear = function () 
{
  let currentYear = dateObj.getFullYear();

  // return "2024";
  return currentYear;
}

const getMonth = function () 
{
  let currentMonth = dateObj.getMonth() + 1;

  currentMonth = leadingZeros(currentMonth);

  // return "04";
  return currentMonth;
}

const getDate = function () 
{
  let currentDate = dateObj.getDate();

  currentDate = leadingZeros(currentDate);

  // return "18";
  return currentDate;
}

let curDate = getYear() + "-" + getMonth() + "-" + getDate();
// console.log("Today's Date:", new Date(curDate));