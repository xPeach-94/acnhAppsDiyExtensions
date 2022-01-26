const getFestivaleDate = function (date)
{
    date = new Date(date);
    let dateYear = date.getFullYear();

    let mardiGras = new Date(subtractDays(getEaster(dateYear), 48));

    if (date > mardiGras) 
    {
        dateYear = dateYear +1;
        bunnyD = new Date(subtractDays(getEaster(dateYear), 48));
    }

    // console.log("Festivale", date.getFullYear()+"-"+leadingZeros(mardiGras.getMonth() +1) +"-"+ leadingZeros(mardiGras.getDate()));
    return leadingZeros(mardiGras.getMonth() +1) +"-"+ leadingZeros(mardiGras.getDate());
}

const getBunnyDayDate = function (date)
{
    date = new Date(date);
    let dateYear = date.getFullYear();

    let bunnyD = new Date(getEaster(dateYear));

    if (date > bunnyD) 
    {
        dateYear = dateYear +1;
        bunnyD = new Date(getEaster(dateYear));
    }

    // console.log("Bunny Day", date.getFullYear()+"-"+leadingZeros(bunnyD.getMonth() +1) +"-"+ leadingZeros(bunnyD.getDate()));
    return leadingZeros(bunnyD.getMonth() +1) +"-"+ leadingZeros(bunnyD.getDate());
}

const getFireworksDate = function(date)
{
    // every sunday in august
    date = new Date(date);

    for (let i = 0; i <= 356; i++) 
    {
        if ((date.getMonth() +1) == "08" && date.getDay() == 0) 
        {
            let newD = leadingZeros(date.getMonth()+1) +"-"+ leadingZeros(date.getDate());

            // console.log("Fireworks", date.getFullYear()+"-"+leadingZeros(date.getMonth() +1) +"-"+ leadingZeros(date.getDate()));
            return newD;
        }
        date = new Date(addDays(date, 1));
    }
}

const getTurkeyDate = function(date)
{
    date = new Date(date);

    for (let i = 0; i <= 365; i++) 
    {
        if ((date.getMonth() +1) == 11 && date.getDay() == 4 && date.getDate() > 21 && date.getDate() < 29) 
        {
            let newD = leadingZeros(date.getMonth()+1) +"-"+ leadingZeros(date.getDate());

            // console.log("Turkey Day", date.getFullYear()+"-"+ leadingZeros(date.getMonth() +1) +"-"+ leadingZeros(date.getDate()));
            return newD;
        }
        date = new Date(addDays(date, 1));
    }
}

const getFishingDate = function(date)
{
    date = new Date(date);

    for (let i = 0; i <= 365; i++) 
    {
        if ((date.getMonth() +1) == 1 || (date.getMonth() +1) == 4 || (date.getMonth() +1) == 7 || (date.getMonth() +1) == 10) 
        {
            if (date.getDay() == 6 && date.getDate() > 7 && date.getDate() <= 14) 
            {
                let newD = leadingZeros(date.getMonth()+1) +"-"+ leadingZeros(date.getDate());

                // console.log("fishing tourney", date.getFullYear() +"-"+newD);
                return newD;
            }
        }
        date = new Date(addDays(date, 1));
    }
}

const getBugDate = function(hem, date)
{
    date = new Date(date);

    if (hem == 0)
    {
        for (let i = 0; i <= 365; i++) 
        {
            if ((date.getMonth() +1) == 6 || (date.getMonth() +1) == 7 || (date.getMonth() +1) == 8 || (date.getMonth() +1) == 9) 
            {
                if (date.getDay() == 6 && date.getDate() > 21 && date.getDate() <= 28) 
                {
                    let newD = leadingZeros(date.getMonth()+1) +"-"+ leadingZeros(date.getDate());

                    // console.log("bug off north", date.getFullYear() +"-"+newD);
                    return newD;
                }
            }
            date = new Date(addDays(date, 1));
        }
    }
    else if (hem == 1)
    {
        for (let i = 0; i <= 365; i++) 
        {
            if ((date.getMonth() +1) == 1 || (date.getMonth() +1) == 2 || (date.getMonth() +1) == 11 || (date.getMonth() +1) == 12) 
            {
                if (date.getDay() == 6 && date.getDate() > 14 && date.getDate() <= 21) 
                {
                    let newD = leadingZeros(date.getMonth()+1) +"-"+ leadingZeros(date.getDate());

                    // console.log("bug off south", date.getFullYear() +"-"+newD);
                    return newD;
                }
            }
            date = new Date(addDays(date, 1));
        }
    }
}