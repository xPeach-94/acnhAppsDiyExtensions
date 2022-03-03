const cellBtnClicked = function(el)
{
    currentMonth = getSelectedMonth();
    currentYear = getSelectedYear();

    let dateClicked = new Date(currentYear +"-"+ leadingZeros(currentMonth) +"-"+ leadingZeros(el.value));
    // console.log("Clicked", dateClicked);

    let dayClicked = document.getElementById("currentDay");
    dayClicked.innerHTML = "";

    dayClicked.appendChild(dayEvent(dateClicked));// append events
    // dayClicked.appendChild(daySeason(dateClicked));// append seasonal
    // dayClicked.appendChild(dayBirthday(dateClicked));// append birthdays

    // dayClicked.setAttribute("style", "flex");
}

const dayEvent = function(date)
{
    let event = document.createElement("div");

    eventsArr.forEach
    (
        function (event)
        {
            if (date.toLocaleDateString() == new Date(date.getFullYear() +"-"+ event.Date).toLocaleDateString()) 
            {
                console.log(event);
            }
        }
    )

    return event
}

const daySeason = function(date)
{

}

const dayBirthday = function(date)
{

}