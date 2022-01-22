var curDate = getYear() + "-" + getMonth() + "-" + getDate();

const seasonalMaterialsNorth = function (item) {
    var newSeason = document.getElementById("seasonalNorth");
    var icon = document.createElement("img");
    icon.setAttribute("src", item.img);
    icon.setAttribute("class", "icons")
    icon.style.width = "100%";
    newSeason.appendChild(icon);
}
const seasonalMaterialsSouth = function (item) {
    var newSeason = document.getElementById("seasonalSouth");
    var icon = document.createElement("img");
    icon.setAttribute("src", item.img);
    icon.setAttribute("class", "icons")
    icon.style.width = "100%";
    newSeason.appendChild(icon);
}

materialArr.forEach //Loop through array
    (
        function (item) {
            // console.log(Object.entries(item));

            if (("Start" in item) && ("End" in item) && ("img" in item)) {
                if (curDate >= item.Start && curDate <= item.End) {
                    seasonalMaterialsNorth(item)
                }
                else if ((item.Start > item.End)) {
                    if (((curDate >= item.Start && curDate <= getYear() + "-12-31") || (curDate >= getYear() + "-01-01" && curDate <= item.End))) {
                        seasonalMaterialsNorth(item)
                    }

                }
            }
            if (("StartSouth" in item) && ("EndSouth" in item) && ("img" in item)) {

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

