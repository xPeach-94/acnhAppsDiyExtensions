let dateToday = new Date(curDate);

var monthName = document.getElementById("monthName");

monthName.innerHTML = getMonthName(dateToday.getMonth()+1) +" "+ dateToday.getFullYear();

var calendarCointainer = document.getElementById("tableContainer");


// https://medium.com/@nitinpatel_20236/challenge-of-building-a-calendar-with-pure-javascript-a86f1303267d


//  1. Get the starting day of the month:
let firstDay = (new Date(getYear() +"-"+ getMonth() +"-"+ "01").getDay())

// 2. Next, get the number of days in that month:

let monthDays = getMonthDays(dateToday.getMonth()+1, dateToday.getFullYear());

// Once we have the two things ready, we populate the table with numbers 1 to [last day of month] on appropriate places. 
// For example, if the starting of that month is Thursday and Ending date is 28, 
// we’ll put the number 1 below thursday, 2 below, friday, 3 below saturday and so on. When we reach 28, we break out of the loop.


// console.log(firstDay);

