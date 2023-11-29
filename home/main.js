
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

function start(id){
    window.location.assign("./player.html?id=" +String(id) + "&points=" + points);
}

async function Fetch() {
    var a = await fetch("./presets.json") .then((res) => {
        return res.json();
    });
    console.log("BAKA!");
    var pre = a["presets"];
    var listCont = document.getElementById("listContainer");
    for(var i = 0; i < pre.length; i++){
        // console.log(b[i]);
        var d = document.createElement("div");
        var title = document.createElement("div");
        title.setAttribute("class", "button text title");
        title.setAttribute("id", "bt:"+String(pre[i].id));
        // title.setAttribute("onclick", "start()");
        title.innerText = pre[i].title;

        var editIcon = document.createElement("i");
        editIcon.setAttribute("class", "material-icons edit");
        editIcon.setAttribute("style", "font-size:36px; color:white");
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
        console.log("Start " + String(t));
        console.log(t);
        start(t);
    }
});

console.log("SUU");
getPoints();
console.log("SSYY");
if(points != -1)
    Fetch();