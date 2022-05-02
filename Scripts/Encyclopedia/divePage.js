const divePage = function()
{
    let divePage = document.createElement("div");
    divePage.setAttribute("style", "height: 92%; padding-top: 15px");

    let top = document.createElement("div");
    let name = document.createElement("h3");
    let picContainer = document.createElement("div");
    let picture = document.createElement("img");
    let sell = document.createElement("div");
    let sellNook = document.createElement("p");

    top.setAttribute("class", "flexVertical");
    top.style.gap = "10px";
    top.style.alignItems = "center";
    top.style.height = "45%";
    
    sell.setAttribute("style", "display: flex; justify-content: center;");
    
    picContainer.style.height = "50%";
    picContainer.style.width = "100%";
    picContainer.style.display = "flex";
    picContainer.style.flexDirection = "column";
    picContainer.style.justifyContent = "center";
    picContainer.style.alignItems = "center";

    picture.setAttribute("id", "img");
    picture.setAttribute("style", "height: 100%");



    let bottom = document.createElement("div");
    let seasonality = document.createElement("table");
    let timeSizeMovement = document.createElement("div");
    let time = document.createElement("p");
    let sizeMovement = document.createElement("div");
    let size = document.createElement("p");
    let movement = document.createElement("p");
    

    bottom.style.marginTop = "6px"
    bottom.style.height = "53%";

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

    timeSizeMovement.setAttribute("style", "height: 43%; display: flex; gap: 10px; align-items: center; margin-top: 10px");

    time.setAttribute("id", "critterTime");
    time.setAttribute("style", "width: 100%;");
    
    sizeMovement.setAttribute("style", "width: 100%; height: 100%; display: flex; flex-direction: column; gap:10px; justify-content: space-between");
    
    size.setAttribute("id", "critterSize");
    size.setAttribute("style", "width: 100%");
    
    movement.setAttribute("id", "critterMovement");
    movement.setAttribute("style", "width: 100%");

    

    top.appendChild(name);
    picContainer.appendChild(picture);
    top.appendChild(picContainer);
    sell.appendChild(sellNook);
    top.appendChild(sell);

    bottom.appendChild(seasonality);
    timeSizeMovement.appendChild(time);
    sizeMovement.appendChild(size);
    sizeMovement.appendChild(movement);
    timeSizeMovement.appendChild(sizeMovement);
    bottom.appendChild(timeSizeMovement);



    divePage.appendChild(top);
    divePage.appendChild(bottom);

    book.appendChild(divePage);

    divingArr.forEach
    (
        function(dive)
        {
            if ((dive.index + 170) == pageNr) 
            {
                name.innerHTML = dive.name;
                picture.setAttribute("src", dive.picture);
                sellNook.innerHTML = "Sell: <br>" + (dive.sell_nook.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')) +" Bells";

                // calendar indication
                if (document.getElementById("northHem").checked) 
                {
                    if (dive.n_m1) 
                    {
                        document.getElementById("Jan").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.n_m2) 
                    {
                        document.getElementById("Feb").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.n_m3) 
                    {
                        document.getElementById("Mar").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.n_m4) 
                    {
                        document.getElementById("Apr").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.n_m5) 
                    {
                        document.getElementById("May").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.n_m6) 
                    {
                        document.getElementById("Jun").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.n_m7) 
                    {
                        document.getElementById("Jul").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.n_m8) 
                    {
                        document.getElementById("Aug").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.n_m9) 
                    {
                        document.getElementById("Sep").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.n_m10) 
                    {
                        document.getElementById("Oct").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.n_m11) 
                    {
                        document.getElementById("Nov").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.n_m12) 
                    {
                        document.getElementById("Dec").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                }
                else if (document.getElementById("southHem").checked) 
                {
                    if (dive.s_m1) 
                    {
                        document.getElementById("Jan").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.s_m2) 
                    {
                        document.getElementById("Feb").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.s_m3) 
                    {
                        document.getElementById("Mar").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.s_m4) 
                    {
                        document.getElementById("Apr").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.s_m5) 
                    {
                        document.getElementById("May").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.s_m6) 
                    {
                        document.getElementById("Jun").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.s_m7) 
                    {
                        document.getElementById("Jul").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.s_m8) 
                    {
                        document.getElementById("Aug").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.s_m9) 
                    {
                        document.getElementById("Sep").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.s_m10) 
                    {
                        document.getElementById("Oct").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.s_m11) 
                    {
                        document.getElementById("Nov").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                    if (dive.s_m12) 
                    {
                        document.getElementById("Dec").style.backgroundColor = "rgba(104, 166, 253, 0.59)";
                    }
                }

                document.getElementById("critterTime").innerHTML = dive.time;
                document.getElementById("critterSize").innerHTML = "Size: <br>" + dive.shadow_size;
                document.getElementById("critterMovement").innerHTML = "Movement: <br>" + dive.shadow_movement;
            }
        }
    )
}