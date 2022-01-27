const eventAdd = function(event)
{
    var newEvent;
    
    if (event.name == "Bug Off North")
    {
        newEvent = document.getElementById("eventsNorth");
        
        var icon = document.createElement("img");
        icon.setAttribute("src", event.img);
        icon.setAttribute("class", "icons")
        icon.style.width = "80%";
        newEvent.appendChild(icon);

        var name = document.createElement("h4");
        var date = document.createElement("h5");
        name.innerHTML = event.name;
        date.innerHTML = new Date(getYear() +"-"+ event.Date).toLocaleDateString();

        newEvent.appendChild(name);
        newEvent.appendChild(date);
    }
    else if (event.name == "Bug Off South")
    {
        newEvent = document.getElementById("eventsSouth");
        
        var icon = document.createElement("img");
        icon.setAttribute("src", event.img);
        icon.setAttribute("class", "icons")
        icon.style.width = "80%";
        newEvent.appendChild(icon);

        var name = document.createElement("h4");
        var date = document.createElement("h5");
        name.innerHTML = event.name;
        date.innerHTML = new Date(getYear() +"-"+ event.Date).toLocaleDateString();

        newEvent.appendChild(name);
        newEvent.appendChild(date);
    }
    else
    {
        newEvent = document.getElementById("eventsNorth");

        var icon = document.createElement("img");
        icon.setAttribute("src", event.img);
        icon.setAttribute("class", "icons")
        icon.style.width = "80%";
        newEvent.appendChild(icon);

        var name = document.createElement("h4");
        var date = document.createElement("h5");
        name.innerHTML = event.name;
        date.innerHTML = new Date(getYear() +"-"+ event.Date).toLocaleDateString();

        newEvent.appendChild(name);
        newEvent.appendChild(date);


        newEvent = document.getElementById("eventsSouth");

        var icon = document.createElement("img");
        icon.setAttribute("src", event.img);
        icon.setAttribute("class", "icons")
        icon.style.width = "80%";
        newEvent.appendChild(icon);

        var name = document.createElement("h4");
        var date = document.createElement("h5");
        name.innerHTML = event.name;
        date.innerHTML = new Date(getYear() +"-"+ event.Date).toLocaleDateString();

        newEvent.appendChild(name);
        newEvent.appendChild(date);
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

const nextEvent = function()
{
    for (var i = 0; i < eventsArr.length; i++) 
    {
        if (curDate < getYear() +"-"+ eventsArr[i].Date) 
        {
            if (eventsArr[i].name == "Bug Off North")
            {
                var newEvent = document.getElementById("eventsNorth");
                var upcomming = document.createElement("h4");
                upcomming.setAttribute("style", "color: #006994; margin: 10px 0px");

                upcomming.innerHTML = "Upcoming Event:";
                newEvent.appendChild(upcomming);

                eventAdd(eventsArr[i]);

                var newEvent = document.getElementById("eventsSouth");
                var upcomming = document.createElement("h4");
                upcomming.setAttribute("style", "color: #006994; margin: 10px 0px");

                upcomming.innerHTML = "Upcoming Event:";
                newEvent.appendChild(upcomming);

                eventAdd(eventsArr[i+1]);

                break;
            }
            else if (eventsArr[i].name == "Bug Off South")
            {
                var newEvent = document.getElementById("eventsSouth");
                var upcomming = document.createElement("h4");
                upcomming.setAttribute("style", "color: #006994; margin: 10px 0px");

                upcomming.innerHTML = "Upcoming Event:";
                newEvent.appendChild(upcomming);

                eventAdd(eventsArr[i]);

                var newEvent = document.getElementById("eventsNorth");
                var upcomming = document.createElement("h4");
                upcomming.setAttribute("style", "color: #006994; margin: 10px 0px");

                upcomming.innerHTML = "Upcoming Event:";
                newEvent.appendChild(upcomming);

                eventAdd(eventsArr[i+1]);
                
                break;
            }
            else
            {
                var newEvent = document.getElementById("eventsNorth");
                var upcomming = document.createElement("h4");
                upcomming.setAttribute("style", "color: #006994; margin: 10px 0px");

                upcomming.innerHTML = "Upcoming Event:";
                newEvent.appendChild(upcomming);

                var newEvent = document.getElementById("eventsSouth");
                var upcomming = document.createElement("h4");
                upcomming.setAttribute("style", "color: #006994; margin: 10px 0px");

                upcomming.innerHTML = "Upcoming Event:";
                newEvent.appendChild(upcomming);

                eventAdd(eventsArr[i]);
                break;
            }
        }
    }
}()