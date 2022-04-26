let pageNr = 0;

let encyclopediaBook = document.getElementById("encyclopedia");
let book = document.getElementById("book");
book.setAttribute("style", "flex-grow: 1; height: 400px; text-align: center; padding: 20px");

let pageNumber = document.createElement("h3");

pageNumber.setAttribute("style", "margin: auto 0px");
pageNumber.setAttribute("onClick", "closeBook();");

pageNumber.innerHTML = pageNr;

if (pageNr == 0) 
{
    pageNumber.innerHTML = "";
}

const next = function()
{
    if (pageNr < 211) 
    {
        let pageArrows = document.getElementById("turnPage");
        pageArrows.innerHTML = "";
        pageNr++;
        initiatePage();
        pageNumber.innerHTML = pageNr;
    }
    if (pageNr == 211) 
    {
        pageNumber.innerHTML = "The End"    
    }
}
const back = function()
{
    if (pageNr > 0) 
    {
        let pageArrows = document.getElementById("turnPage");
        pageArrows.innerHTML = "";
        pageNr--;
        initiatePage();
        pageNumber.innerHTML = pageNr;
    }
    if (pageNr == 0) 
    {
        pageNumber.innerHTML = "";
    }
}

const closeBook = function()
{
    pageNr = 0;
    pageNumber.innerHTML = "";
    document.getElementById("turnPage").innerHTML = "";
    initiatePage();
}

let turnPage = document.createElement("div");

const pageTurn = function()
{
    turnPage.setAttribute("style", "display: flex; justify-content: space-between;");
    turnPage.setAttribute("id", "turnPage");

    let arrowBack = document.createElement("button");
    arrowBack.setAttribute("style", "text-align: left; width: 20%; padding: 0px; background-color: transparent; border: none;");
    arrowBack.setAttribute("id", "btnBack");
    arrowBack.setAttribute("onClick", "back();");
    
    let backImg = document.createElement("img");
    backImg.setAttribute("src", "Images/back.png");
    backImg.setAttribute("style", "width: 100%");
    
    arrowBack.appendChild(backImg);

    let arrowNext = document.createElement("button");
    arrowNext.setAttribute("style", "text-align: right; width: 20%; padding: 0px; background-color: transparent; border: none;");
    arrowNext.setAttribute("onClick", "next();");
    
    let nextImg = document.createElement("img");
    nextImg.setAttribute("src", "Images/next.png");
    nextImg.setAttribute("style", "width: 100%");
    
    arrowNext.appendChild(nextImg);


    turnPage.appendChild(arrowBack);
    turnPage.appendChild(pageNumber);
    turnPage.appendChild(arrowNext);

    return turnPage;
}

const index = function()
{
    let index = document.createElement("table");
    index.setAttribute("style", "height: 100%");

    if (pageNr >= 1 && pageNr <= 4) // bugs
    {
        let tr = document.createElement("tr");

        bugArr.forEach
        (
            function (bug)
            {
                if (bug.index >= 1 && bug.index<= 20 && pageNr == 1) 
                {
                    let td = document.createElement("td");
                    let bugBtn = document.createElement("button");
                    bugBtn.setAttribute("style", "background-color: transparent; border: none;");
                    bugBtn.setAttribute("value", bug.name);

                    let bugIco = document.createElement("img");
                    
                    bugIco.setAttribute("src", bug.icon);
                    bugIco.setAttribute("style", "width:100%;");
                    
                    bugBtn.appendChild(bugIco);
                    td.appendChild(bugBtn);
                    tr.appendChild(td);

                    if (bug.index % 4 == 0 && bug.index != 20) 
                    {
                        tr = document.createElement("tr");
                    }

                    index.appendChild(tr);
                }
                else if (bug.index > 20 && bug.index <= 40 && pageNr == 2) 
                {
                    let td = document.createElement("td");
                    let bugBtn = document.createElement("button");
                    bugBtn.setAttribute("style", "background-color: transparent; border: none;");
                    bugBtn.setAttribute("value", bug.name);

                    let bugIco = document.createElement("img");
                    
                    bugIco.setAttribute("src", bug.icon);
                    bugIco.setAttribute("style", "width:100%;");
                    
                    bugBtn.appendChild(bugIco);
                    td.appendChild(bugBtn);
                    tr.appendChild(td);
                    if (bug.index % 4 == 0 && bug.index != 40) 
                    {
                        tr = document.createElement("tr");
                    }

                    index.appendChild(tr);
                }
                else if (bug.index > 40 && bug.index <= 60 && pageNr == 3) 
                {
                    let td = document.createElement("td");
                    let bugBtn = document.createElement("button");
                    bugBtn.setAttribute("style", "background-color: transparent; border: none;");
                    bugBtn.setAttribute("value", bug.name);

                    let bugIco = document.createElement("img");
                    
                    bugIco.setAttribute("src", bug.icon);
                    bugIco.setAttribute("style", "width:100%;");
                    
                    bugBtn.appendChild(bugIco);
                    td.appendChild(bugBtn);
                    tr.appendChild(td);
                    if (bug.index % 4 == 0 && bug.index != 60) 
                    {
                        tr = document.createElement("tr"); 
                    }

                    index.appendChild(tr);
                }
                else if (bug.index > 60 && bug.index <= 80 && pageNr == 4) 
                {
                    let td = document.createElement("td");
                    let bugBtn = document.createElement("button");
                    bugBtn.setAttribute("style", "background-color: transparent; border: none;");
                    bugBtn.setAttribute("value", bug.name);

                    let bugIco = document.createElement("img");
                    
                    bugIco.setAttribute("src", bug.icon);
                    bugIco.setAttribute("style", "width:100%;");
                    
                    bugBtn.appendChild(bugIco);
                    td.appendChild(bugBtn);
                    tr.appendChild(td);
                    if (bug.index % 4 == 0 && bug.index != 80) 
                    {
                        tr = document.createElement("tr"); 
                    }

                    index.appendChild(tr);
                }
            }
        )
    }
    else if (pageNr >= 5 && pageNr <= 8) // fish
    {
        let tr = document.createElement("tr");

        fishArr.forEach
        (
            function (fish)
            {
                if (fish.index >= 1 && fish.index<= 20 && pageNr == 5) 
                {
                    let td = document.createElement("td");
                    let fishBtn = document.createElement("button");
                    fishBtn.setAttribute("style", "background-color: transparent; border: none;");
                    fishBtn.setAttribute("value", fish.name);

                    let fishIco = document.createElement("img");
                    
                    fishIco.setAttribute("src", fish.icon);
                    fishIco.setAttribute("style", "width:100%;");
                    
                    fishBtn.appendChild(fishIco);
                    td.appendChild(fishBtn);
                    tr.appendChild(td);
                    if (fish.index % 4 == 0) 
                    {
                        tr = document.createElement("tr"); 
                    }

                    index.appendChild(tr);
                }
                else if (fish.index > 20 && fish.index <= 40 && pageNr == 6) 
                {
                    let td = document.createElement("td");
                    let fishBtn = document.createElement("button");
                    fishBtn.setAttribute("style", "background-color: transparent; border: none;");
                    fishBtn.setAttribute("value", fish.name);

                    let fishIco = document.createElement("img");
                    
                    fishIco.setAttribute("src", fish.icon);
                    fishIco.setAttribute("style", "width:100%;");
                    
                    fishBtn.appendChild(fishIco);
                    td.appendChild(fishBtn);
                    tr.appendChild(td);
                    if (fish.index % 4 == 0) 
                    {
                        tr = document.createElement("tr"); 
                    }

                    index.appendChild(tr);
                }
                else if (fish.index > 40 && fish.index <= 60 && pageNr == 7) 
                {
                    let td = document.createElement("td");
                    let fishBtn = document.createElement("button");
                    fishBtn.setAttribute("style", "background-color: transparent; border: none;");
                    fishBtn.setAttribute("value", fish.name);

                    let fishIco = document.createElement("img");
                    
                    fishIco.setAttribute("src", fish.icon);
                    fishIco.setAttribute("style", "width:100%;");
                    
                    fishBtn.appendChild(fishIco);
                    td.appendChild(fishBtn);
                    tr.appendChild(td);
                    if (fish.index % 4 == 0) 
                    {
                        tr = document.createElement("tr"); 
                    }

                    index.appendChild(tr);
                }
                else if (fish.index > 60 && fish.index <= 80 && pageNr == 8) 
                {
                    let td = document.createElement("td");
                    let fishBtn = document.createElement("button");
                    fishBtn.setAttribute("style", "background-color: transparent; border: none;");
                    fishBtn.setAttribute("value", fish.name);

                    let fishIco = document.createElement("img");
                    
                    fishIco.setAttribute("src", fish.icon);
                    fishIco.setAttribute("style", "width:100%;");
                    
                    fishBtn.appendChild(fishIco);
                    td.appendChild(fishBtn);
                    tr.appendChild(td);
                    if (fish.index % 4 == 0) 
                    {
                        tr = document.createElement("tr"); 
                    }

                    index.appendChild(tr);
                }
            }
        )
    }
    else if (pageNr >= 8 && pageNr <= 10) //diving
    {
        let tr = document.createElement("tr");

        divingArr.forEach
        (
            function (dive)
            {
                if (dive.index >= 1 && dive.index<= 20 && pageNr == 9) 
                {
                    let td = document.createElement("td");
                    let diveBtn = document.createElement("button");
                    diveBtn.setAttribute("style", "background-color: transparent; border: none;");
                    diveBtn.setAttribute("value", dive.name);

                    let diveIco = document.createElement("img");
                    
                    diveIco.setAttribute("src", dive.icon);
                    diveIco.setAttribute("style", "width:100%;");
                    
                    diveBtn.appendChild(diveIco);
                    td.appendChild(diveBtn);
                    tr.appendChild(td);
                    if (dive.index % 4 == 0) 
                    {
                        tr = document.createElement("tr"); 
                    }
                    index.appendChild(tr);
                }
                else if (dive.index > 20 && dive.index <= 40 && pageNr == 10) 
                {
                    let td = document.createElement("td");
                    let diveBtn = document.createElement("button");
                    diveBtn.setAttribute("style", "background-color: transparent; border: none;");
                    diveBtn.setAttribute("value", dive.name);

                    let diveIco = document.createElement("img");
                    
                    diveIco.setAttribute("src", dive.icon);
                    diveIco.setAttribute("style", "width:100%;");
                    
                    diveBtn.appendChild(diveIco);
                    td.appendChild(diveBtn);
                    tr.appendChild(td);
                    if (dive.index % 4 == 0) 
                    {
                        tr = document.createElement("tr"); 
                    }

                    index.appendChild(tr);
                }
            }
        )
    }

    book.appendChild(index);
}

const bugPage = function()
{
    let bugPage = document.createElement("div");
    bugPage.setAttribute("style", "height: 100%");

    let top = document.createElement("div");
    let name = document.createElement("h3");
    let picture = document.createElement("img");
    let sell = document.createElement("div");
    let sellNook = document.createElement("p");
    let sellFlick = document.createElement("p");

    if (window.innerWidth >= 375 && window.innerWidth < 425) 
    {
        top.style.paddingTop = "10px";
    }
    else if (window.innerWidth < 375) 
    {
        top.style.paddingTop = "40px";
    }

    top.setAttribute("class", "flexVertical");
    top.style.gap = "10px";
    top.style.alignItems = "center";
    top.style.height = "48%"
    
    sell.setAttribute("style", "display: flex; justify-content: center;");
    
    picture.setAttribute("style", "height: 40%; flex-grow: 1;");



    let bottom = document.createElement("div");
    let seasonality = document.createElement("table");
    let timeLocationWeather = document.createElement("div");
    let time = document.createElement("p");
    let locationWeather = document.createElement("div");
    let location = document.createElement("p");
    let weather = document.createElement("p");

    bottom.style.height = "48%";


    bugArr.forEach
    (
        function(bug)
        {
            if ((bug.index + 10) == pageNr) 
            {
                name.innerHTML = bug.name;
                picture.setAttribute("src", bug.picture);
                sellNook.innerHTML = "Sell Nooks: <br>" + bug.sell_nook +" Bells";
                sellFlick.innerHTML = "Sell Flick: <br>"+(bug.sell_nook * 1.5) +" Bells";
            }
        }
    )

    top.appendChild(name);
    top.appendChild(picture);
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
}

const fishPage = function()
{

}

const divePage = function()
{

}

//https://www.w3schools.com/howto/howto_css_flip_card.asp


const initiatePage = function()
{
    book.innerHTML = "";

    if (pageNr == 0) 
    {
        book.style.background = "transparent";
        book.style.backgroundImage = "url(Images/encyclopedia.png)";
        book.style.backgroundRepeat = "no-repeat";
        book.style.backgroundPosition = "center";
        book.style.backgroundSize = "100%";
    }
    if (pageNr > 0 && pageNr < 211) 
    {
        if (pageNr % 2 == 0) 
        {
            book.style.backgroundImage = "url(Images/right.png)";
            book.style.backgroundRepeat = "no-repeat";
            book.style.backgroundPosition = "center";
            book.style.backgroundSize = "100%";
        }
        else
        {
            book.style.backgroundImage = "url(Images/left.png)";
            book.style.backgroundRepeat = "no-repeat";
            book.style.backgroundPosition = "center";
            book.style.backgroundSize = "100%";
        }

        if (pageNr >= 1 && pageNr <= 10) 
        {
            index();
        }
        else if (pageNr >= 11 && pageNr < 91)
        {
            bugPage();
        }
        else if (pageNr >= 91 && pageNr < 171) 
        {
            console.log("Fish Section");
            fishPage();
        }
        else if (pageNr >= 171 && pageNr < 211) 
        {
            console.log("Diving Section");
            divePage();
        }
    }
    if (pageNr == 211) 
    {
        book.style.background = "transparent";
        book.style.backgroundImage = "url(Images/red-leather-book-cover-260nw-169.png)";
        book.style.backgroundRepeat = "no-repeat";
        book.style.backgroundPosition = "center";
        book.style.backgroundSize = "100%";
    }

    let turnPage = pageTurn();
    encyclopediaBook.appendChild(turnPage);
}

initiatePage();


const Bug = function()
{
    pageNr = 11;
    document.getElementById("turnPage").innerHTML = "";
    pageNumber.innerHTML = pageNr;
    initiatePage()
}

const Fish = function()
{
    pageNr = 91;
    document.getElementById("turnPage").innerHTML = "";
    pageNumber.innerHTML = pageNr;
    initiatePage()
}

const Dive = function()
{
    pageNr = 171;
    document.getElementById("turnPage").innerHTML = "";
    pageNumber.innerHTML = pageNr;
    initiatePage()
}