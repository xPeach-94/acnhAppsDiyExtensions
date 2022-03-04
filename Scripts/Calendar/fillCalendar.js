const addImg = function(event)
{
    let eventImg = document.createElement("img");
    eventImg.setAttribute("src", event.img);
    eventImg.setAttribute("style", "width: 100%;");

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
                newD = date.getFullYear() +"-"+ getFestivaleDate(date);
                // console.log(event.name, newD);
            }
            else
            {
                // console.log(event.name);
            }

        //     let newD
        //     if (event.name == "Festivale") 
        //     {
        //         newD = getFestivaleDate(date);
        //     }
        //     if (event.name == "Bunny Day") 
        //     {
        //         newD = getBunnyDayDate(date);
        //     }
        //     if (event.name == "Turkey Day") 
        //     {
        //         newD = getTurkeyDate(date);    
        //     }
        //     if (event.name == "Fishing Tourney") 
        //     {
        //         newD = getFishingDate(date);
        //     }

        //     if (event.name != "Fireworks Show" && event.name != "Bug Off North" && event.name != "Bug Off South" && event.name != "Festivale" && event.name != "Bunny Day" && event.name != "Turkey Day" && event.name != "Fishing Tourney") 
        //     {
        //         if (event.Date == (leadingZeros(month) +"-"+ leadingZeros(day))) 
        //         {
        //             let eventImg = document.createElement("img");
        //             eventImg.setAttribute("src", event.img);
        //             eventImg.setAttribute("style", "width: 100%;");

        //             eventDiv.appendChild(eventImg);
        //         }
        //     }
        //     else if (newD == (leadingZeros(month) +"-"+ leadingZeros(day)) && event.name != "Fireworks Show" && event.name != "Bug Off North" && event.name != "Bug Off South") 
        //     {
        //         let eventImg = document.createElement("img");
        //         eventImg.setAttribute("src", event.img);
        //         eventImg.setAttribute("style", "width: 100%;");

        //         eventDiv.appendChild(eventImg);
        //     }

        //     if (date.toLocaleDateString() == firework) 
        //     {
        //         if (event.name == "Fireworks Show") 
        //         {
        //             let eventImg = document.createElement("img");
        //             eventImg.setAttribute("src", event.img);
        //             eventImg.setAttribute("style", "width: 100%;");

        //             eventDiv.appendChild(eventImg);
        //         }
        //     }

        //     if (event.name == "Bug Off North" && hem == 0 && date.toLocaleDateString() == bug.toLocaleDateString()) 
        //     {
        //         let eventImg = document.createElement("img");
        //         eventImg.setAttribute("src", event.img);
        //         eventImg.setAttribute("style", "width: 100%;");

        //         eventDiv.appendChild(eventImg);
        //     }
        //     else if (event.name == "Bug Off South" && hem == 1 && date.toLocaleDateString() == bug.toLocaleDateString()) 
        //     {
        //         let eventImg = document.createElement("img");
        //         eventImg.setAttribute("src", event.img);
        //         eventImg.setAttribute("style", "width: 100%;");

        //         eventDiv.appendChild(eventImg);
        //     }
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