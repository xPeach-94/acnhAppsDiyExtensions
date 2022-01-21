function subtractDays(date, days)
{
    let fullDate = new Date(date);
    
    let d = fullDate.getDate();
    let m = fullDate.getMonth()+1;

    d = d-days;
    if (d <= 0) 
    {
        m = m-1;
        d = 31 + d;
    }

    if ((m.toString()).length < 2) {
        m = "0" + m;
    }
    if ((d.toString()).length < 2) {
        d = "0" + d;
    }

    let newD = fullDate.getFullYear() +"-"+ m +"-"+ d;
    // console.log(date, "-", days,"days", "=", newD);

    return newD;
}

function addDays(date, days)
{
   
}