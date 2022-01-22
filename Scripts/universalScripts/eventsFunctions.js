const getMonthDays = function (month, year)
{
    switch (month) 
    {
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

const  subtractDays = function (date, days) // subtracting the amount of days from a given date
{
    let fullDate = new Date(date);
    
    let d = fullDate.getDate();
    let m = fullDate.getMonth() +1; // getMonth gives the index of the month, added +1 to get the month number
    let y = fullDate.getFullYear();

    d = d - days; // new day is current day minus the given subtracting days
    
    if (d <= 0) // if the new numer is less or equal to 0
    {
        m = m - 1; // go back into the previous month
        d = (getMonthDays(m, y) + d); // check which month it is and them add the remainder of the numbers, 31 + (-3) = 28
    }

    if ((m.toString()).length < 2) 
    {
        m = "0" + m;
    }
    if ((d.toString()).length < 2) 
    {
        d = "0" + d;
    }

    let newD = y +"-"+ m +"-"+ d;

    return newD;
}

const addDays = function(date, days)
{
   let fullDate = new Date(date);
   let d = fullDate.getDate();
   let m = fullDate.getMonth() +1;
   let y = fullDate.getFullYear();

   d = d + days;

   if (d > getMonthDays(m, y)) 
   {
       d = d - getMonthDays(m, y);
       m = m + 1;
   }

   if ((m.toString()).length < 2) 
   {
       m = "0" + m;
    }
    if ((d.toString()).length < 2) 
    {
        d = "0" + d;
    }

    let newD = y +"-"+ m +"-"+ d;

    return newD;
}