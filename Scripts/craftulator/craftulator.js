let diyNames = [];

diyArr.forEach
(
    function(diy)
    {
        diyNames.push(diy.name);
    }
);

autocomplete(document.getElementById("diyInp"), diyNames);

const btnAddClick = function()
{
    console.log("Clicked");
}