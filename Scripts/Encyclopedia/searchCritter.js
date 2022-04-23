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