let amountArr = [];
let dropdownArr = [];

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

const profitArr = function () 
{
    // the value of the DIY should be more than the value of the combined materials (save this number) --> if not, delete the diy from the array

    // once all the profitable diys are left, sort the array of diys with the highest number of profits at the first index (maybe need a diffrent array?)
    // show the left over diys in an element with the amount of profit made were the player to craft that diy
}

const calcClick = function () 
{
    amountArr = [];
    dropdownArr = [];
    
    for (let i = 0; i < 100; i++) {
        if (document.getElementById("input" + i) != null && document.getElementById("input" + i).value != 0)
        // check if there is not no input element left AND check for the input to not have the default value of 0
        {
            amountArr.push(document.getElementById("input" + i).value);
            dropdownArr.push((document.getElementById("material" + i).value).replace(/([A-Z])/g, ' $1').trim());
        }
    }
    // console.log(amountArr, dropdownArr);

    let newDiyArr = checkCompatibleDiy(dropdownArr);
    // console.log(newDiyArr);

    newDiyArr = countMaterials(newDiyArr, dropdownArr, amountArr);
    console.log(newDiyArr);

    // when the new array is populated with the craftable diys we can check the amount of the materials required for the given diy.
    // look up the materials in the materials.js and their values
    // muliply the value of the material by the amount the DIY needs. save in an array named after current diy (material name and multiplied value)
    // do so for all materials of that diy

    // loop through array for all diy objects
    // loop thourgh the object for all materials and their values (ignore first key and value for now)

    // for (let i = 0; i <= (newDiyArr.length)-1; i++) {
    //     materialValue(diyArr[i]);
    // }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------