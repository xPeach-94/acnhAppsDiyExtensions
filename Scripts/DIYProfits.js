var I =0;
function fillSelect(Index) // Filling in each select
{
    materialArr.forEach //Loop through array
    (
        function (item) 
        {
            for (var key in item) 
            {
                var newSelect = document.getElementById("material"+Index);
                var optn = document.createElement("option");
                optn.value = key.replace(" ", "");
                
                optn.innerHTML = key;

                newSelect.appendChild(optn);
                break;
            }
        }
    )
}

var first = true
if (first) // Running for the first time because of index issues
{
    fillSelect(0);
    first = false;
}

var input = document.getElementById("input"+I); 
input.addEventListener("click", () =>               // method to check if the input has the starting value ( 0 ). and emtying the box for user friendly behaviour
{
    if (document.getElementById("input"+I).value == "0")
    {
        input.value = "";
    }
    
});

function buttonAddClicked() // button add is clicked
{
    if ((document.getElementById("input"+I).value != "") && (document.getElementById("input"+I).value != "0")) // if input is not empty and not 0
    {
        if (isNumeric(document.getElementById("input"+I).value)) // check if input is actually a number
        {
            document.getElementById("input"+I).style.backgroundColor = "white";
            document.getElementById("input"+I).disabled = true;
            document.getElementById("material"+I).disabled = true;
            
            I++;
            addMaterials()
        }
        else // if input is not a number
        {
            errorMessage()  
            var input = document.getElementById("input"+I);
            input.addEventListener("click", () => 
            {
                input.value = "";
            });          
            }
    }
    else // if input is empty or a 0
    {  
        errorMessage()  
        var input = document.getElementById("input"+I);
        input.addEventListener("click", () => 
        {
            input.value = "";        
        });      
        }
}
function buttonRemoveClicked(id) // remove the whore form where this specific button belongs to
{
    var idNum = extractNr(id);
    var removeForm = document.getElementById("form"+idNum);
    removeForm.remove();
}

function extractNr(str) // extract number used in button remove click
{
    var matches = str.match(/(\d+)/);
      
    if (matches) 
    {
        return matches[0]
    }
}

function addMaterials() // appends a whole new form with corresponding elements to the page
{
    var addForm = document.getElementById("formWrapper");
    var form = document.createElement("form"+I);
    form.setAttribute("class", "flex form");
    form.setAttribute("id", "form"+I)
    
    var textBox = document.createElement("input");
    textBox.setAttribute("type", "text");
    textBox.setAttribute("pattern", "\d*");
    textBox.setAttribute("id", "input"+I);
    textBox.setAttribute("value", "0");

    var materialsSel = document.createElement("select");
    materialsSel.setAttribute("id", "material"+I);

    var addBtn = document.createElement("button");
    addBtn.setAttribute("type", "button");
    addBtn.setAttribute("class", "addBtn btn");
    addBtn.setAttribute("onclick", "buttonAddClicked()");
    addBtn.setAttribute("id", "btn"+I);
    addBtn.innerHTML = "Add";

    addForm.insertBefore(form, (document.getElementById("calcBtn")));
    form.appendChild(textBox);
    form.appendChild(materialsSel);
    form.appendChild(addBtn);

    fillSelect(I);

    replaceAddBtn(I);

    var input = document.getElementById("input"+I);
    input.addEventListener("click", () => 
    {
        input.value = "";      
    });
    
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function calcClick()
{
    // always ignore the last form!

    const amountArr = [];
    const dropdownArr = [];

    for (let i = 0; i < 100; i++) 
    {
        if(document.getElementById("input"+i) != null) // if there is not no input element left
        {
            if(document.getElementById("input"+i).value != 0) // check for the input to not have the default value of 1
            {
                amountArr.push(document.getElementById("input"+i).value);
                dropdownArr.push(document.getElementById("material"+i).value);
            }            
        }
    }
    console.log(amountArr, dropdownArr)

    // put all input values and dropdown values in an array (amountArr, dropdownArr)
    // when done along side, the amount and dropdown value should have the same index

    let diyArr = checkCompatibleDiy(dropdownArr);

    // countMaterials(diyArr);
    // when the new array is populated with the craftable diys we can check the amount of the materials required for the given diy.
    // look up the materials in the materials.js and their values
    // muliply the value of the material by the amount the DIY needs. save in an array named after current diy (material name and multiplied value)
    // do so for all materials of that diy

    // loop through array for all diy objects
    // loop thourgh the object for all materials and their values (ignore first key and value for now)


    materialValue();
    // add the value of all materials (thats the cost of solely the materials if you'd sell those to nooks without crafting this DIY)

    // perdorm this check for all diys in the craftableArr

    profitArr()
}

function checkCompatibleDiy(materials)
{  
    // check the given materials against the DIY's...
    // or check the diys against the materials...
    // if a diy requirs a material not in the given materials list it should not be noted! (move on to the next diy (object))
    // if a diy requirs more than the amount of the given materials the diy should not be noted! (move on to the next (object))
    // put the diy's (objects) that pass the test in a diffrent array (craftableArr)
    // returns array of diys
}

// function countMaterials(diy)
// {
//     
// }

function materialValue()
{
    // make a function that takes an object of the diy and the array of the materials
    // take from the diy object the keys representing the materials and look up that value in the array of the materials (ignore the first key as that is the name and value of the diy)
    // take from the diy object the value of the keys and multiply with the value of the material
}

function profitArr()
{
    // the value of the DIY should be more than the value of the combined materials (save this number) --> if not, delete the diy from the array

    // once all the profitable diys are left, sort the array of diys with the highest number of profits at the first index (maybe need a diffrent array?)
    // show the left over diys in an element with the amount of profit made were the player to craft that diy
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function replaceAddBtn(I) // replaces the add button to a remove button
{
    var btn = (document.getElementById("btn"+(I-1)));
    btn.setAttribute("class", "removeBtn btn");
    btn.setAttribute("onclick", "buttonRemoveClicked(this.id)");
    btn.innerHTML = "Remove";
}

function errorMessage() // displays error message if not correctly filled in
{   
    window.confirm("Make sure all the fields are filled in correctly");
    document.getElementById("input"+I).style.backgroundColor = "red";
}

function isNumeric(str)  // check if a string is a number
{
    if (typeof str != "string") return false // we only process strings!  
    return  !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
            !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}