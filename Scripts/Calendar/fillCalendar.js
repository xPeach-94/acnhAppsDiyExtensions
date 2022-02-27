const fillDay = function(date)
{
    date = new Date(date);
    let day = date.getDate();
    let month = date.getMonth()+1;
    let url;

    villagerBirthdays.forEach
    (
        function (villager)
        {
            if (villager.birthday == (month +"-"+ day)) 
            {
                url = villager.icon_url;
            }
        }
    )
    return url;
}