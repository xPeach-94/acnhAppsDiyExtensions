const fishPage = function()
{
    let fishPage = document.createElement("div");
    fishPage.setAttribute("style", "height: 92%; padding-top: 15px");

    let top = document.createElement("div");
    let name = document.createElement("h3");
    let picContainer = document.createElement("div");
    let picture = document.createElement("img");
    let sell = document.createElement("div");
    let sellNook = document.createElement("p");
    let sellFlick = document.createElement("p");

    top.setAttribute("class", "flexVertical");
    top.style.gap = "10px";
    top.style.alignItems = "center";
    top.style.height = "48%";
    
    sell.setAttribute("style", "display: flex; justify-content: center;");
    
    picContainer.style.height = "40%";
    picContainer.style.width = "100%";
    picContainer.style.display = "flex";
    picContainer.style.flexDirection = "column";
    picContainer.style.justifyContent = "center";
    picContainer.style.alignItems = "center";
    
    picture.setAttribute("id", "img");



    let bottom = document.createElement("div");
    let seasonality = document.createElement("table");
    let timeLocationSize = document.createElement("div");
    let time = document.createElement("p");
    let locationSize = document.createElement("div");
    let location = document.createElement("p");
    let size = document.createElement("p");

    bottom.style.marginTop = "6px"
    bottom.style.height = "50%";

    seasonality.setAttribute("style", "width: 100%; height: 51%");

    for (let i = 1; i <= 3; i++) 
    {
        let tr = document.createElement("tr");
        for (let x = 1; x <= 4; x++) 
        {
            let td = document.createElement("td");
            td.innerHTML = monthName();
            td.id = td.innerHTML;
            td.setAttribute("style", "border: 1px solid #006994; text-align: center");
            tr.appendChild(td);
        }
        seasonality.appendChild(tr);
    }

    timeLocationSize.setAttribute("style", "height: 40%; display: flex; gap: 10px; align-items: center; margin-top: 10px");

    time.setAttribute("id", "critterTime");
    time.setAttribute("style", "width: 100%;");
    
    locationSize.setAttribute("style", "width: 100%; height: 100%; display: flex; flex-direction: column; gap:10px; justify-content: space-between");
    
    location.setAttribute("id", "critterLocation");
    location.setAttribute("style", "width: 100%");

    size.setAttribute("id", "critterSize");
    size.setAttribute("style", "width: 100%");



    top.appendChild(name);
    picContainer.appendChild(picture);
    top.appendChild(picContainer);
    sell.appendChild(sellNook);
    sell.appendChild(sellFlick);
    top.appendChild(sell);

    bottom.appendChild(seasonality);
    timeLocationSize.appendChild(time);
    locationSize.appendChild(location);
    locationSize.appendChild(size);
    timeLocationSize.appendChild(locationSize);
    bottom.appendChild(timeLocationSize);



    fishPage.appendChild(top);
    fishPage.appendChild(bottom);

    book.appendChild(fishPage);



    fishArr.forEach
    (
        function(fish)
        {
            if ((fish.index + 90) == pageNr) 
            {
                if (fish.name == "Dace" || fish.name == "Killifish" || fish.name == "Tadpole" || fish.name == "Loach" || fish.name == "Catfish" || 
                fish.name == "Giant Snakehead" || fish.name == "Black Bass" || fish.name == "Pike" || fish.name == "Pond Smelt" || fish.name == "Sweetfish" || 
                fish.name == "Cherry Salmon" || fish.name == "Char" || fish.name == "Golden Trout" || fish.name == "Stringfish" || fish.name == "Salmon" || 
                fish.name == "King Salmon" || fish.name == "Rainbowfish" || fish.name == "Arowana" || fish.name == "Dorado" || fish.name == "Gar" || 
                fish.name == "Arapaima" || fish.name == "Saddled Bichir" || fish.name == "Sturgeon" || fish.name == "Blowfish" || fish.name == "Puffer Fish" ||
                fish.name == "Anchovy" || fish.name == "Horse Mackerel" || fish.name == "Sea Bass" || fish.name == "Moray Eel" || fish.name == "Ribbon Eel" ||
                fish.name == "Tuna" || fish.name == "Mahi-Mahi" || fish.name == "Saw Shark" || fish.name == "Hammerhead Shark" || fish.name == "Great White Shark" ||
                fish.name == "Whale Shark" || fish.name == "Suckerfish" || fish.name == "Oarfish")
                {
                    picture.setAttribute("style", "width: 90%;");
                }
                else
                {
                    picture.setAttribute("style", "height: 100%;");
                }

                name.innerHTML = fish.name;
                picture.setAttribute("src", fish.picture);
                sellNook.innerHTML = "Sell Nooks: <br>" + (fish.sell_nook.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')) +" Bells";
                sellFlick.innerHTML = "Sell CJ: <br>"+ ((fish.sell_nook * 1.5).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')) +" Bells";

                // calendar indication
                if (document.getElementById("northHem").checked) 
                {
                    if (fish.n_m1) 
                    {
                        document.getElementById("Jan").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.n_m2) 
                    {
                        document.getElementById("Feb").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.n_m3) 
                    {
                        document.getElementById("Mar").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.n_m4) 
                    {
                        document.getElementById("Apr").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.n_m5) 
                    {
                        document.getElementById("May").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.n_m6) 
                    {
                        document.getElementById("Jun").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.n_m7) 
                    {
                        document.getElementById("Jul").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.n_m8) 
                    {
                        document.getElementById("Aug").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.n_m9) 
                    {
                        document.getElementById("Sep").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.n_m10) 
                    {
                        document.getElementById("Oct").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.n_m11) 
                    {
                        document.getElementById("Nov").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.n_m12) 
                    {
                        document.getElementById("Dec").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                }
                else if (document.getElementById("southHem").checked) 
                {
                    if (fish.s_m1) 
                    {
                        document.getElementById("Jan").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.s_m2) 
                    {
                        document.getElementById("Feb").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.s_m3) 
                    {
                        document.getElementById("Mar").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.s_m4) 
                    {
                        document.getElementById("Apr").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.s_m5) 
                    {
                        document.getElementById("May").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.s_m6) 
                    {
                        document.getElementById("Jun").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.s_m7) 
                    {
                        document.getElementById("Jul").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.s_m8) 
                    {
                        document.getElementById("Aug").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.s_m9) 
                    {
                        document.getElementById("Sep").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.s_m10) 
                    {
                        document.getElementById("Oct").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.s_m11) 
                    {
                        document.getElementById("Nov").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (fish.s_m12) 
                    {
                        document.getElementById("Dec").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                }

                document.getElementById("critterTime").innerHTML = fish.time;
                document.getElementById("critterLocation").innerHTML = fish.location;
                document.getElementById("critterSize").innerHTML = "Size: <br>" + fish.shadow_size;
            }
        }
    )
}