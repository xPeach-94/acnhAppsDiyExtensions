var curDate = ((new Date().getMonth() + 1).toString()) + (new Date().getDate().toString());
// var curDate = "0405";

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
            // console.log(Object.entries(item));

            if (("Start" in item) && ("End" in item) && ("img" in item)) 
            {
                // console.log(Object.keys(item)[0], Object.values(item)[0]);
                // console.log(item.img);
                // console.log("Start Date", item.Start);
                // console.log("End Date", item.End);

                if ((curDate >= item.Start && curDate <= item.End)) 
                {
                    seasonalMaterialsNorth(item)
                }
                else if ((item.Start > item.End) && ((curDate >= item.Start && curDate <= "1231") || (curDate >= "0101" && curDate <= item.End))) 
                {
                    seasonalMaterialsNorth(item)
                }
            }
            if (("StartSouth" in item) && ("EndSouth" in item) && ("img" in item)) 
            {
                if ((curDate >= item.StartSouth && curDate <= item.EndSouth)) 
                {
                    seasonalMaterialsSouth(item)
                }
                else if ((item.StartSouth > item.EndSouth) && ((curDate >= item.StartSouth && curDate <= "1231") || (curDate >= "0101" && curDate <= item.EndSouth))) 
                {
                    seasonalMaterialsSouth(item)
                }
            }
        }
    )
