let amountArr = [];
let dropdownArr = [];
let profitArr = []

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const checkCompatibleDiy = function (materials) 
{
    // check the diys against the materials...
    // if a diy requiers a material not in the given materials list it should not be noted! (move on to the next diy (object))
    // if a diy requiers more than the amount of the given materials the diy should not be noted! (move on to the next (object))
    // put the diy's (objects) that pass the test in a diffrent array (craftableArr)
    // returns array of diys

    let newDiyArr = [];
    
    diyArr.forEach //Loop through array
    (
        function (item) 
        {
            let diyMaterialCount = 1;

            for (let i = 1; i< (Object.keys(item).length); i++)
            {
                let curMaterial = Object.keys(item)[i];

                for (let x = 0; x < dropdownArr.length; x++)
                {
                    if (curMaterial == dropdownArr[x])
                    {
                        diyMaterialCount++
                        break;
                    }
                }
                if (diyMaterialCount == Object.keys(item).length)
                {
                    newDiyArr.push(item);
                }                
            }            
        }
    )
    return newDiyArr;
}

const countMaterials = function (newDiyArr, dropdownArr, amountArr)
{
    let newUpdatedDIYArr = [];
    newDiyArr.forEach
    (
        function (item) 
        {
            let DIYAmountCount = 1;
            
            for (let i = 1; i< (Object.keys(item).length); i++)
            {
                for (let x = 0; x< dropdownArr.length; x++)
                {
                    if (Object.keys(item)[i] == dropdownArr[x])
                    {
                        if (amountArr[x] >= Object.values(item)[i])
                        {
                            DIYAmountCount++;
                            break
                        }                        
                    }
                }
                if (DIYAmountCount == Object.keys(item).length)
                {
                    newUpdatedDIYArr.push(item);
                }
            }   
        }
    )    
    // console.log(newUpdatedDIYArr);
    return newUpdatedDIYArr;
}

const materialValue = function (diy) 
{
    let bellsForMaterials = 0;
    for (let i = 1; i< ((Object.keys(diy).length)); i++)
    {
        let materialItem = Object.keys(diy)[i];

        materialArr.forEach //Loop through array
        (
            function (item) 
            {
                for (var key in item) 
                {
                    if (key == materialItem)
                    {
                        let amount = Object.values(diy)[i];
                        let amountBells = Object.values(item)[0];
                        let fullAmount = amount*amountBells
                        bellsForMaterials = bellsForMaterials + fullAmount;
                    }
                    break;
                }
            }
        )
    }
    // console.log(Object.keys(diy)[0], "cost of Materials:",bellsForMaterials);
    return bellsForMaterials;
}

const profitCalc = function (diy) 
{
    let profit = (Object.values(diy)[0]) - (materialValue(diy));
    return profit;
}

const sort = function (diyArr, profitArr)
{
    for (x = 0; x < profitArr.length; x++)
    {
        for (y = 0; y < profitArr.length; y++)
        {
            if (profitArr[x] > profitArr[y])
            {
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
    return(diyArr);
}

const calcClick = function () 
{
    amountArr = [];
    dropdownArr = [];
    profitArr = [];
    
    for (let i = 0; i < 100; i++) 
    {
        if (document.getElementById("input" + i) != null && document.getElementById("input" + i).value != 0)
        // check if there is not no input element left AND check for the input to not have the default value of 0
        {
            amountArr.push(document.getElementById("input" + i).value);
            dropdownArr.push((document.getElementById("material" + i).value).replace(/([A-Z])/g, ' $1').trim());
        }
    }
    // console.log(amountArr, dropdownArr);

    let newDiyArr = checkCompatibleDiy(dropdownArr);

    newDiyArr = countMaterials(newDiyArr, dropdownArr, amountArr);
    // console.log(newDiyArr);

    for (let i = 0; i < newDiyArr.length; i++) 
    {
        profitArr.push(profitCalc(newDiyArr[i]));
    }
    // console.log(newDiyArr, profitArr);
    
    newDiyArr = sort(newDiyArr, profitArr);

    // console.log(newDiyArr);

    var profitList = document.getElementById("profitable");
    profitList.style = "display: none";

    if (newDiyArr.length != 0)
    {
        profitList.style = "display: flex";
        profitList.innerHTML = "";

        for (let i = 0; i < newDiyArr.length; i++)
        {
            let diyTitle = Object.keys(newDiyArr[i])[0];
            let diySell = Object.values(newDiyArr[i])[0];
            let materialCost = materialValue(newDiyArr[i]);
            let profit = profitCalc(newDiyArr[i]);

            var createForm = document.createElement("form");
            createForm.setAttribute("class", "width border");
            var createH4 = document.createElement("h4");
            var createP1 = document.createElement("p");
            var createP2 = document.createElement("p");
            var createP3 = document.createElement("p");
            createP3.setAttribute("class", "bold");
            
            createForm.appendChild(createH4);
            createForm.appendChild(createP1);
            createForm.appendChild(createP2);
            createForm.appendChild(createP3);
            profitList.appendChild(createForm);

            createH4.innerHTML = diyTitle;
            createP1.innerHTML = "Sold for: "+ diySell + " Bells";
            createP2.innerHTML = "Cost of Materials: "+ materialCost + " Bells";
            createP3.innerHTML = "Total Profit: "+ profit + " Bells";
        }
    }
    else
    {
        window.alert("No DIY's can be crafted :(");
    }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------