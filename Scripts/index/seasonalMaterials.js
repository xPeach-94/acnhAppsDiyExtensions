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
            // console.log(item.name, item.Start);

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

// const upCommingSeason = function()
// {
//     let newD = addDays(curDate, 14);
    
//     materialArr.forEach //Loop through array
//     (
//         function (item) 
//         {
//             if ((item.Start) && (item.End) && (item.img)) 
//             {
//                 console.log(item.name);
//                 console.log("curent date:",curDate, "newDate",newD);
//                 console.log("item start",item.Start, "item end",item.End);
//                 if (newD >= item.Start && newD <= item.End) 
//                 {
//                     seasonalMaterialsNorth(item)
//                 }
//                 else if ((item.Start > item.End)) {
//                     if (((newD >= item.Start && newD <= getYear() + "-12-31") || (newD >= getYear() + "-01-01" && newD <= item.End))) 
//                     {
//                         seasonalMaterialsNorth(item)
//                     }
//                 }
//             }
            
//             if ((item.StartSouth) && (item.EndSouth) && (item.img)) 
//             {

//                 if ((newD >= item.StartSouth && newD <= item.EndSouth)) 
//                 {
//                     seasonalMaterialsSouth(item)
//                 }
//                 else if ((item.StartSouth > item.EndSouth)) 
//                 {
//                     if (((newD >= item.StartSouth && newD <= getYear() + "-12-31")) || (newD >= getYear() + "-01-01" && newD <= item.EndSouth)) 
//                     {
//                         seasonalMaterialsSouth(item)
//                     }
//                 }
//             }
//         }
//     )
// }()