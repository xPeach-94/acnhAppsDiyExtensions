let critterNames = [];

bugArr.forEach
(
    function (bug)
    {
        // console.log(bug.name);
        critterNames.push(bug.name);
    }
)

fishArr.forEach
(
    function (fish)
    {
        // console.log(fish.name);
        critterNames.push(fish.name);

    }
)

divingArr.forEach
(
    function (dive)
    {
        // console.log(dive.name);
        critterNames.push(dive.name);

    }
)

// console.log(critterNames);
autocomplete(document.getElementById("creatureInput"), critterNames);


class Page
{
    constructor(id, title, description, page_num, page_type, object_arr)
    {
        this.id = id;
        this.title = title;
        this.description = description;
        this.page_num = page_num;
        this.page_type = page_type;
        this.object_arr = object_arr;
    }
}


// beginnen met uitzoeken welke dieren op welke pagina
// index / 20

let pageNr = 1;

console.log("Page:", pageNr);
bugArr.forEach
(
    function (bug)
    {
        console.log(bug.name);
        if (bug.index % 4 == 0) 
        {
            console.log("")
            // next row
        }

        if (bug.index % 20 == 0) 
        {
            pageNr++;
            console.log(""); // next page
            console.log("Page:", pageNr);
        }
    }
)

fishArr.forEach
(
    function (fish)
    {
        console.log(fish.name);
        if (fish.index % 4 == 0) 
        {
            console.log("")    
        }

        if (fish.index % 20 == 0) 
        {
            pageNr++;
            console.log("");
            console.log("Page:", pageNr);
        }
    }
)

divingArr.forEach
(
    function (dive)
    {
        console.log(dive.name);
        if (dive.index % 4 == 0) 
        {
            console.log("")
        }
        
        if (dive.index % 20 == 0) 
        {
            pageNr++;
            console.log("");
            console.log("Page:", pageNr);
        }
    }
)