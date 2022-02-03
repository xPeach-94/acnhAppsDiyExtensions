const birthdaysVillagers = function (villager) {
    var birthN = document.getElementById("birthdaysN");

    var icon = document.createElement("img");
    var name = document.createElement("h4");
    var date = document.createElement("h5");

    icon.setAttribute("src", villager.icon_url);
    icon.setAttribute("class", "icons")
    icon.setAttribute("style", "width: 80%;");

    name.innerHTML = villager.name;
    date.innerHTML = new Date(getYear() +"-"+ villager.birthday).toLocaleDateString();

    birthN.appendChild(icon);
    birthN.appendChild(name);
    birthN.appendChild(date);

    
    var birthS = document.getElementById("birthdaysS");

    var icon = document.createElement("img");
    var name = document.createElement("h4");
    var date = document.createElement("h5");
    icon.setAttribute("src", villager.icon_url);
    icon.setAttribute("class", "icons")
    icon.style.width = "80%";
    name.innerHTML = villager.name;
    date.innerHTML = new Date(getYear() +"-"+ villager.birthday).toLocaleDateString();
    
    birthS.appendChild(icon);
    birthS.appendChild(name);
    birthS.appendChild(date);
}

const vilBirthdays = function(date) 
{
    villagerBirthdays.forEach
    (
        function (villager) 
        {
            let birthday = new Date(getYear() + "-" + villager.birthday)
            let birthM = leadingZeros(birthday.getMonth() + 1);
            let birthD = leadingZeros(birthday.getDate());

            let newD = getYear() + "-" + birthM + "-" + birthD;

            if (date == newD) 
            {
                birthdaysVillagers(villager);
            }
        }
    )
}

vilBirthdays(curDate);

var newBirthday = document.getElementById("birthdaysN");
var upcomming = document.createElement("h4");
upcomming.setAttribute("style", "color: #006994; margin: 10px 0px");

upcomming.innerHTML = "Upcoming Birthdays:";
newBirthday.appendChild(upcomming);

var newBirthday = document.getElementById("birthdaysS");
var upcomming = document.createElement("h4");
upcomming.setAttribute("style", "color: #006994; margin: 10px 0px");

upcomming.innerHTML = "Upcoming Birthdays:";
newBirthday.appendChild(upcomming);

let newD = curDate;

for (let i = 0; i < 3; i++) 
{
    newD = addDays(newD, 1);
    vilBirthdays(newD);
}