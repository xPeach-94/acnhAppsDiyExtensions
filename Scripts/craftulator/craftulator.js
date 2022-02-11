let diyNames = [];

diyArr.forEach
(
    function(diy)
    {
        diyNames.push(diy.name);
    }
);

autocomplete(document.getElementById("diyInp"), diyNames);

const btnAddDiyClick = function()
{
    let item = (document.getElementById("diyInp")).value;
    console.log(item);

    //
}