let dateToday = new Date(curDate);

var monthName = document.getElementById("monthName");

// https://medium.com/@nitinpatel_20236/challenge-of-building-a-calendar-with-pure-javascript-a86f1303267d

const showCalendar = function(month, year)
{
    //  1. Get the starting day of the month:
    let firstDay = (new Date(getYear() +"-"+ getMonth() +"-"+ "01").getDay());

    // 2. Next, get the number of days in that month:
    let monthDays = getMonthDays(dateToday.getMonth()+1, dateToday.getFullYear());

    var calendarCointainer = document.getElementById("tableContainer");
    // clearing all previous cells
    calendarCointainer.innerHTML = "";

    // filing data about month and in the page via DOM.

    monthName.innerHTML = getMonthName(month) +" "+ year;

    // Once we have the two things ready, we populate the table with numbers 1 to [last day of month] on appropriate places. 
    // For example, if the starting of that month is Thursday and Ending date is 28, 
    // we’ll put the number 1 below thursday, 2 below, friday, 3 below saturday and so on. When we reach 28, we break out of the loop.

    let dateNr = 1;

    for (let i = 0; i < 6; i++) 
    {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) 
        {
            if (i === 0 && j < firstDay) // create empty cells before start month
            {
                cell = document.createElement("td"); // table data
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (dateNr > monthDays) // stop if the date number is bigger than the end of the month number
            {
                break;
            }
            else // create cells with the date number to represent the date
            {
                let cell = document.createElement("td");
                cell.setAttribute("class", "cell");
                cellText = document.createTextNode(dateNr);

                // Here we can also check if the date/month/year we’re at matches the today’s date. If it does, we can highlight it.

                if (dateNr === dateToday.getDate() && year === dateToday.getFullYear() && month === (dateToday.getMonth()+1)) 
                {
                    cell.setAttribute("style", "background-color: #69a7fd;");
                } // highlight today’s date

                cell.appendChild(cellText);
                row.appendChild(cell);
                dateNr++;
            }
        }
        calendarCointainer.appendChild(row); // appending each row into calendar body.
    }
}

showCalendar((dateToday.getMonth()+1), dateToday.getFullYear());