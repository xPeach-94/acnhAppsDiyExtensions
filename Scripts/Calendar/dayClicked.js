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
    dayClicked.appendChild(dayBirthday(dateClicked));// append birthdays

    dayClicked.setAttribute("style", "flex");
}

const dayEvent = function(date)
{
    let eventDiv = document.createElement("div");
    eventDiv.setAttribute("class", "flexVertical");
    eventDiv.setAttribute("Style", "text-align: center;");

    let div = document.createElement("div");

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
                        div.appendChild(addImg(event, "30%"));
                        div.appendChild(eventName);
                        eventDiv.appendChild(div);
                    }
                }
                else if (event.name == "Fireworks Show")
                {
                    let firework = new Date(date.getFullYear() +"-"+ getFireworksDate(date)).toLocaleDateString();
                    if (date.toLocaleDateString() == firework) 
                    {
                        eventName.innerHTML = event.name;
                        div.appendChild(addImg(event, "30%"));
                        div.appendChild(eventName);
                        eventDiv.appendChild(div);
                    }
                }
                else if (event.name == "Festivale") 
                {
                    let newD = new Date(date.getFullYear() +"-"+ getFestivaleDate(date));
                    if (date.toLocaleDateString() == newD.toLocaleDateString()) 
                    {
                        eventName.innerHTML = event.name;
                        div.appendChild(addImg(event, "30%"));
                        div.appendChild(eventName);
                        eventDiv.appendChild(div);
                    }
                }
                else if (event.name == "Bunny Day")
                {
                    let newD = new Date(date.getFullYear() +"-"+ getBunnyDayDate(date));
                    if (date.toLocaleDateString() == newD.toLocaleDateString()) 
                    {
                        eventName.innerHTML = event.name;
                        div.appendChild(addImg(event, "30%"));
                        div.appendChild(eventName);
                        eventDiv.appendChild(div);
                    }
                }
                else if (event.name == "Turkey Day")
                {
                    newD = new Date(date.getFullYear() +"-"+ getTurkeyDate(date));
                    if (date.toLocaleDateString() == newD.toLocaleDateString()) 
                    {
                        eventName.innerHTML = event.name;
                        div.appendChild(addImg(event, "30%"));
                        div.appendChild(eventName);
                        eventDiv.appendChild(div);
                    }
                }
                else if (event.name == "Fishing Tourney")
                {
                    newD = new Date(date.getFullYear() +"-"+ getFishingDate(date));
                    if (date.toLocaleDateString() == newD.toLocaleDateString()) 
                    {
                        eventName.innerHTML = event.name;
                        div.appendChild(addImg(event, "30%"));
                        div.appendChild(eventName);
                        eventDiv.appendChild(div);
                    }
                }
                else if (event.name == "Bug Off North" && north.checked)
                {
                    newD = new Date(date.getFullYear() +"-"+ getBugDate(0, date));
                    if (date.toLocaleDateString() == newD.toLocaleDateString()) 
                    {
                        eventName.innerHTML = event.name;
                        div.appendChild(addImg(event, "30%"));
                        div.appendChild(eventName);
                        eventDiv.appendChild(div);
                    }
                }
                else if (event.name == "Bug Off South" && south.checked)
                {
                    newD = new Date(date.getFullYear() +"-"+ getBugDate(1, date));
                    if (date.toLocaleDateString() == newD.toLocaleDateString()) 
                    {
                        eventName.innerHTML = event.name;
                        div.appendChild(addImg(event, "30%"));
                        div.appendChild(eventName);
                        eventDiv.appendChild(div);
                    }
                }
            }

            else
            {
                let start = new Date(date.getFullYear()+"-"+event.Date);
                let end = new Date(date.getFullYear()+"-"+event.endDate);

                if (date >= start && date <= end) 
                {
                    let div = document.createElement("div");

                    let eventStart = document.createElement("h4");
                    let eventEnd = document.createElement("h4");
                    let eventName = document.createElement("h4");
                    eventName.setAttribute("style", "padding: 10px 0; color: #1B9CE2;");

                    eventName.innerHTML = event.name;
                    eventStart.innerHTML = "Start Date: " + start.toLocaleDateString();
                    eventEnd.innerHTML = "End Date: " + end.toLocaleDateString();
                    
                    div.appendChild(addImg(event, "30%"));
                    div.appendChild(eventName);
                    div.appendChild(eventStart);
                    div.appendChild(eventEnd);

                    eventDiv.appendChild(div);
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
                // console.log(material.name, start.toLocaleDateString(), end.toLocaleDateString());

                start.setFullYear(getSelectedYear())
                end.setFullYear(getSelectedYear());

                if ((material.name).includes("Egg")) 
                {
                    start = new Date(subtractDays(getEaster(start.getFullYear()), 7))
                    end = new Date(getEaster(end.getFullYear()));
                }

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
                        materialStart.innerHTML = "Start Date: " + new Date(start).toLocaleDateString();
                        materialEnd.innerHTML = "End Date: " + new Date(end).toLocaleDateString();

                        div.appendChild(addImg(material, "30%"));
                        div.appendChild(materialName);
                        div.appendChild(materialStart);
                        div.appendChild(materialEnd);

                        seasonDiv.appendChild(div);
                    }
                }
                else if ((date >= start && date <= new Date(date.getFullYear() + "-12-31")) || (date >= new Date(date.getFullYear() + "-01-01") && date <= end)) 
                {
                    if (date >= start && date <= new Date(date.getFullYear() + "-12-31"))
                    {
                        end.setFullYear(end.getFullYear() +1)
                    }
                    else if (date >= new Date(date.getFullYear() + "-01-01") && date <= end)
                    {
                        start.setFullYear(start.getFullYear()-1);
                    }

                    let materialName = document.createElement("h4");
                    materialName.setAttribute("style", "padding: 10px 0; color: #1B9CE2;");

                    let materialStart = document.createElement("h4");
                    let materialEnd = document.createElement("h4");

                    let div = document.createElement("div");
                    div.setAttribute("style", "width: 100%;");

                    materialName.innerHTML = material.name;
                    materialStart.innerHTML = "Start Date: " + new Date(start).toLocaleDateString();
                    materialEnd.innerHTML = "End Date: " + new Date(end).toLocaleDateString();

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
                let start = new Date(material.StartSouth);
                let end = new Date(material.EndSouth);
                // console.log(material.name, start.toLocaleDateString(), end.toLocaleDateString());

                start.setFullYear(getSelectedYear())
                end.setFullYear(getSelectedYear());

                if ((material.name).includes("Egg")) 
                {
                    start = new Date(subtractDays(getEaster(start.getFullYear()), 7))
                    end = new Date(getEaster(end.getFullYear()));
                }

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
                        materialStart.innerHTML = "Start Date: " + new Date(start).toLocaleDateString();
                        materialEnd.innerHTML = "End Date: " + new Date(end).toLocaleDateString();

                        div.appendChild(addImg(material, "30%"));
                        div.appendChild(materialName);
                        div.appendChild(materialStart);
                        div.appendChild(materialEnd);

                        seasonDiv.appendChild(div);
                    }
                }
                else if ((date >= start && date <= new Date(date.getFullYear() + "-12-31")) || (date >= new Date(date.getFullYear() + "-01-01") && date <= end)) 
                {
                    if (date >= start && date <= new Date(date.getFullYear() + "-12-31"))
                    {
                        end.setFullYear(end.getFullYear() +1)
                    }
                    else if (date >= new Date(date.getFullYear() + "-01-01") && date <= end)
                    {
                        start.setFullYear(start.getFullYear()-1);
                    }

                    let materialName = document.createElement("h4");
                    materialName.setAttribute("style", "padding: 10px 0; color: #1B9CE2;");

                    let materialStart = document.createElement("h4");
                    let materialEnd = document.createElement("h4");

                    let div = document.createElement("div");
                    div.setAttribute("style", "width: 100%;");

                    materialName.innerHTML = material.name;
                    materialStart.innerHTML = "Start Date: " + new Date(start).toLocaleDateString();
                    materialEnd.innerHTML = "End Date: " + new Date(end).toLocaleDateString();

                    div.appendChild(addImg(material, "30%"));
                    div.appendChild(materialName);
                    div.appendChild(materialStart);
                    div.appendChild(materialEnd);

                    seasonDiv.appendChild(div);
                }
            }
        )
    }

    return seasonDiv;
}

const dayBirthday = function(date)
{
    let birthdayDiv = document.createElement("div");
    birthdayDiv.setAttribute("class", "flexVertical");
    birthdayDiv.setAttribute("Style", "text-align: center; align-items: center;");

    villagerBirthdays.forEach
    (
        function(villager)
        {
            let birthday = new Date(date.getFullYear() +"-"+ villager.birthday);
            if (date.toLocaleDateString() == birthday.toLocaleDateString()) 
            {
                let birthdayName = document.createElement("h4");
                birthdayName.setAttribute("style", "padding: 10px 0; color: #1B9CE2;");

                let div = document.createElement("div");
                div.setAttribute("style", "width: 100%;");

                birthdayName.innerHTML = villager.name;

                let img = document.createElement("img");
                img.setAttribute("src", villager.icon_url);
                img.setAttribute("style", "width: 30%;");

                div.appendChild(img);
                div.appendChild(birthdayName);

                birthdayDiv.appendChild(div);
            }
        }
    )

    return birthdayDiv;
}