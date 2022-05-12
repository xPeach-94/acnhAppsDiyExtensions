const seasonalMaterialsNorth = function (item) 
{
    var newSeason = document.getElementById("seasonalNorth");
    var icon = document.createElement("img");

    icon.setAttribute("src", item.img);
    icon.setAttribute("class", "icons")
    icon.style.width = "100%";

    newSeason.appendChild(icon);
}

const seasonalMaterialsSouth = function (item) 
{
    var newSeason = document.getElementById("seasonalSouth");
    var icon = document.createElement("img");

    icon.setAttribute("src", item.img);
    icon.setAttribute("class", "icons")
    icon.style.width = "100%";

    newSeason.appendChild(icon);
}

materialArr.forEach //Loop through array
(
    function (item) 
    {
        // console.log(item.name, item.Start);

        // if (("Start" in item) && ("End" in item) && ("img" in item)) 
        if (item.Start && item.End && item.img)
        {
            if (curDate >= item.Start && curDate <= item.End) {
                seasonalMaterialsNorth(item)
            }
            else if ((item.Start > item.End)) {
                if (((curDate >= item.Start && curDate <= getYear() + "-12-31") || (curDate >= getYear() + "-01-01" && curDate <= item.End))) {
                    seasonalMaterialsNorth(item)
                }
            }
        }
        if (item.StartSouth && item.EndSouth && item.img) 
        {
            if ((curDate >= item.StartSouth && curDate <= item.EndSouth)) {
                seasonalMaterialsSouth(item)
            }
            else if ((item.StartSouth > item.EndSouth)) {
                if (((curDate >= item.StartSouth && curDate <= getYear() + "-12-31")) || (curDate >= getYear() + "-01-01" && curDate <= item.EndSouth)) {
                    seasonalMaterialsSouth(item)
                }
            }
        }
    }
)

const seasonArr = [];

const upCommingSeason = function()
{
    materialArr.forEach(material => 
    {
        if (material.Start) 
        {
            seasonArr.push(material);
        }
    });

    for (let i = 0; i < seasonArr.length; i++) 
    {
        let newD = subtractDays(seasonArr[i].Start, 7);
        if (curDate >= newD && curDate < seasonArr[i].Start) 
        {
            var newSeason = document.getElementById("seasonalNorth");
            var upcomming = document.createElement("h4");
            upcomming.setAttribute("style", "color: #006994; margin: 10px 0px");

            upcomming.innerHTML = "Upcoming Season:";
            newSeason.appendChild(upcomming);
            break;
        }
    }

    for (let i = 0; i < seasonArr.length; i++) 
    {
        let newD = subtractDays(seasonArr[i].Start, 7);
        if (curDate >= newD && curDate < seasonArr[i].Start) 
        {
            seasonalMaterialsNorth(seasonArr[i]);

            var date = document.createElement("h5");
            date.innerHTML = new Date(seasonArr[i].Start).toLocaleDateString();
            newSeason.appendChild(date);
        }
    }

    for (let i = 0; i < seasonArr.length; i++) 
    {
        let newD = subtractDays(seasonArr[i].StartSouth, 7);
        if (curDate >= newD && curDate < seasonArr[i].StartSouth) 
        {
            var newSeason = document.getElementById("seasonalSouth");
            var upcomming = document.createElement("h4");
            upcomming.setAttribute("style", "color: #006994; margin: 10px 0px");

            upcomming.innerHTML = "Upcoming Season:";
            newSeason.appendChild(upcomming);
            break;
        }
    }

    for (let i = 0; i < seasonArr.length; i++) 
    {
        let newD = subtractDays(seasonArr[i].StartSouth, 7);
        if (curDate >= newD && curDate < seasonArr[i].StartSouth) 
        {
            seasonalMaterialsSouth(seasonArr[i]);

            var date = document.createElement("h5");
            date.innerHTML = new Date(seasonArr[i].StartSouth).toLocaleDateString();
            newSeason.appendChild(date);
        }
    }
}

upCommingSeason();