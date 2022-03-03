const fillEvents = function(date, hem)
{
    date = new Date(date);
    let day = date.getDate();
    let month = date.getMonth()+1;

    let eventDiv = document.createElement("div");

    let firework = new Date(date.getFullYear() +"-"+ getFireworksDate(date)).toLocaleDateString();
    let bug = new Date(date.getFullYear()+"-"+ getBugDate(hem, date));

    eventsArr.forEach
    (
        function (event)
        {
            if (event.Date == (leadingZeros(month) +"-"+ leadingZeros(day)) && event.name != "Fireworks Show" && event.name != "Bug Off North" && event.name != "Bug Off South") 
            {
                let eventImg = document.createElement("img");
                eventImg.setAttribute("src", event.img);
                eventImg.setAttribute("style", "width: 100%;");

                eventDiv.appendChild(eventImg);
            }

            if (date.toLocaleDateString() == firework) 
            {
                if (event.name == "Fireworks Show") 
                {
                    let eventImg = document.createElement("img");
                    eventImg.setAttribute("src", event.img);
                    eventImg.setAttribute("style", "width: 100%;");

                    eventDiv.appendChild(eventImg);
                }
            }

            if (event.name == "Bug Off North" && hem == 0 && date.toLocaleDateString() == bug.toLocaleDateString()) 
            {
                let eventImg = document.createElement("img");
                eventImg.setAttribute("src", event.img);
                eventImg.setAttribute("style", "width: 100%;");

                eventDiv.appendChild(eventImg);
            }
            else if (event.name == "Bug Off South" && hem == 1 && date.toLocaleDateString() == bug.toLocaleDateString()) 
            {
                let eventImg = document.createElement("img");
                eventImg.setAttribute("src", event.img);
                eventImg.setAttribute("style", "width: 100%;");

                eventDiv.appendChild(eventImg);
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