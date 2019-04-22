
class thug {
    constructor(name, picture, clicks = 0) {
       this.name = name;
       this.picture = picture;
       this.clicks = clicks;
    }
}
    const thug1 = new thug("Thug N Sway", "img/thug0.jpg");
    const thug2 = new thug("Thug Grunt", "img/thug1.jpg");
    const thug3 = new thug("Thug-Maid", "img/thug2.jpg");
    const thug4 = new thug("Thug Smirk", "img/thug3.jpg");
    const thug5 = new thug("Thug N office", "img/thug4.jpg");
        
    // list of all thugnifecents
const thugnifecents = [thug1, thug2, thug3, thug4, thug5];

    //thug list

    // select left column in dom
const leftColumn = document.querySelector(".col-4");

    //construct thug list
const ul = document.createElement("ul");
ul.className = "list-group"

for(let thug of thugnifecents) {
    const li = document.createElement("li");
    li.className = "list-group-item"
    li.textContent = thug.name;
    ul.appendChild(li);
}

leftColumn.appendChild(ul);

/* single cat code
// button click for photo 2
let i = 0;
    function buttonClick() {
        document.getElementById('inc').value = ++i;
    }
// button click for photo 2 
    let t = 0;
    function buttonClick2() {
        document.getElementById('link').value = ++t;
    }

    let  myObject = {
        name:  'Thugnifecent n\' Sway' 
        
      };
*/

   /* const thug1Container = document.querySelector("#thug-1");
    const thug2Container = document.querySelector("#thug-2");
    const thug3Container = document.querySelector("#thug-3");
    const thug4Container = document.querySelector("#thug-4");
    const thug5Container = document.querySelector("#thug-5");


    // add thug name
    const thug1Name = document.createElement("h1");
    thug1Name.textContent = thug1.name;
    thug1Container.appendChild(thug1Name);
    
    const thug2Name = document.createElement("h1");
    thug2Name.textContent = thug2.name;
    thug2Container.appendChild(thug2Name);

    const thug3Name = document.createElement("h1");
    thug3Name.textContent = thug3.name;
    thug3Container.appendChild(thug3Name);

    const thug4Name = document.createElement("h1");
    thug4Name.textContent = thug4.name;
    thug4Container.appendChild(thug4Name);

    const thug5Name = document.createElement("h1");
    thug5Name.textContent = thug5.name;
    thug5Container.appendChild(thug5Name);

    //add thug image
    const thug1Image = document.createElement("img");
    thug1Image.setAttribute("src", thug1.picture);
    thug1Image.setAttribute("alt", "picture of thug");
    thug1Container.appendChild(thug1Image);

    const thug2Image = document.createElement("img");
    thug2Image.setAttribute("src", thug2.picture);
    thug2Image.setAttribute("alt", "picture of thug");
    thug2Container.appendChild(thug2Image);

    const thug3Image = document.createElement("img");
    thug3Image.setAttribute("src", thug3.picture);
    thug3Image.setAttribute("alt", "picture of thug");
    thug3Container.appendChild(thug3Image);

    const thug4Image = document.createElement("img");
    thug4Image.setAttribute("src", thug4.picture);
    thug4Image.setAttribute("alt", "picture of thug");
    thug4Container.appendChild(thug4Image);

    const thug5Image = document.createElement("img");
    thug5Image.setAttribute("src", thug5.picture);
    thug5Image.setAttribute("alt", "picture of thug");
    thug5Container.appendChild(thug5Image);

    //add thug counters
    const thug1Counter = document.createElement("h1");
    thug1Counter.textContent = `Clicks: ${thug1.clicks}`;
    thug1Container.appendChild(thug1Counter);

    const thug2Counter = document.createElement("h1");
    thug2Counter.textContent = `Clicks: ${thug2.clicks}`;
    thug2Container.appendChild(thug2Counter);

    const thug3Counter = document.createElement("h1");
    thug3Counter.textContent = `Clicks: ${thug3.clicks}`;
    thug3Container.appendChild(thug3Counter);

    const thug4Counter = document.createElement("h1");
    thug4Counter.textContent = `Clicks: ${thug4.clicks}`;
    thug4Container.appendChild(thug4Counter);

    const thug5Counter = document.createElement("h1");
    thug5Counter.textContent = `Clicks: ${thug5.clicks}`;
    thug5Container.appendChild(thug5Counter);

    //add thug image event listners
    thug1Image.addEventListener("click", ()=>{
        thug1.clicks++;
        thug1Counter.textContent = `cClicks: ${thug1.clicks}`;
    })

    thug2Image.addEventListener("click", ()=>{
        thug2.clicks++;
        thug2Counter.textContent = `Clicks: ${thug2.clicks}`;
    })

    thug3Image.addEventListener("click", ()=>{
        thug3.clicks++;
        thug3Counter.textContent = `Clicks: ${thug3.clicks}`;
    })

    thug4Image.addEventListener("click", ()=>{
        thug4.clicks++;
        thug4Counter.textContent = `Clicks: ${thug4.clicks}`;
    })

    thug5Image.addEventListener("click", ()=>{
        thug5.clicks++;
        thug5Counter.textContent = `Clicks: ${thug5.clicks}`;
    })
    */