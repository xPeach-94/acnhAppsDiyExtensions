const resetClick = function()
{
    location.reload();
}

let diyNames = [];

diyArr.forEach
(
    function(diy)
    {
        diyNames.push(diy.name);
    }
);

autocomplete(document.getElementById("diyInp"), diyNames);


// const deleteDiy = function(element)
// {
//     element.remove();
// }

const addDiyToList = function(diy)
{
    let list = document.getElementById("DIYContainer")
    
    let container = document.createElement("button");
    container.setAttribute("style", "width: 33%; background-color: transparent; border: none;");

    let img = document.createElement("img");
    img.setAttribute("src", diy.img);
    img.setAttribute("style", "width: 100%");

    let name = document.createElement("h4");
    name.setAttribute("id", diy.name);
    name.innerHTML = diy.name;

    // container.setAttribute("onclick", "deleteDiy(this)");

    container.appendChild(img);
    container.appendChild(name);

    list.appendChild(container);
}

let selDiyArr = [];

const btnAddDiyClick = function()
{
    let item = (document.getElementById("diyInp")).value;

    // diy zoeken in de diy array
    // de diy image en name laten zien onderaan
        // als er op de image geklikt wordt moet de desbetreffende diy verwijdert worden
    // als de eerste diy toegevoegd is moet ook een knop calculate laten zien worden.
    if (item != "") 
    {
        diyArr.forEach
        (
            function(diy)
            {
                if (item == diy.name) 
                {
                    selDiyArr.push(diy);
                    addDiyToList(diy);
                }
            }
        );

        let diyContainer = document.getElementById("diyAddedContainer");
        diyContainer.setAttribute("style", "display: flex;");

        document.getElementById("diyInp").value = "";
    }
}

// calculate kijkt alle diys na en de materialen die ze nodig hebben
const calcDiyMaterialsClick = function()
{
    // console.log(selDiyArr);
    for (let i = 0; i < selDiyArr.length; i++) 
    {
        console.log(selDiyArr[i].materials);
    }
}
// de hoeveeleheid materialen worden bij elkaar opgeteld
// aan het einde wordt een lijst laten zien met welke en hoeveel materialen je nodig hebt