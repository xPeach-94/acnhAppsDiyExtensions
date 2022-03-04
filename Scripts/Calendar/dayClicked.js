const cellBtnClicked = function(el)
{
    currentMonth = getSelectedMonth();
    currentYear = getSelectedYear();

    let dateClicked = new Date(currentYear +"-"+ leadingZeros(currentMonth) +"-"+ leadingZeros(el.value));

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
            if (event.name != "Festivale" && event.name != "Bunny Day" && event.name != "Fireworks Show" && event.name != "Turkey Day" && event.name != "Fishing Tourney" && event.name != "Bug Off North" && event.name != "Bug Off South") 
            {
                if (date.toLocaleDateString() == new Date(date.getFullYear() +"-"+ event.Date).toLocaleDateString()) 
                {
                    console.log(event);
                }
            }
            else if (event.name == "Fireworks Show")
            {
                let firework = new Date(date.getFullYear() +"-"+ getFireworksDate(date)).toLocaleDateString();
                if (date.toLocaleDateString() == firework) 
                {
                    console.log(event);
                }
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