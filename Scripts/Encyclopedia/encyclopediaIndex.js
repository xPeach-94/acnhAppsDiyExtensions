const index = function()
{
    let index = document.createElement("table");
    index.setAttribute("style", "height: 100%");

    if (pageNr >= 1 && pageNr <= 4) // bugs
    {
        let tr = document.createElement("tr");

        bugArr.forEach
        (
            function (bug)
            {
                if (bug.index >= 1 && bug.index<= 20 && pageNr == 1) 
                {
                    let td = document.createElement("td");
                    let bugBtn = document.createElement("button");
                    bugBtn.setAttribute("style", "background-color: transparent; border: none;");
                    bugBtn.setAttribute("value", bug.index + 10);
                    bugBtn.setAttribute("onClick", "btnPress(this)");

                    let bugIco = document.createElement("img");
                    
                    bugIco.setAttribute("src", bug.icon);
                    bugIco.setAttribute("style", "width:100%;");
                    
                    bugBtn.appendChild(bugIco);
                    td.appendChild(bugBtn);
                    tr.appendChild(td);

                    if (bug.index % 4 == 0 && bug.index != 20) 
                    {
                        tr = document.createElement("tr");
                    }

                    index.appendChild(tr);
                }
                else if (bug.index > 20 && bug.index <= 40 && pageNr == 2) 
                {
                    let td = document.createElement("td");
                    let bugBtn = document.createElement("button");
                    bugBtn.setAttribute("style", "background-color: transparent; border: none;");
                    bugBtn.setAttribute("value", bug.index + 10);
                    bugBtn.setAttribute("onClick", "btnPress(this)");

                    let bugIco = document.createElement("img");
                    
                    bugIco.setAttribute("src", bug.icon);
                    bugIco.setAttribute("style", "width:100%;");
                    
                    bugBtn.appendChild(bugIco);
                    td.appendChild(bugBtn);
                    tr.appendChild(td);
                    if (bug.index % 4 == 0 && bug.index != 40) 
                    {
                        tr = document.createElement("tr");
                    }

                    index.appendChild(tr);
                }
                else if (bug.index > 40 && bug.index <= 60 && pageNr == 3) 
                {
                    let td = document.createElement("td");
                    let bugBtn = document.createElement("button");
                    bugBtn.setAttribute("style", "background-color: transparent; border: none;");
                    bugBtn.setAttribute("value", bug.index + 10);
                    bugBtn.setAttribute("onClick", "btnPress(this)");

                    let bugIco = document.createElement("img");
                    
                    bugIco.setAttribute("src", bug.icon);
                    bugIco.setAttribute("style", "width:100%;");
                    
                    bugBtn.appendChild(bugIco);
                    td.appendChild(bugBtn);
                    tr.appendChild(td);
                    if (bug.index % 4 == 0 && bug.index != 60) 
                    {
                        tr = document.createElement("tr"); 
                    }

                    index.appendChild(tr);
                }
                else if (bug.index > 60 && bug.index <= 80 && pageNr == 4) 
                {
                    let td = document.createElement("td");
                    let bugBtn = document.createElement("button");
                    bugBtn.setAttribute("style", "background-color: transparent; border: none;");
                    bugBtn.setAttribute("value", bug.index + 10);
                    bugBtn.setAttribute("onClick", "btnPress(this)");

                    let bugIco = document.createElement("img");
                    
                    bugIco.setAttribute("src", bug.icon);
                    bugIco.setAttribute("style", "width:100%;");
                    
                    bugBtn.appendChild(bugIco);
                    td.appendChild(bugBtn);
                    tr.appendChild(td);
                    if (bug.index % 4 == 0 && bug.index != 80) 
                    {
                        tr = document.createElement("tr"); 
                    }

                    index.appendChild(tr);
                }
            }
        )
    }
    else if (pageNr >= 5 && pageNr <= 8) // fish
    {
        let tr = document.createElement("tr");

        fishArr.forEach
        (
            function (fish)
            {
                if (fish.index >= 1 && fish.index<= 20 && pageNr == 5) 
                {
                    let td = document.createElement("td");
                    let fishBtn = document.createElement("button");
                    fishBtn.setAttribute("style", "background-color: transparent; border: none;");
                    fishBtn.setAttribute("value", fish.index + 90);
                    fishBtn.setAttribute("onClick", "btnPress(this)");

                    let fishIco = document.createElement("img");
                    
                    fishIco.setAttribute("src", fish.icon);
                    fishIco.setAttribute("style", "width:100%;");
                    
                    fishBtn.appendChild(fishIco);
                    td.appendChild(fishBtn);
                    tr.appendChild(td);
                    if (fish.index % 4 == 0) 
                    {
                        tr = document.createElement("tr"); 
                    }

                    index.appendChild(tr);
                }
                else if (fish.index > 20 && fish.index <= 40 && pageNr == 6) 
                {
                    let td = document.createElement("td");
                    let fishBtn = document.createElement("button");
                    fishBtn.setAttribute("style", "background-color: transparent; border: none;");
                    fishBtn.setAttribute("value", fish.index + 90);
                    fishBtn.setAttribute("onClick", "btnPress(this)");

                    let fishIco = document.createElement("img");
                    
                    fishIco.setAttribute("src", fish.icon);
                    fishIco.setAttribute("style", "width:100%;");
                    
                    fishBtn.appendChild(fishIco);
                    td.appendChild(fishBtn);
                    tr.appendChild(td);
                    if (fish.index % 4 == 0) 
                    {
                        tr = document.createElement("tr"); 
                    }

                    index.appendChild(tr);
                }
                else if (fish.index > 40 && fish.index <= 60 && pageNr == 7) 
                {
                    let td = document.createElement("td");
                    let fishBtn = document.createElement("button");
                    fishBtn.setAttribute("style", "background-color: transparent; border: none;");
                    fishBtn.setAttribute("value", fish.index + 90);
                    fishBtn.setAttribute("onClick", "btnPress(this)");

                    let fishIco = document.createElement("img");
                    
                    fishIco.setAttribute("src", fish.icon);
                    fishIco.setAttribute("style", "width:100%;");
                    
                    fishBtn.appendChild(fishIco);
                    td.appendChild(fishBtn);
                    tr.appendChild(td);
                    if (fish.index % 4 == 0) 
                    {
                        tr = document.createElement("tr"); 
                    }

                    index.appendChild(tr);
                }
                else if (fish.index > 60 && fish.index <= 80 && pageNr == 8) 
                {
                    let td = document.createElement("td");
                    let fishBtn = document.createElement("button");
                    fishBtn.setAttribute("style", "background-color: transparent; border: none;");
                    fishBtn.setAttribute("value", fish.index + 90);
                    fishBtn.setAttribute("onClick", "btnPress(this)");

                    let fishIco = document.createElement("img");
                    
                    fishIco.setAttribute("src", fish.icon);
                    fishIco.setAttribute("style", "width:100%;");
                    
                    fishBtn.appendChild(fishIco);
                    td.appendChild(fishBtn);
                    tr.appendChild(td);
                    if (fish.index % 4 == 0) 
                    {
                        tr = document.createElement("tr"); 
                    }

                    index.appendChild(tr);
                }
            }
        )
    }
    else if (pageNr >= 8 && pageNr <= 10) //diving
    {
        let tr = document.createElement("tr");

        divingArr.forEach
        (
            function (dive)
            {
                if (dive.index >= 1 && dive.index<= 20 && pageNr == 9) 
                {
                    let td = document.createElement("td");
                    let diveBtn = document.createElement("button");
                    diveBtn.setAttribute("style", "background-color: transparent; border: none;");
                    diveBtn.setAttribute("value", dive.index + 170);
                    diveBtn.setAttribute("onClick", "btnPress(this)");

                    let diveIco = document.createElement("img");
                    
                    diveIco.setAttribute("src", dive.icon);
                    diveIco.setAttribute("style", "width:100%;");
                    
                    diveBtn.appendChild(diveIco);
                    td.appendChild(diveBtn);
                    tr.appendChild(td);
                    if (dive.index % 4 == 0) 
                    {
                        tr = document.createElement("tr"); 
                    }
                    index.appendChild(tr);
                }
                else if (dive.index > 20 && dive.index <= 40 && pageNr == 10) 
                {
                    let td = document.createElement("td");
                    let diveBtn = document.createElement("button");
                    diveBtn.setAttribute("style", "background-color: transparent; border: none;");
                    diveBtn.setAttribute("value", dive.index + 170);
                    diveBtn.setAttribute("onClick", "btnPress(this)");

                    let diveIco = document.createElement("img");
                    
                    diveIco.setAttribute("src", dive.icon);
                    diveIco.setAttribute("style", "width:100%;");
                    
                    diveBtn.appendChild(diveIco);
                    td.appendChild(diveBtn);
                    tr.appendChild(td);
                    if (dive.index % 4 == 0) 
                    {
                        tr = document.createElement("tr"); 
                    }

                    index.appendChild(tr);
                }
            }
        )
    }

    book.appendChild(index);
}