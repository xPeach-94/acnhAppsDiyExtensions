let diyNames = [];

diyArr.forEach
(
    function(diy)
    {
        diyNames.push(diy.name);
    }
);

autocomplete(document.getElementById("diyInp"), diyNames);


let selectedDiyArr = [];

const removeDiyFromArr = function(diyName)
{
    for (let i = 0; i < selectedDiyArr.length; i++) 
    {
        if (diyName == selectedDiyArr[i].name) 
        {
            selectedDiyArr.splice(i, 1);
        }
    }
}

const deleteDiy = function(element)
{
    element.remove();
}

const diyBtnEvents = function(element)
{
    removeDiyFromArr(element.value);
    deleteDiy(element);
}

const addDiyToList = function(diy)
{
    let list = document.getElementById("DIYContainer")
    
    let container = document.createElement("button");
    container.setAttribute("style", "width: 33%; background-color: transparent; border: none;");
    container.setAttribute("value", diy.name);
    container.setAttribute("onclick", "diyBtnEvents(this)");

    let img = document.createElement("img");
    img.setAttribute("src", diy.img);
    img.setAttribute("style", "width: 100%");

    let name = document.createElement("h4");
    name.innerHTML = diy.name;

    container.appendChild(img);
    container.appendChild(name);

    list.appendChild(container);
}


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
                    selectedDiyArr.push(diy);
                    addDiyToList(diy);
                }
            }
        );

        let diyContainer = document.getElementById("diyAddedContainer");
        diyContainer.setAttribute("style", "display: flex;");

        document.getElementById("diyInp").value = "";
    }
}

let selectedDiyMaterials = [];
let selectedDiyMaterialsAmount = [];


const calculateMaterials = function()
{
    selectedDiyArr.forEach
    (
        function (diy)
        {
            const diyKeys = Object.keys(diy.materials);
            const diyValues = Object.values(diy.materials);

            for (let i = 0; i < diyKeys.length; i++) 
            {
                if (selectedDiyMaterials != "") 
                {
                    if (selectedDiyMaterials.includes(diyKeys[i])) 
                    {
                        for (let x = 0; x < selectedDiyMaterials.length; x++) 
                        {
                            if (diyKeys[i] == selectedDiyMaterials[x]) 
                            {
                                selectedDiyMaterialsAmount[x] = selectedDiyMaterialsAmount[x] + diyValues[i];
                            }
                        }
                    }
                    else
                    {
                        selectedDiyMaterials.push(diyKeys[i]);
                        selectedDiyMaterialsAmount.push(diyValues[i]);
                    }
                }
                else
                {
                    selectedDiyMaterials.push(diyKeys[i]);
                    selectedDiyMaterialsAmount.push(diyValues[i]);
                }
            }
        }
    )
}

const findImgUrl = function(material)
{
    let imgUrl;

    imgUrl = "https://dodo.ac/np/images/thumb/8/82/Furniture_NH_Inv_Icon.png/120px-Furniture_NH_Inv_Icon.png"; // default url

    materialArr.forEach
    (
        function (materialItem)
        {
            if (material == materialItem.name) 
            {
                imgUrl = materialItem.img;                
            }
        }
    )
    fishArr.forEach
    (
        function (materialItem)
        {
            if (material == materialItem.name) 
            {
                imgUrl = materialItem.image_url;                
            }
        }
    )
    divingArr.forEach
    (
        function (materialItem)
        {
            if (material == materialItem.name) 
            {
                imgUrl = materialItem.image_url;                
            }
        }
    )
    diyArr.forEach
    (
        function (materialItem)
        {
            if (material == materialItem.name) 
            {
                imgUrl = materialItem.img;                
            }
        }
    )
    return imgUrl;
}

const displayMaterials = function(material, amount)
{
    var materialList = document.getElementById("materialList");
    materialList.style = "display: flex";

    var materialContainer = document.createElement("div");
    materialContainer.setAttribute("class", "flex");
    materialContainer.setAttribute("style", "justify-content: center; align-items: center; gap: 10px");
    
    var materialImg = document.createElement("img");
    materialImg.setAttribute("src", findImgUrl(material));
    materialImg.setAttribute("style", "width: 25%");

    var itemName = document.createElement("h4");
    itemName.innerHTML = material;

    var materialCount = document.createElement("h4");
    materialCount.innerHTML = "X "+amount;

    materialContainer.appendChild(materialImg);
    materialContainer.appendChild(itemName);
    materialContainer.appendChild(materialCount);
    materialList.appendChild(materialContainer)

    // console.log(material, amount)
}

const calcDiyMaterialsClick = function()
{
    document.getElementById("materialList").innerHTML = "";

    selectedDiyMaterials = [];
    selectedDiyMaterialsAmount = [];

    calculateMaterials();

    // console.log(selectedDiyMaterials, selectedDiyMaterialsAmount);

    for (let i = 0; i < selectedDiyMaterials.length; i++) 
    {
        displayMaterials(selectedDiyMaterials[i], selectedDiyMaterialsAmount[i]);
    }
}
// aan het einde wordt een lijst laten zien met welke en hoeveel materialen je nodig hebt