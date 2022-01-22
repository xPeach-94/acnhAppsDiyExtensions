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