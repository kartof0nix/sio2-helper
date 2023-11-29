
var points = -1;

function getPoints(){
    let urlString = window.location.href;
    points=-1;
    console.log("Fuf");
    try{
        let paramString = urlString.split('?')[1];
        let queryString = new URLSearchParams(paramString);
        
        for (let pair of queryString.entries()) {
            if(pair[0] == "points") { points = pair[1]};
        }
    }catch{}
    if(points==-1){
        document.getElementById("error").removeAttribute("style");
        return;
    }
}

async function getSettings() {
    let pre = await browser.storage.local.get("presets");
    return pre["presets"];
}

settings = [];

function start(id){
    window.location.assign("./player.html?id=" +String(id) + "&points=" + points);
}

function newEntry(){
    window.location.assign("./edit.html?id=" + String(settings.length) + "&points=" + points);
}

function editEntry(id){
    window.location.assign("./edit.html?id=" + String(id) + "&points=" + points );
}

async function assignFirstSettings(){
    var a = await fetch("./presets.json") .then((res) => {
        return res.json();
    });
    console.log("Refill");
    settings = a.presets;
    
    browser.storage.local.set({"presets": settings});
}

async function init() {
    settings = await getSettings();
    console.log("settings:");
    console.log(settings);
    // await assignFirstSettings();
    if(settings.length == null || settings.length <= 0)  await assignFirstSettings();
    var listCont = document.getElementById("listContainer");
    for(var i = 0; i < settings.length; i++){
        // console.log(b[i]);
        var d = document.createElement("div");
        var title = document.createElement("div");
        title.setAttribute("class", "button text title");
        title.setAttribute("id", "bt:"+String(settings[i].id));
        // title.setAttribute("onclick", "start()");
        title.innerText = settings[i].title;
        
        var editIcon = document.createElement("i");
        editIcon.setAttribute("class", "material-icons edit");
        editIcon.setAttribute("style", "font-size:36px; color:white");
        editIcon.setAttribute("id", "ic:"+String(settings[i].id));
        editIcon.innerText="edit";

        // title.setAttribute("href", "./reveal.html");
        d.appendChild(title);
        d.appendChild(editIcon);
        listCont.appendChild(d);
    }
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("button")){
        var t = parseInt(e.target.id.split(':')[1]);
        start(t);
        return;
    }
    if (e.target.id=="new"){
        newEntry();
        return;
    }
    if(e.target.classList.contains("edit")){
        var t = parseInt(e.target.id.split(':')[1]);
        editEntry(t);
    }
});

getPoints();
if(points != -1)
    init();