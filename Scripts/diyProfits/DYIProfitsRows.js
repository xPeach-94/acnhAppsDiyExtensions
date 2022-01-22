const fillSelect = function (Index)// Filling in each select
{
    materialArr.forEach //Loop through array
        (
            function (item) 
            {
                for (var key in item) 
                {
                    var newSelect = document.getElementById("material" + Index);
                    var optn = document.createElement("option");
                    optn.value = Object.values(item)[0];

                    optn.innerHTML = Object.values(item)[0];

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

var I = 0;
var input = document.getElementById("input" + I);
input.addEventListener("click", () =>               // method to check if the input has the starting value ( 0 ). and emtying the box for user friendly behaviour
{
    if (document.getElementById("input" + I).value == "0") {
        input.value = "";
    }

});

const extractNr = function (str) // extract number used in button remove click
{
    var matches = str.match(/(\d+)/);

    if (matches) {
        return matches[0]
    }
}
const isNumeric = function (str)  // check if a string is a number
{
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

const replaceAddBtn = function (I) // replaces the add button to a remove button
{
    var btn = (document.getElementById("btn" + (I - 1)));
    btn.setAttribute("class", "removeBtn btn");
    btn.setAttribute("onclick", "buttonRemoveClicked(this.id)");
    btn.innerHTML = "Remove";
}

const errorMessage = function () // displays error message if not correctly filled in
{
    window.confirm("Make sure all the fields are filled in correctly");
    document.getElementById("input" + I).style.backgroundColor = "red";
}

const addMaterials = function () // appends a whole new form with corresponding elements to the page
{
    var addForm = document.getElementById("formWrapper");
    var form = document.createElement("form" + I);
    form.setAttribute("class", "flex form");
    form.setAttribute("id", "form" + I);

    var textBox = document.createElement("input");
    textBox.setAttribute("type", "number");
    textBox.setAttribute("id", "input" + I);
    textBox.setAttribute("value", "0");

    var materialsSel = document.createElement("select");
    materialsSel.setAttribute("id", "material" + I);

    var addBtn = document.createElement("button");
    addBtn.setAttribute("type", "button");
    addBtn.setAttribute("class", "addBtn btn");
    addBtn.setAttribute("onclick", "buttonAddClicked()");
    addBtn.setAttribute("id", "btn" + I);
    addBtn.innerHTML = "Add";

    addForm.insertBefore(form, (document.getElementById("calcBtn")));
    form.appendChild(textBox);
    form.appendChild(materialsSel);
    form.appendChild(addBtn);

    fillSelect(I);

    replaceAddBtn(I);

    var input = document.getElementById("input" + I);
    input.addEventListener("click", () => {
        input.value = "";
    });

}

const buttonAddClicked = function () // button add is clicked
{
    if ((document.getElementById("input" + I).value != "") && (document.getElementById("input" + I).value != "0")) // if input is not empty and not 0
    {
        if (isNumeric(document.getElementById("input" + I).value)) // check if input is actually a number
        {
            document.getElementById("input" + I).style.backgroundColor = "white";
            document.getElementById("input" + I).disabled = true;
            document.getElementById("material" + I).disabled = true;

            I++;
            addMaterials()
        }
        else // if input is not a number
        {
            errorMessage()
            var input = document.getElementById("input" + I);
            input.addEventListener("click", () => {
                input.value = "";
            });
        }
    }
    else // if input is empty or a 0
    {
        errorMessage()
        var input = document.getElementById("input" + I);
        input.addEventListener("click", () => {
            input.value = "";
        });
    }
}

const buttonRemoveClicked = function (id) // remove the whole form where this specific button belongs to
{
    var idNum = extractNr(id);
    var removeForm = document.getElementById("form" + idNum);
    removeForm.remove();
}