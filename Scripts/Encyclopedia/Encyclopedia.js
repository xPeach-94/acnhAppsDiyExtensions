// class Page
// {
//     constructor(id, title, description, page_num, page_type, object_arr)
//     {
//         this.id = id;
//         this.title = title;
//         this.description = description;
//         this.page_num = page_num;
//         this.page_type = page_type;
//         this.object_arr = object_arr;
//     }
// }


let pageNr = 0;

let book = document.getElementById("encyclopedia");
let pageNumber = document.createElement("h3");
pageNumber.setAttribute("style", "margin: auto 0px");

pageNumber.innerHTML = pageNr;

if (pageNr == 0) 
{
    pageNumber.innerHTML = "";
}

const next = function()
{
    pageNr++;
    initiatePage();
    pageNumber.innerHTML = pageNr;
}
const back = function()
{
    if (pageNr > 0) 
    {
        pageNr--;
        initiatePage();
        pageNumber.innerHTML = pageNr;
    }
    if (pageNr == 0) 
    {
        pageNumber.innerHTML = "";
    }
}

const pageTurn = function()
{
    let turnPage = document.createElement("div");
    turnPage.setAttribute("style", "display: flex; justify-content: space-between;");

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

    if (pageNr >= 1) 
    {

        
    }

    return index

    // console.log("Page:", pageNr);
    // bugArr.forEach
    // (
    //     function (bug)
    //     {
    //         console.log(bug.name);
    //         if (bug.index % 4 == 0) 
    //         {
    //             console.log("")
    //             // next row
    //         }

    //         if (bug.index % 20 == 0) 
    //         {
    //             pageNr++;
    //             console.log(""); // next page
    //             console.log("Page:", pageNr);
    //         }
    //     }
    // )

    // fishArr.forEach
    // (
    //     function (fish)
    //     {
    //         console.log(fish.name);
    //         if (fish.index % 4 == 0) 
    //         {
    //             console.log("")    
    //         }

    //         if (fish.index % 20 == 0) 
    //         {
    //             pageNr++;
    //             console.log("");
    //             console.log("Page:", pageNr);
    //         }
    //     }
    // )

    // divingArr.forEach
    // (
    //     function (dive)
    //     {
    //         console.log(dive.name);
    //         if (dive.index % 4 == 0) 
    //         {
    //             console.log("")
    //         }
            
    //         if (dive.index % 20 == 0) 
    //         {
    //             pageNr++;
    //             console.log("");
    //             console.log("Page:", pageNr);
    //         }
    //     }
    // )
}

const initiatePage = function()
{
    book.innerHTML = "";

    if (pageNr == 0) 
    {
        let cover = document.createElement("img");
        cover.setAttribute("src", "Images/encyclopedia.png");
        book.appendChild(cover);    
    }
    if (pageNr > 0) 
    {
        if (pageNr % 2 == 0) 
        {
            console.log(pageNr, "right");

            // book.style.backgroundImage = "url(Images/right.png)";

            // put pages (divs) inside encyclopedia div, put background image on those page divs
        }
        else
        {
            console.log(pageNr, "left");

            let paper = document.createElement("img");
            paper.setAttribute("src", "Images/left.png");
        }
        // let indexPage = index();
        // book.appendChild(indexPage);
    }

    let turnPage = pageTurn();
    book.appendChild(turnPage);
}

initiatePage();