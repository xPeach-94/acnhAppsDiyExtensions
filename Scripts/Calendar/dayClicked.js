seasonalMaterialArr = []
materialArr.forEach
(
    function (material)
    {
        if (material.Start)
        {
            seasonalMaterialArr.push(material);
        }
    }
)

let north = document.getElementById("northHem");
let south = document.getElementById("southHem");

const cellBtnClicked = function(el)
{
    currentMonth = getSelectedMonth();
    currentYear = getSelectedYear();

    let dateClicked = new Date(currentYear +"-"+ leadingZeros(currentMonth) +"-"+ leadingZeros(el.value));
    // console.log(dateClicked.toLocaleDateString());

    let dayClicked = document.getElementById("currentDay");
    dayClicked.innerHTML = "";

    let title = document.createElement("h3");
    title.innerHTML = dateClicked.toLocaleDateString();

    dayClicked.appendChild(title);
    dayClicked.appendChild(dayEvent(dateClicked));// append events
    dayClicked.appendChild(daySeason(dateClicked));// append seasonal
    // dayClicked.appendChild(dayBirthday(dateClicked));// append birthdays

    dayClicked.setAttribute("style", "flex");
}

const dayEvent = function(date)
{
    let eventDiv = document.createElement("div");
    eventDiv.setAttribute("Style", "text-align: center;");
    let eventName = document.createElement("h4");
    eventName.setAttribute("style", "padding: 10px 0; color: #1B9CE2;");

    eventsArr.forEach
    (
        function (event)
        {
            if (!event.endDate) 
            {
                if (event.name != "Festivale" && event.name != "Bunny Day" && event.name != "Fireworks Show" && event.name != "Turkey Day" && event.name != "Fishing Tourney" && event.name != "Bug Off North" && event.name != "Bug Off South") 
                {
                    if (date.toLocaleDateString() == new Date(date.getFullYear() +"-"+ event.Date).toLocaleDateString()) 
                    {
                        eventName.innerHTML = event.name;
                        eventDiv.appendChild(addImg(event, "30%"));
                        eventDiv.appendChild(eventName);
                    }
                }
                else if (event.name == "Fireworks Show")
                {
                    let firework = new Date(date.getFullYear() +"-"+ getFireworksDate(date)).toLocaleDateString();
                    if (date.toLocaleDateString() == firework) 
                    {
                        eventName.innerHTML = event.name;
                        eventDiv.appendChild(addImg(event, "30%"));
                        eventDiv.appendChild(eventName);
                    }
                }
                else if (event.name == "Festivale") 
                {
                    let newD = new Date(date.getFullYear() +"-"+ getFestivaleDate(date));
                    if (date.toLocaleDateString() == newD.toLocaleDateString()) 
                    {
                        eventName.innerHTML = event.name;
                        eventDiv.appendChild(addImg(event, "30%"));
                        eventDiv.appendChild(eventName);
                    }
                }
                else if (event.name == "Bunny Day")
                {
                    let newD = new Date(date.getFullYear() +"-"+ getBunnyDayDate(date));
                    if (date.toLocaleDateString() == newD.toLocaleDateString()) 
                    {
                        eventName.innerHTML = event.name;
                        eventDiv.appendChild(addImg(event, "30%"));
                        eventDiv.appendChild(eventName);
                    }
                }
                else if (event.name == "Turkey Day")
                {
                    newD = new Date(date.getFullYear() +"-"+ getTurkeyDate(date));
                    if (date.toLocaleDateString() == newD.toLocaleDateString()) 
                    {
                        eventName.innerHTML = event.name;
                        eventDiv.appendChild(addImg(event, "30%"));
                        eventDiv.appendChild(eventName);
                    }
                }
                else if (event.name == "Fishing Tourney")
                {
                    newD = new Date(date.getFullYear() +"-"+ getFishingDate(date));
                    if (date.toLocaleDateString() == newD.toLocaleDateString()) 
                    {
                        eventName.innerHTML = event.name;
                        eventDiv.appendChild(addImg(event, "30%"));
                        eventDiv.appendChild(eventName);
                    }
                }
                else if (event.name == "Bug Off North" && north.checked)
                {
                    newD = new Date(date.getFullYear() +"-"+ getBugDate(0, date));
                    if (date.toLocaleDateString() == newD.toLocaleDateString()) 
                    {
                        eventName.innerHTML = event.name;
                        eventDiv.appendChild(addImg(event, "30%"));
                        eventDiv.appendChild(eventName);
                    }
                }
                else if (event.name == "Bug Off South" && south.checked)
                {
                    newD = new Date(date.getFullYear() +"-"+ getBugDate(1, date));
                    if (date.toLocaleDateString() == newD.toLocaleDateString()) 
                    {
                        eventName.innerHTML = event.name;
                        eventDiv.appendChild(addImg(event, "30%"));
                        eventDiv.appendChild(eventName);
                    }
                }
            }

            else
            {
                // console.log(date);
                let start = new Date(date.getFullYear()+"-"+event.Date);
                let end = new Date(date.getFullYear()+"-"+event.endDate);

                if (date >= start && date <= end) 
                {
                    let eventStart = document.createElement("h4");
                    let eventEnd = document.createElement("h4");
                    let eventName = document.createElement("h4");
                    eventName.setAttribute("style", "padding: 10px 0; color: #1B9CE2;");

                    eventName.innerHTML = event.name;
                    eventStart.innerHTML = "Start Date: " + event.Date;
                    eventEnd.innerHTML = "End Date: " + event.endDate;
                    
                    eventDiv.appendChild(addImg(event, "30%"));
                    eventDiv.appendChild(eventName);
                    eventDiv.appendChild(eventStart);
                    eventDiv.appendChild(eventEnd);
                }
            }
        }
    )
    return eventDiv;
}

const daySeason = function(date)
{
    let seasonDiv = document.createElement("div");
    seasonDiv.setAttribute("class", "flexVertical");
    seasonDiv.setAttribute("Style", "text-align: center; align-items: center;");


    if (north.checked) 
    {
        seasonalMaterialArr.forEach
        (
            function (material)
            {
                let start = new Date(material.Start);
                let end = new Date(material.End);

                // console.log(material.name);
                // console.log("start: ", start.toLocaleDateString());
                // console.log("end", end.toLocaleDateString());

                if (start < end)
                {
                    if (date >= start && date <= end) 
                    {
                        let materialName = document.createElement("h4");
                        materialName.setAttribute("style", "padding: 10px 0; color: #1B9CE2;");

                        let materialStart = document.createElement("h4");
                        let materialEnd = document.createElement("h4");

                        let div = document.createElement("div");
                        div.setAttribute("style", "width: 100%;");

                        materialName.innerHTML = material.name;
                        materialStart.innerHTML = "Start Date: " + new Date(material.Start).toLocaleDateString();
                        materialEnd.innerHTML = "End Date: " + new Date(material.End).toLocaleDateString();

                        div.appendChild(addImg(material, "30%"));
                        div.appendChild(materialName);
                        div.appendChild(materialStart);
                        div.appendChild(materialEnd);

                        seasonDiv.appendChild(div);
                    }
                }
                else if ((date >= start && date <= new Date(date.getFullYear() + "-12-31")) || (date >= new Date(date.getFullYear() + "-01-01") && date <= end)) 
                {
                    console.log(material.name, material.Start, material.End);
                    // the end of the year dates SUCK cause it's always displaying the current year...

                    let materialName = document.createElement("h4");
                    materialName.setAttribute("style", "padding: 10px 0; color: #1B9CE2;");

                    let materialStart = document.createElement("h4");
                    let materialEnd = document.createElement("h4");

                    let div = document.createElement("div");
                    div.setAttribute("style", "width: 100%;");

                    materialName.innerHTML = material.name;
                    materialStart.innerHTML = "Start Date: " + new Date(material.Start).toLocaleDateString();
                    materialEnd.innerHTML = "End Date: " + new Date(material.End).toLocaleDateString();

                    div.appendChild(addImg(material, "30%"));
                    div.appendChild(materialName);
                    div.appendChild(materialStart);
                    div.appendChild(materialEnd);

                    seasonDiv.appendChild(div);
                }
            }
        )
    }
    else if (south.checked) 
    {
        seasonalMaterialArr.forEach
        (
            function (material)
            {
                
            }
        )
    }

    return seasonDiv;
}

const dayBirthday = function(date)
{

}