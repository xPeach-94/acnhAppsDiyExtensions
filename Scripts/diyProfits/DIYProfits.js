let amountArr = [];
let dropdownArr = [];
let profitArr = []

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const checkCompatibleDiy = function (materials) {
    let newDiyArr = [];

    diyArr.forEach
        (
            function (diy) {
                let diyMaterialCount = Object.keys(diy.materials).length;

                for (let i = 0; i < Object.keys(diy.materials).length; i++) {
                    for (let x = 0; x < materials.length; x++) {
                        if (Object.keys(diy.materials)[i] == materials[x]) {
                            diyMaterialCount--;
                        }
                    }
                }
                if (diyMaterialCount == 0) {
                    newDiyArr.push(diy);
                }
            }
        )
    return newDiyArr;
}

const countMaterials = function (newDiyArr, dropdownArr, amountArr) {
    // check of de huidige diy minder materialen gebruikt dan de opgegeven aantal materialen
    let newUpdatedDIYArr = [];

    // console.log(amountArr, dropdownArr);

    newDiyArr.forEach
        (
            function (diy) {
                let diyMaterialCount = Object.keys(diy.materials).length;

                for (let i = 0; i < Object.keys(diy.materials).length; i++) {
                    for (let x = 0; x < dropdownArr.length; x++) {
                        if (Object.keys(diy.materials)[i] == dropdownArr[x]) {
                            if (Object.values(diy.materials)[i] <= amountArr[x]) {
                                diyMaterialCount--;
                            }
                        }
                    }
                }
                if (diyMaterialCount == 0) {
                    newUpdatedDIYArr.push(diy);
                }
            }
        )

    // console.log(newUpdatedDIYArr);
    return newUpdatedDIYArr;
}

const materialValue = function (diy) {
    // check van de huidige diy hoeveel materialen het gebruikt
    // zoek de value van de materialen op
    // multiply de amount materialen van de diy met de value van het materiaal

    let bellsForMaterials = 0;
    let materialItem = null;
    let amount = 0;

    for (let i = 0; i < Object.keys(diy.materials).length; i++) {
        materialItem = Object.keys(diy.materials)[i];
        amount = Object.values(diy.materials)[i]

        for (let x = 0; x < materialArr.length; x++) {
            if (materialItem == materialArr[x].name) {
                bellsForMaterials = bellsForMaterials + (amount * materialArr[x].sell)
            }
        }
    }

    // console.log(diy.name, "cost of Materials:",bellsForMaterials);
    return bellsForMaterials;
}

const profitCalc = function (diy) {
    // calculeer de winst van huidige diy
    // diy sell - materialValue

    profit = diy.sell - (materialValue(diy));

    return profit;
}

const sort = function (diyArr, profitArr) {
    for (x = 0; x < profitArr.length; x++) {
        for (y = 0; y < profitArr.length; y++) {
            if (profitArr[x] > profitArr[y]) {
                let temp = profitArr[x];
                profitArr[x] = profitArr[y];
                profitArr[y] = temp;

                // console.log(profitArr[x], profitArr[y], "Sorted");

                temp = diyArr[x];
                diyArr[x] = diyArr[y];
                diyArr[y] = temp;
                // console.log(diyArr[x], diyArr[y], "Sorted");
            }
        }
    }

    // console.log(diyArr, profitArr);
    return (diyArr);
}

const nativeFruit = function (fruit)
{
    materialArr.forEach
    (
        function(material)
        {
            if (fruit == material.name) 
            {
                material.sell = 100;
            }
        }
    );
}

let diyNames = [];

diyArr.forEach
(
    function(diy)
    {
        diyNames.push(diy.name);
    }
);

autocomplete(document.getElementById("hot1"), diyNames);
autocomplete(document.getElementById("hot2"), diyNames);

const hotItem = function (input)
{
    diyArr.forEach
    (
        function(diy)
        {
            if (input == diy.name) 
            {
                diy.sell = diy.sell * 2;
            }
        }
    );
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const calcClick = function () {
    let fruits = document.getElementById("fruitDropdown");
    let fruit = fruits.value;
    if (fruit != "" && fruits.disabled == false) 
    {
        fruits.disabled = true;   
    }
    nativeFruit(fruit);

    let hot1 = document.getElementById("hot1");
    let hot2 = document.getElementById("hot2");

    if (hot1.value != "" && hot2.value != "" && hot1.disabled == false && hot2.disabled == false) 
    {
        hotItem(hot1.value);
        hotItem(hot2.value);
        hot1.disabled = true;
        hot2.disabled = true;
    }
    else if (hot1.value != "" || hot2.value != "")
    {
        if (hot1.value != "" && hot1.disabled == false) 
        {
            hotItem(hot1.value);
            hot1.disabled = true;
        }
        else if (hot2.value != "" && hot2.disabled == false) 
        {
            hotItem(hot2.value);
            hot2.disabled = true;
        }
    }

    
    
    
    amountArr = [];
    dropdownArr = [];
    profitArr = [];

    for (let i = 0; i < 100; i++) {
        if (document.getElementById("input" + i) != null && document.getElementById("input" + i).value != 0)
        // check if there is not no input element left AND check for the input to not have the default value of 0
        {
            amountArr.push(document.getElementById("input" + i).value);
            dropdownArr.push((document.getElementById("material" + i).value));
        }
    }
    // console.log(amountArr, dropdownArr);

    let newDiyArr = checkCompatibleDiy(dropdownArr);
    // console.log(newDiyArr);

    newDiyArr = countMaterials(newDiyArr, dropdownArr, amountArr);
    // console.log(newDiyArr);

    for (let i = 0; i < newDiyArr.length; i++) {
        profitArr.push(profitCalc(newDiyArr[i]));
    }
    // console.log(newDiyArr, profitArr);

    newDiyArr = sort(newDiyArr, profitArr);

    // console.log(newDiyArr);

    var profitList = document.getElementById("profitable");
    profitList.style = "display: none";

    if (newDiyArr.length != 0) {
        profitList.style = "display: flex";
        profitList.innerHTML = "";

        for (let i = 0; i < newDiyArr.length; i++) {
            let diyTitle = newDiyArr[i].name;
            let diyImg = newDiyArr[i].img;
            let diySell = (newDiyArr[i].sell).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // add dots after 3 digits

            let materialCost = materialValue(newDiyArr[i]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            let profit = profitCalc(newDiyArr[i]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

            var createForm = document.createElement("form");
            createForm.setAttribute("class", "width border");
            var createH4 = document.createElement("h4");
            var createImg = document.createElement("img");
            createImg.setAttribute("src", diyImg);
            createImg.setAttribute("style", "width: 50%; display: block; margin-left: auto; margin-right: auto");
            var createMaterialsDiv = document.createElement("div");
            createMaterialsDiv.setAttribute("style", "text-align: center; margin-bottom: 20px;");
            var createP1 = document.createElement("p");
            var createP2 = document.createElement("p");
            var createP3 = document.createElement("p");
            createP3.setAttribute("class", "bold");
            createP3.setAttribute("style", "font-size: 1.2em");

            createForm.appendChild(createH4);
            createForm.appendChild(createImg);
            createForm.appendChild(createMaterialsDiv);
            createForm.appendChild(createP1);
            createForm.appendChild(createP2);
            createForm.appendChild(createP3);
            profitList.appendChild(createForm);

            createH4.innerHTML = diyTitle;

            for (let x = 0; x < Object.keys(newDiyArr[i].materials).length; x++) {
                for (let y = 0; y < Object.keys(materialArr).length; y++) {
                    if (Object.keys(newDiyArr[i].materials)[x] == materialArr[y].name) {
                        let diyMaterialImg = materialArr[y].img;
                        let diyMaterialCount = Object.values(newDiyArr[i].materials)[x];

                        var createDiv = document.createElement("div");
                        createDiv.setAttribute("style", "display: flex; justify-content: center; gap: 0px; align-items: center;");

                        var createMaterialImg = document.createElement("img");
                        createMaterialImg.setAttribute("src", diyMaterialImg);
                        createMaterialImg.setAttribute("style", "width: 20%;");

                        var createPMaterialCount = document.createElement("p");
                        createPMaterialCount.innerHTML = ": " + diyMaterialCount
                        createPMaterialCount.setAttribute("style", "display: inline-block;");

                        createDiv.appendChild(createMaterialImg);
                        createDiv.appendChild(createPMaterialCount);
                        createMaterialsDiv.appendChild(createDiv);
                    }
                }
            }

            createP1.innerHTML = "Sold for: " + diySell + " Bells";
            createP2.innerHTML = "Cost of Materials: " + materialCost + " Bells";
            createP3.innerHTML = "Total Profit: " + profit + " Bells";
        }
    }
    else {
        window.alert("No DIY's can be crafted :(");
    }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------