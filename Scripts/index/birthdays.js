const birthdaysVillagers = function (villager) {
    var birthN = document.getElementById("birthdaysN");

    var icon = document.createElement("img");
    var name = document.createElement("h4");
    icon.setAttribute("src", villager.icon_url);
    icon.setAttribute("class", "icons")
    icon.style.width = "80%";
    name.innerHTML = villager.name;

    birthN.appendChild(icon);
    birthN.appendChild(name);

    var birthS = document.getElementById("birthdaysS");

    var icon = document.createElement("img");
    var name = document.createElement("h4");
    icon.setAttribute("src", villager.icon_url);
    icon.setAttribute("class", "icons")
    icon.style.width = "80%";
    name.innerHTML = villager.name;
    
    birthS.appendChild(icon);
    birthS.appendChild(name);
}

villagerBirthdays.forEach
    (
        function (villager) 
        {
            let birthday = new Date(getYear() + "-" + villager.birthday)
            let birthM = leadingZeros(birthday.getMonth() + 1);
            let birthD = leadingZeros(birthday.getDate());

            let newD = getYear() + "-" + birthM + "-" + birthD;

            if (curDate == newD) 
            {
                birthdaysVillagers(villager);
            }
        }
    )