
var I =0;
function fillSelect(Index)
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

if (first)
{
    fillSelect(0);
    first = false;
}

var input = document.getElementById("input"+I);
input.addEventListener("click", () => 
{
    if (document.getElementById("input"+I).value == "0")
    {
        input.value = "";
    }
    
});

function buttonAddClicked()
{
    if ((document.getElementById("input"+I).value != "") && (document.getElementById("input"+I).value != "0"))
    {
        if (isNumeric(document.getElementById("input"+I).value))
        {
            document.getElementById("input"+I).style.backgroundColor = "white";
            I++;
            addMaterials()
        }
        else
        {
            errorMessage()  
            var input = document.getElementById("input"+I);
            input.addEventListener("click", () => 
            {
                input.value = "";
            });          
            }
    }
    else
    {  
        errorMessage()  
        var input = document.getElementById("input"+I);
        input.addEventListener("click", () => 
        {
            input.value = "";        
        });      
        }
}
function buttonRemoveClicked(id)
{
    var idNum = extractNr(id);
    var removeForm = document.getElementById("form"+idNum);
    removeForm.remove();
}

function extractNr(str) 
{
    var matches = str.match(/(\d+)/);
      
    if (matches) 
    {
        return matches[0]
    }
}

function addMaterials()
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

function replaceAddBtn(I)
{
    var btn = (document.getElementById("btn"+(I-1)));
    btn.setAttribute("class", "removeBtn btn");
    btn.setAttribute("onclick", "buttonRemoveClicked(this.id)");
    btn.innerHTML = "Remove";
}

function errorMessage()
{   
    window.confirm("Make sure all the fields are filled in correctly");
    document.getElementById("input"+I).style.backgroundColor = "red";
}

function isNumeric(str) 
{
    if (typeof str != "string") return false // we only process strings!  
    return  !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
            !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}