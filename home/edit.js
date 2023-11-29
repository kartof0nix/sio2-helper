function getArgs(){
    let urlString = window.location.href;
    id=-1;
    points = -1;
    try{
        let paramString = urlString.split('?')[1];
        let queryString = new URLSearchParams(paramString);
        
        for (let pair of queryString.entries()) {
            if(pair[0] == "id") { id = pair[1]};
            if(pair[0] == "points") { points = pair[1]};
        }
    }catch{}
    return [id, points];
}

async function getSettings(id) {
    var pre = await browser.storage.local.get("presets");
    pre=pre.presets;
    if(pre == null){
        return null
    }
    if(id >= pre.length ) return null
    return pre[id];
}

var id, points;

async function init(){
    a = getArgs();
    id = a[0], points = a[1];
    if(id == -1){
        document.getElementById("error").removeAttribute("style");
        return;
    }
    settings = await getSettings(id);
    console.log(settings);
    if(settings == null) return
    document.getElementById("vuid").value = settings.vuid;
    document.getElementById("title").value = settings.title;
    document.getElementById("start").value = settings.start;
    document.getElementById("ppMs").value = settings.ppMs;
    document.getElementById("comment").value = settings.comment;
    
}

async function submit(){
    settings = {id: id};
    settings.vuid    = document.getElementById("vuid").value;
    settings.title   = document.getElementById("title").value ;
    settings.start   = document.getElementById("start").value ;
    settings.ppMs    = document.getElementById("ppMs").value;
    settings.comment = document.getElementById("comment").value ;
    let pre = await browser.storage.local.get("presets");
    pre = pre.presets
    if(pre.length == null) pre = []
    if(id == pre.length ) pre.push(settings);
    else{
        pre[id] = settings;
    }
    console.log(pre);
    await browser.storage.local.set({"presets": pre});
    window.location.assign("./main.html?points=" + points);
}

async function del(id){
    let pre = await browser.storage.local.get("presets");
    pre = pre.presets
    if (pre == null || id >= pre.length ) return null
    n_pre=[]
    for(var i = 0; i < pre.length; i++){
        if(pre[i].id != id)
            n_pre.push(pre[i]);
    }
    for(var i = 0; i < n_pre.length; i++){
        n_pre[i].id=i;
    }
    await browser.storage.local.set({"presets": n_pre});
    
    window.location.assign("./main.html?points=" + points);
    
}


init();

document.addEventListener("click", (e) => {
    if (e.target.id == "save"){
        submit();
    }
    if (e.target.id=="delete"){
        del(id);
        return;
    }
});
