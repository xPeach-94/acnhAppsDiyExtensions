const bugPage = function()
{
    let bugPage = document.createElement("div");
    bugPage.setAttribute("style", "height: 92%; padding-top: 15px");

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
    
    picture.setAttribute("style", "height: 100%");



    let bottom = document.createElement("div");
    let seasonality = document.createElement("table");
    let timeLocationWeather = document.createElement("div");
    let time = document.createElement("p");
    let locationWeather = document.createElement("div");
    let location = document.createElement("p");
    let weather = document.createElement("p");

    bottom.style.marginTop = "6px"
    bottom.style.height = "50%";

    seasonality.setAttribute("style", "width: 100%; height: 41%");

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

    timeLocationWeather.setAttribute("style", "height: 50%; display: flex; gap: 10px; align-items: center; margin-top: 10px");

    time.setAttribute("id", "critterTime");
    time.setAttribute("style", "width: 100%;");
    
    locationWeather.setAttribute("style", "width: 100%; height: 100%; display: flex; flex-direction: column; gap:10px; justify-content: space-between");
    
    location.setAttribute("id", "critterLocation");
    location.setAttribute("style", "width: 100%");

    weather.setAttribute("id", "critterWeather");
    weather.setAttribute("style", "width: 100%");

    top.appendChild(name);
    picContainer.appendChild(picture);
    top.appendChild(picContainer);
    sell.appendChild(sellNook);
    sell.appendChild(sellFlick);
    top.appendChild(sell);

    bottom.appendChild(seasonality);
    timeLocationWeather.appendChild(time);
    locationWeather.appendChild(location);
    locationWeather.appendChild(weather);
    timeLocationWeather.appendChild(locationWeather);
    bottom.appendChild(timeLocationWeather);

    bugPage.appendChild(top);
    bugPage.appendChild(bottom);

    book.appendChild(bugPage);



    bugArr.forEach
    (
        function(bug)
        {
            if ((bug.index + 10) == pageNr) 
            {
                if (bug.name == "Peacock Butterfly")
                {
                    top.style.height = "35%";
                    bottom.style.height = "65%";
                    seasonality.style.height = "35%";
                }
                if (bug.name == "Migratory Locust" || bug.name == "Rice Grasshopper") 
                {
                    picture.setAttribute("style", "width: 100%; flex-grow: 1;");
                }
                if (bug.name == "Ant") 
                {
                    top.style.height = "35%";
                    bottom.style.height = "65%";
                    seasonality.style.height = "40%";
                }

                name.innerHTML = bug.name;
                picture.setAttribute("src", bug.picture);
                sellNook.innerHTML = "Sell Nooks: <br>" + (bug.sell_nook.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')) +" Bells";
                sellFlick.innerHTML = "Sell Flick: <br>"+ ((bug.sell_nook * 1.5).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')) +" Bells";

                // calendar indication
                if (document.getElementById("northHem").checked) 
                {
                    if (bug.n_m1) 
                    {
                        document.getElementById("Jan").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.n_m2) 
                    {
                        document.getElementById("Feb").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.n_m3) 
                    {
                        document.getElementById("Mar").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.n_m4) 
                    {
                        document.getElementById("Apr").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.n_m5) 
                    {
                        document.getElementById("May").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.n_m6) 
                    {
                        document.getElementById("Jun").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.n_m7) 
                    {
                        document.getElementById("Jul").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.n_m8) 
                    {
                        document.getElementById("Aug").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.n_m9) 
                    {
                        document.getElementById("Sep").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.n_m10) 
                    {
                        document.getElementById("Oct").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.n_m11) 
                    {
                        document.getElementById("Nov").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.n_m12) 
                    {
                        document.getElementById("Dec").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                }
                else if (document.getElementById("southHem").checked) 
                {
                    if (bug.s_m1) 
                    {
                        document.getElementById("Jan").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.s_m2) 
                    {
                        document.getElementById("Feb").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.s_m3) 
                    {
                        document.getElementById("Mar").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.s_m4) 
                    {
                        document.getElementById("Apr").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.s_m5) 
                    {
                        document.getElementById("May").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.s_m6) 
                    {
                        document.getElementById("Jun").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.s_m7) 
                    {
                        document.getElementById("Jul").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.s_m8) 
                    {
                        document.getElementById("Aug").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.s_m9) 
                    {
                        document.getElementById("Sep").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.s_m10) 
                    {
                        document.getElementById("Oct").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.s_m11) 
                    {
                        document.getElementById("Nov").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (bug.s_m12) 
                    {
                        document.getElementById("Dec").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                }

                document.getElementById("critterTime").innerHTML = bug.time;
                document.getElementById("critterLocation").innerHTML = bug.location;
                document.getElementById("critterWeather").innerHTML = "Weather: <br>" + bug.weather;
            }
        }
    )
}