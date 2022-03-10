const addImg = function(event, width = "100%")
{
    let eventImg = document.createElement("img");
    eventImg.setAttribute("src", event.img);
    eventImg.setAttribute("style", "width: "+width+";");

    return eventImg;
}


const fillEvents = function(date, hem)
{
    date = new Date(date);
    let day = date.getDate();
    let month = date.getMonth()+1;
    let newD;

    let eventDiv = document.createElement("div");

    let bug = new Date(date.getFullYear()+"-"+ getBugDate(hem, date));

    eventsArr.forEach
    (
        function (event)
        {
            if (event.name != "Festivale" && event.name != "Bunny Day" && event.name != "Fireworks Show" && event.name != "Turkey Day" && event.name != "Fishing Tourney" && event.name != "Bug Off North" && event.name != "Bug Off South") 
            {
                if (event.Date == (leadingZeros(month) +"-"+ leadingZeros(day))) 
                {
                    eventDiv.appendChild(addImg(event));
                }
            }
            else if (event.name == "Fireworks Show")
            {
                let firework = new Date(date.getFullYear() +"-"+ getFireworksDate(date)).toLocaleDateString();
                if (date.toLocaleDateString() == firework) 
                {
                    eventDiv.appendChild(addImg(event));
                }
            }
            else if (event.name == "Festivale") 
            {
                newD = new Date(date.getFullYear() +"-"+ getFestivaleDate(date));
                if (date.toLocaleDateString() == newD.toLocaleDateString()) 
                {
                    eventDiv.appendChild(addImg(event));
                }
            }
            else if (event.name == "Bunny Day")
            {
                newD = new Date(date.getFullYear() +"-"+ getBunnyDayDate(date));
                if (date.toLocaleDateString() == newD.toLocaleDateString()) 
                {
                    eventDiv.appendChild(addImg(event));
                }
            }
            else if (event.name == "Turkey Day")
            {
                newD = new Date(date.getFullYear() +"-"+ getTurkeyDate(date));
                if (date.toLocaleDateString() == newD.toLocaleDateString()) 
                {
                    eventDiv.appendChild(addImg(event));
                }
            }
            else if (event.name == "Fishing Tourney")
            {
                newD = new Date(date.getFullYear() +"-"+ getFishingDate(date));
                if (date.toLocaleDateString() == newD.toLocaleDateString()) 
                {
                    eventDiv.appendChild(addImg(event));
                }
            }
            else if (event.name == "Bug Off North" && hem == 0)
            {
                
                if (date.toLocaleDateString() == bug.toLocaleDateString()) 
                {
                    eventDiv.appendChild(addImg(event));
                }
            }
            else if (event.name == "Bug Off South" && hem == 1)
            {
                if (date.toLocaleDateString() == bug.toLocaleDateString()) 
                {
                    eventDiv.appendChild(addImg(event));
                }
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