const subtractDays = function (date, days) {
    // you get a string representing the date: "0405" = april 5th
    //function needs to subtract the given days off of the string date
    // april 5th (0405) - 12 days = maart 23 (0323)

    // define de maanden?? januari: 0101, 0131
    // 0405 date - 0401 eerste van de maand = 4 dagen
    // 12 opgegeven dagen - gebruikte dagen = 8 dagen nog over
    // 0331 laatste dag van maart - 8 dagen = 0323 23 maart
    // gebruik remainder %
}
const addDays = function (date, days) {
    //zelfde als subtract but add "0525" may 25th + 15 days = june 9th "0609"
    //0525 (may 25th) - 0531 (last day of may) = -6
    // given days - left over day = 9
    // get start of next month 0601 + 9 = 0609 june 9th
}

//https://gist.github.com/johndyer/0dffbdd98c2046f41180c051f378f343
/**
* Calculates Easter in the Gregorian/Western (Catholic and Protestant) calendar 
* based on the algorithm by Oudin (1940) from http://www.tondering.dk/claus/cal/easter.php
* @returns {array} [int month, int day]
*/

function getEaster() {
    let year = new Date().getFullYear();
    var f = Math.floor,
        // Golden Number - 1
        G = year % 19,
        C = f(year / 100),
        // related to Epact
        H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,
        // number of days from 21 March to the Paschal full moon
        I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)),
        // weekday for the Paschal full moon
        J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
        // number of days from 21 March to the Sunday on or before the Paschal full moon
        L = I - J,
        month = 3 + f((L + 40) / 44),
        day = L + 28 - 31 * f(month / 4);

    return [month, day];
}

// const bunnyDay = function ()
// {
//     let easter = getEaster();
//     //console.log(easter);
//     var month = easter[0];
//     var day = easter[1];

//     console.log(month, day);

//     if ((month.toString().length) < 2)
//     {
//         month = "0" + month.toString();
//     }
//     if ((day.toString().length) < 2)
//     {   
//         day = "0" + day.toString();
//     }

//     easterDate = month + day;
//     console.log(easterDate);
// }

const bugOff = function () {
    // ennaar laatste zaterdag
}

const events =
    [
        january = {
            "New Years Day": "0101",
            "Fishing Tourney": "0109",
        },
        // april = {
        //     "Bunny Day": [subtractDays(bunnyDay(), 12), bunnyDay()]// 12 days before easter to easter
        // },
        may = {
            "May Day": ["0501", "0507"],
            "Museum Day": ["0518", "0531"],
        },
        june = {
            "Wedding Season": ["0601", "0630"],
            "Bug Off": bugOff(),//eenaar laatste zaterdag
        },
    ];