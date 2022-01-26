const eventAdd = function(event)
{
    var newEvent;
    
    if (event.name == "Bug Off North")
    {
        newEvent = document.getElementById("eventsNorth");
        if (event.img)
        {
            var icon = document.createElement("img");
            icon.setAttribute("src", event.img);
            icon.setAttribute("class", "icons")
            icon.style.width = "80%";
            newEvent.appendChild(icon);
        }

        var name = document.createElement("h4");
        name.innerHTML = event.name;

        newEvent.appendChild(name);
    }
    else if (event.name == "Bug Off South")
    {
        newEvent = document.getElementById("eventsSouth");
        if (event.img)
        {
            var icon = document.createElement("img");
            icon.setAttribute("src", event.img);
            icon.setAttribute("class", "icons")
            icon.style.width = "80%";
            newEvent.appendChild(icon);
        }

        var name = document.createElement("h4");
        name.innerHTML = event.name;

        newEvent.appendChild(name);
    }
    else
    {
        newEvent = document.getElementById("eventsNorth");

        if (event.img)
        {
            var icon = document.createElement("img");
            icon.setAttribute("src", event.img);
            icon.setAttribute("class", "icons")
            icon.style.width = "80%";
            newEvent.appendChild(icon);
        }

        var name = document.createElement("h4");
        name.innerHTML = event.name;

        newEvent.appendChild(name);


        newEvent = document.getElementById("eventsSouth");
        if (event.img)
        {
            var icon = document.createElement("img");
            icon.setAttribute("src", event.img);
            icon.setAttribute("class", "icons")
            icon.style.width = "80%";
            newEvent.appendChild(icon);
        }

        var name = document.createElement("h4");
        name.innerHTML = event.name;

        newEvent.appendChild(name);
    }
}

eventsArr.forEach
    (
        function (events) 
        {
            if (events.endDate != undefined) 
            {
                if ((curDate >= getYear() +"-"+ events.Date) && (curDate <= getYear() +"-"+ events.endDate)) 
                {
                    eventAdd(events);
                }
            }
            else if (curDate == getYear() +"-"+ events.Date)
            {
                eventAdd(events);
            }
        }
    )