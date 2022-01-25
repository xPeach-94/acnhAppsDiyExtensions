const events =
[
    {
        "name": "New Year's Day",
        "Date": "1-1",
    },
    {
        "name": "Valentine's Day",
        "Date": "2-14",
    },
    {
        "name": "Festivale",
        "Date": subtractDays(getEaster(getYear()), 48),
    },
    {
        "name": "Bunny Day",
        "Date": getEaster(getYear()),
    },
];