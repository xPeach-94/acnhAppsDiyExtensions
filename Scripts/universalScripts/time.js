let dateObj = new Date();

const myTimer = function (date) 
{
  var date = document.getElementById("date");
  var time = document.getElementById("time");
  date.innerHTML = dateObj.toLocaleDateString();
  time.innerHTML = dateObj.toLocaleTimeString();
}

setInterval(myTimer, 100);

const getYear = function () 
{
  let currentYear = dateObj.getFullYear();

  return currentYear;
}

const getMonth = function ()
{
  let currentMonth = dateObj.getMonth() +1;

  if ((currentMonth.toString()).length < 2) 
  {
    currentMonth = "0" + currentMonth;
  }

  return currentMonth;
}

const getDate = function ()
{
  let currentDate = dateObj.getDate();
  
  if ((currentDate.toString()).length < 2) 
  {
    currentDate = "0" + currentDate;
  }

  return currentDate;
}

// https://www.programiz.com/javascript/examples/check-leap-year
// program to check leap year
function checkLeapYear(year) 
{
  //three conditions to find out the leap year
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) 
  {
      return 29; // leap year
  } 
  else 
  {
      return 28; // no leap year
  }
}