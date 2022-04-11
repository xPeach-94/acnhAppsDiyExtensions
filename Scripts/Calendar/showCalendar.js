let dateToday = new Date(curDate);

var monthName = document.getElementById("monthName");

// https://medium.com/@nitinpatel_20236/challenge-of-building-a-calendar-with-pure-javascript-a86f1303267d

const showCalendar = function(month, year)
{
    //  1. Get the starting day of the month:
    let firstDay = (new Date(year +"-"+ month +"-"+ "01").getDay());

    // 2. Next, get the number of days in that month:
    let monthDays = getMonthDays(month, year);

    var calendarCointainer = document.getElementById("tableContainer");
    
    // clearing all previous cells
    calendarCointainer.innerHTML = "";

    let initialRow = document.createElement("tr");

    for (let day = 0; day < 7; day++) 
    {
        cell = document.createElement("th"); // table data
        cellText = document.createTextNode(nameOfWeek(day));
        cell.appendChild(cellText);
        initialRow.appendChild(cell);
    }
    calendarCointainer.appendChild(initialRow); // appending each row into calendar body.

    // filing data about month and in the page via DOM.

    monthName.innerHTML = getMonthName(month) + "<br>" + year;

    // Once we have the two things ready, we populate the table with numbers 1 to [last day of month] on appropriate places. 
    // For example, if the starting of that month is Thursday and Ending date is 28, 
    // we’ll put the number 1 below thursday, 2 below, friday, 3 below saturday and so on. When we reach 28, we break out of the loop.

    let dateNr = 1;

    for (let i = 0; i < 6; i++) 
    {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.

        if (firstDay == 0) 
        {
            firstDay = 7;    
        }

        for (let j = 1; j < 8; j++) 
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


                let cellBtn = document.createElement("button");
                cellBtn.setAttribute("style", "background-color: transparent; border: none; padding: 0px; width: 100%; text-align: left;");
                cellBtn.setAttribute("value", dateNr);
                cellBtn.setAttribute("onclick", "cellBtnClicked(this)");

                // Here we can also check if the date/month/year we’re at matches the today’s date. If it does, we can highlight it.

                if (dateNr === dateToday.getDate() && year === dateToday.getFullYear() && month === (dateToday.getMonth()+1)) 
                {
                    cell.setAttribute("style", "background-color: rgba(105, 167, 253, 0.6);");
                } // highlight today’s date


                cellBtn.appendChild(cellText);

                if (document.getElementById("northHem").checked) 
                {
                    if (document.getElementById("showEvents").checked) 
                    {
                        cellBtn.appendChild(fillEvents(year +"-"+ month +"-"+ dateNr, 0));
                    }
                }
                else if (document.getElementById("southHem").checked)
                {
                    if (document.getElementById("showEvents").checked) 
                    {
                        cellBtn.appendChild(fillEvents(year +"-"+ month +"-"+ dateNr, 1));
                    }
                }

                if (document.getElementById("showBirthdays").checked) 
                {                    
                    cellBtn.appendChild(fillBirthdays(year +"-"+ month +"-"+ dateNr));
                }

                cell.appendChild(cellBtn);
                row.appendChild(cell);
                dateNr++;
            }
        }
        calendarCointainer.appendChild(row); // appending each row into calendar body.
    }
}

showCalendar((dateToday.getMonth()+1), dateToday.getFullYear());

let currentMonth = dateToday.getMonth()+1;
let currentYear = dateToday.getFullYear();

const getSelectedMonth = function()
{
    return currentMonth;
}
const getSelectedYear = function()
{
    return currentYear;
}

const next = function()
{
    if (currentMonth == 12) 
    {
        currentYear = currentYear +1;
        currentMonth = 1;
    }
    else
    {
        currentMonth = currentMonth +1;
    }

    showCalendar(currentMonth, currentYear);
}

const back = function()
{
    if (currentMonth == 1) 
    {
        currentYear = currentYear -1;
        currentMonth = 12;
    }
    else
    {
        currentMonth = currentMonth -1;
    }
    showCalendar(currentMonth, currentYear);
}

const backToCurrentDay = function()
{
    showCalendar((dateToday.getMonth()+1), dateToday.getFullYear());
    currentMonth = dateToday.getMonth()+1;
    currentYear = dateToday.getFullYear();
}