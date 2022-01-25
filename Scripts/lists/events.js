//https://animalcrossing.fandom.com/wiki/Events_(New_Horizons)
const eventsArr =
[
    {
        "name": "New Year's Day",
        "Date": "01-01",
    },
    {
        "name": "Valentine's Day",
        "Date": "02-14",
        "img": "https://dodo.ac/np/images/1/17/Chocolate_Heart_%28Milk_Chocolate%29_NH_Icon.png"
    },
    {
        "name": "Festivale",
        "Date": getFestivaleDate(curDate),
        "img": "https://static.wikia.nocookie.net/animalcrossing/images/1/16/Pave_NLa.png/revision/latest?cb=20200826024643"
    },
    {
        "name": "Bunny Day",
        "Date": getBunnyDayDate(curDate),
        "img": "https://static.wikia.nocookie.net/animalcrossing/images/e/e3/Zipper_NH.png/revision/latest?cb=20200413134815",
    },
    {
        "name": "Nature Day",
        "Date": "04-22",
        "endDate": "05-04",
        "img": "https://gbatemp.net/data/avatars/o/551/551312.jpg?1613012223",
    },
    {
        "name": "May Day",
        "Date": "05-01",
        "endDate": "05-07",
        "img": "https://static.wikia.nocookie.net/animalcrossing/images/0/02/Rover_AmF.png/revision/latest?cb=20200827041621",
    },
    {
        "name": "International Museum Day",
        "Date": "05-18",
        "endDate": "05-31",
        "img": "https://static.wikia.nocookie.net/animalcrossing/images/c/c3/Blathers_NL.png/revision/latest?cb=20130807000633",
    },
    {
        "name": "Wedding Season",
        "Date": "06-01",
        "endDate": "06-30",
        "img": "https://www.nicepng.com/png/full/154-1548582_reese-and-cyrus-animal-crossing-3-pack-amiibo.png",
    },
    {
        "name": "Fireworks Show",
        "Date": getFireworksDate(curDate),
        "img": "https://dodo.ac/np/images/3/32/Fountain_Firework_NH_Icon.png",
    },
    {
        "name": "Halloween",
        "Date": "10-31",
        "img": "https://static.wikia.nocookie.net/animalcrossing/images/5/5c/Jack_NLa.png/revision/latest/scale-to-width-down/250?cb=20210113083859",
    },
    {
        "name": "Turkey Day",
        "Date": getTurkeyDate(curDate),
        "img": "https://static.wikia.nocookie.net/animalcrossing/images/c/c3/Franklin_NLa.png/revision/latest?cb=20200719235419",
    },
    {
        "name": "Toy Day",
        "Date": "12-24",
        "img": "https://static.wikia.nocookie.net/animalcrossing/images/a/a6/Jingle_NH.png/revision/latest?cb=20210113193418",
    },
    {
        "name": "New Year's Eve",
        "Date": "12-31",
        "img": "https://dodo.ac/np/images/4/46/Bulb_Bopper_NH_Icon.png",
    },
    {
        "name": "Fishing Tourney",
        "Date": getFishingDate(curDate), 
        "img": "https://static.wikia.nocookie.net/animalcrossing/images/4/49/C.J._NH.png/revision/latest?cb=20200317162527",
    },
    {
        "name": "Bug Off North",
        "Date": getBugDate(0, curDate), 
        "img": "https://static.wikia.nocookie.net/animalcrossing/images/f/f4/Flick_NH.png/revision/latest?cb=20200403152806",
    },
    {
        "name": "Bug Off South",
        "Date": getBugDate(1, curDate),
        "img": "https://static.wikia.nocookie.net/animalcrossing/images/f/f4/Flick_NH.png/revision/latest?cb=20200403152806",
    },
];