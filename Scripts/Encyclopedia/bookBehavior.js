const searchCritter = function()
{
    let critter = document.getElementById("creatureInput").value;

    bugArr.forEach
    (
        function(bug)
        {
            if (critter == bug.name) 
            {
                pageNr = bug.index + 10;
                document.getElementById("turnPage").innerHTML = "";
                pageNumber.innerHTML = pageNr;
                initiatePage();
            }
        }
    )
    
    fishArr.forEach
    (
        function(fish)
        {
            if (critter == fish.name) 
            {
                pageNr = fish.index + 90;
                document.getElementById("turnPage").innerHTML = "";
                pageNumber.innerHTML = pageNr;
                initiatePage();
            }
        }
    )

    divingArr.forEach
    (
        function(dive)
        {
            if (critter == dive.name) 
            {
                pageNr = dive.index + 170;
                document.getElementById("turnPage").innerHTML = "";
                pageNumber.innerHTML = pageNr;
                initiatePage();
            }
        }
    )
    document.getElementById("creatureInput").value = "";
}

const hemChange = function()
{
    document.getElementById("turnPage").innerHTML = "";
    initiatePage()
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

const btnPress = function(el)
{
    // console.log(el.value);
    pageNr = el.value;
    document.getElementById("turnPage").innerHTML = "";
    pageNumber.innerHTML = pageNr;
    initiatePage()
}

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

let nr = 1;
const monthName = function()
{
    switch (nr) 
    {
        case 1:
            nr++;
            return "Jan";
        case 2:
            nr++;
            return "Feb";
        case 3:
            nr++;
            return "Mar";
        case 4:
            nr++;
            return "Apr";
        case 5:
            nr++;
            return "May";
        case 6:
            nr++;
            return "Jun";
        case 7:
            nr++;
            return "Jul";
        case 8:
            nr++;
            return "Aug";
        case 9:
            nr++;
            return "Sep";
        case 10:
            nr++;
            return "Oct";
        case 11:
            nr++;
            return "Nov";
        case 12:
            nr = 1;
            return "Dec";
    
        default:
            break;
    }
}