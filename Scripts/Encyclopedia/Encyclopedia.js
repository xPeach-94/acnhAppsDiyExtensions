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

let turnPage = document.createElement("div");


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
            index(); //Scripts\Encyclopedia\encyclopediaIndex.js
        }
        else if (pageNr >= 11 && pageNr < 91)
        {
            bugPage();
        }
        else if (pageNr >= 91 && pageNr < 171) 
        {
            fishPage();
        }
        else if (pageNr >= 171 && pageNr < 211) 
        {
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