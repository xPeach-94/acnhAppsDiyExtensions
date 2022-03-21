let header = document.getElementById("header");

// date and time
let dateTimeContainer = document.createElement("div");
dateTimeContainer.setAttribute("class", "dateTime flexChild");

let date = document.createElement("p");
date.setAttribute("id", "date");

let time = document.createElement("p");
time.setAttribute("id", "time");

dateTimeContainer.appendChild(date);
dateTimeContainer.appendChild(time);


// logo
let logoContainer = document.createElement("div");
logoContainer.setAttribute("class", "logo flexChild");

let logoLink = document.createElement("a");
logoLink.setAttribute("href", "index.html");

let logo = document.createElement("img");
logo.setAttribute("class", "imgLogo");
logo.setAttribute("src", "Images/logo.png");

logoLink.appendChild(logo);
logoContainer.appendChild(logoLink);


// menu
let menuContainer = document.createElement("div");
menuContainer.setAttribute("class", "dropdown flexChild");

let menuButton = document.createElement("button");
menuButton.setAttribute("type", "dropbtn");
menuButton.setAttribute("class", "menu");

for (let i = 0; i < 3; i++) 
{
    let menuBarDiv = document.createElement("div");
    menuBarDiv.setAttribute("class", "dropmenu");
    menuButton.appendChild(menuBarDiv);
}

let menuContent = document.createElement("div");
menuContent.setAttribute("class", "dropdown-content");

let indexLink = document.createElement("a");
indexLink.setAttribute("href", "index.html");
indexLink.innerHTML = "Home";

let diyProfitsLink = document.createElement("a");
diyProfitsLink.setAttribute("href", "DYIProfits.html");
diyProfitsLink.innerHTML = "DIY Profits";

let craftulatorLink = document.createElement("a");
craftulatorLink.setAttribute("href", "Craftulator.html");
craftulatorLink.innerHTML = "Craftulator";

let encyclopedia = document.createElement("a");
encyclopedia.setAttribute("href", "Encyclopedia.html");
encyclopedia.innerHTML = "Encyclopedia";

let calendarLink = document.createElement("a");
calendarLink.setAttribute("href", "Calendar.html");
calendarLink.innerHTML = "Calendar";

let moreWebsitesLink = document.createElement("a");
moreWebsitesLink.setAttribute("href", "MoreWebsites.html");
moreWebsitesLink.innerHTML = "More Websites";

menuContent.appendChild(indexLink);
menuContent.appendChild(diyProfitsLink);
menuContent.appendChild(craftulatorLink);
menuContent.appendChild(encyclopedia);
menuContent.appendChild(calendarLink);
menuContent.appendChild(moreWebsitesLink);

menuContainer.appendChild(menuButton);
menuContainer.appendChild(menuContent);


// displaying all in header
header.appendChild(dateTimeContainer);
header.appendChild(logoContainer);
header.appendChild(menuContainer);


/* <div class="dateTime flexChild">
    <!-- placeholders -->
    <p id="date"></p>
    <p id="time"></p>
</div>
<div class="logo flexChild">
    <a href="index.html">
        <img class="imgLogo" src="Images/logo.png" alt="Logo">
    </a>
</div>

<div class="dropdown flexChild">
    <button type="dropbtn" class="menu">
        <div class="dropmenu"></div>
        <div class="dropmenu"></div>
        <div class="dropmenu"></div>
    </button>
    <div class="dropdown-content">
        <a href="index.html">Home</a>
        <a href="DYIProfits.html">DIY Profits</a>
        <a href="Craftulator.html">Craftulator</a>
        <a href="Calendar.html">Calendar</a>
        <a href="MoreWebsites.html">More Websites</a>
    </div>
</div> */