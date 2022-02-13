// https://www.programiz.com/javascript/examples/check-leap-year
// program to check leap year
function checkLeapYear(year) {
    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return 29; // leap year
    }
    else {
        return 28; // no leap year
    }
}

const getMonthDays = function (month, year) {
    switch (month) {
        case 1:
            return 31;
        case 2:
            return checkLeapYear(year);
        case 3:
            return 31;
        case 4:
            return 30;
        case 5:
            return 31;
        case 6:
            return 30;
        case 7:
            return 31;
        case 8:
            return 31;
        case 9:
            return 30;
        case 10:
            return 31;
        case 11:
            return 30;
        case 12:
            return 31;

        default:
            console.log("oops something went wrong :(", month);
            break;
    }
}

const subtractDays = function (date, days) // subtracting the amount of days from a given date
{
    let fullDate = new Date(date);

    let d = fullDate.getDate();
    let m = fullDate.getMonth() + 1; // getMonth gives the index of the month, added +1 to get the month number
    let y = fullDate.getFullYear();

    d = d - days; // new day is current day minus the given subtracted days

    do {
        if (d < 1) // if the new number is less than 1
        {
            m = m - 1; // go back into the previous month
            if (m < 1) {
                m = 12;
                y = y - 1;
            }

            d = (getMonthDays(m, y) + d); // check which month it is and them add the remainder of the numbers, 31 + (-3) = 28
        }

    } while (d < 1);

    m = leadingZeros(m);
    d = leadingZeros(d);

    let newD = y + "-" + m + "-" + d;

    return newD;
}

const addDays = function (date, days) {
    let fullDate = new Date(date);
    let d = fullDate.getDate();
    let m = fullDate.getMonth() + 1;
    let y = fullDate.getFullYear();

    d = d + days;

    do {
        if (d > getMonthDays(m, y)) {
            d = d - getMonthDays(m, y);
            m = m + 1;
            if (m > 12) {
                m = 1;
                y = y + 1;
            }
        }

    } while (d > getMonthDays(m, y));

    m = leadingZeros(m);
    d = leadingZeros(d);

    let newD = y + "-" + m + "-" + d;

    return newD;
}