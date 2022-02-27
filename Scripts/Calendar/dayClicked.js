const cellBtnClicked = function(el)
{
    currentMonth = getSelectedMonth();
    currentYear = getSelectedYear();

    let dateClicked = currentYear +"-"+ leadingZeros(currentMonth) +"-"+ leadingZeros(el.value);
    console.log("Clicked", new Date(dateClicked));
}