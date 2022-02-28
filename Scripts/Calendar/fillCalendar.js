const fillEvents = function(date)
{
    date = new Date(date);
    let day = date.getDate();
    let month = date.getMonth()+1;

    let eventDiv = document.createElement("div");

    eventsArr.forEach
    (
        function (event)
        {
            if (event.Date == (leadingZeros(month) +"-"+ leadingZeros(day)) && event.name != "Fireworks Show") 
            {
                let eventImg = document.createElement("img");
                eventImg.setAttribute("src", event.img);
                eventImg.setAttribute("style", "height: 50px;");

                eventDiv.appendChild(eventImg);
            }
            else if (event.Date == (leadingZeros(month) +"-"+ leadingZeros(day)) && event.name == "Fireworks Show")
            {
                // fireworks show every sunday in august

            }
        }
    )

    return eventDiv;
}

const fillBirthdays = function(date)
{
    date = new Date(date);
    let day = date.getDate();
    let month = date.getMonth()+1;

    let villagerDiv = document.createElement("div");
    villagerDiv.setAttribute("class", "flexVertical");
    villagerDiv.setAttribute("style", "gap: 0px;");

    villagerBirthdays.forEach
    (
        function (villager)
        {
            if (villager.birthday == month +"-"+ day) 
            {
                let vilImg = document.createElement("img");
                vilImg.setAttribute("src", villager.icon_url);
                vilImg.setAttribute("style", "width: 100%;");

                villagerDiv.appendChild(vilImg);
            }
        }
    )
    return villagerDiv;
}