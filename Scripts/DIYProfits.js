//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const checkCompatibleDiy = function (materials) {
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

const materialValue = function (diy) {
    // make a function that takes an object of the diy and the array of the materials
    // take from the diy object the keys representing the materials and look up that value in the array of the materials 
    //(ignore the first key as that is the name and value of the diy)
    // take from the diy object the value of the keys and multiply with the value of the material
    console.log(diy);
}

const profitArr = function () {
    // the value of the DIY should be more than the value of the combined materials (save this number) --> if not, delete the diy from the array

    // once all the profitable diys are left, sort the array of diys with the highest number of profits at the first index (maybe need a diffrent array?)
    // show the left over diys in an element with the amount of profit made were the player to craft that diy
}

const amountArr = [];
const dropdownArr = [];

const calcClick = function () {
    // always ignore the last form!

    for (let i = 0; i < 100; i++) {
        if (document.getElementById("input" + i) != null) // if there is not no input element left
        {
            if (document.getElementById("input" + i).value != 0) // check for the input to not have the default value of 1
            {
                amountArr.push(document.getElementById("input" + i).value);
                dropdownArr.push(document.getElementById("material" + i).value);
            }
        }
    }
    // console.log(amountArr, dropdownArr);

    for (let i = 0; i <= diyArr.length; i++) {
        materialValue(diyArr[i]);
    }

    // put all input values and dropdown values in an array (amountArr, dropdownArr)
    // when done along side, the amount and dropdown value should have the same index
}

let newDiyArr = checkCompatibleDiy(dropdownArr)
{
    // countMaterials(newDiyArr);
    // when the new array is populated with the craftable diys we can check the amount of the materials required for the given diy.
    // look up the materials in the materials.js and their values
    // muliply the value of the material by the amount the DIY needs. save in an array named after current diy (material name and multiplied value)
    // do so for all materials of that diy

    // loop through array for all diy objects
    // loop thourgh the object for all materials and their values (ignore first key and value for now)

}

// add the value of all materials (thats the cost of solely the materials if you'd sell those to nooks without crafting this DIY)
// perform this check for all diys in the craftableArr

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------