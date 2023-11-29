function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

async function Fetch(id) {
  var a = await fetch("./presets.json") .then((res) => {
    return res.json();
  });
  var pre = a["presets"];
  for(var i = 0; i < pre.length; i++){
    if(pre[i].id == id){
      return pre[i];
    }
  }
  return null;
}
var params;
var points;

var safety_cushion=3000;

var player;


var state = 0; // 0 - Before closing rec., 1- playing; 2 - ended
var st = 0;
var mid = 0;
var end = 0;
var plannedEnd=0;

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  
  player = new YT.Player('player', {
    height: window.innerHeight-50,
    width: window.innerWidth,
    videoId: params.vuid,
    playerVars: {
      'playsinline': 1,
      "controls": 0,
      "disablekb": 1,
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}


// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
  // console.log(event.data);
  if (event.data == YT.PlayerState.PLAYING) {
    if(state==0){
      st=Date.now();
      startPauseVideo();
      state=1;
    }
    else if(state==1){
      var ms = points / params.ppMs + params.start;
      console.log(ms);
      mid=Date.now();
      // const now = Date.now();
      plannedEnd=mid + ms;
      setTimeout(endVideo, ms - safety_cushion);
      state=2;
      var p = document.getElementById("info");
      p.innerText=params.comment;
      var bt = document.getElementById("rec_conf");
      bt.setAttribute("style", "display:none");
      // p.setAttribute("style", "display:none");
    }
    else{
      setTimeout(endVideo, 0);
    }
  }
}

var done = 0;
//6. This finction will be called to stop the video at the beninging to allow the user to close reccomended videos
function startPauseVideo() {
  player.pauseVideo();
  end=Date.now();
  var p = document.getElementById("info");
  p.innerText="↑It is recommended that you close recommended videos before starting↑ ";
  console.log("Time : " + String(end-st));
}
//7. This finction well be called when the video has reached the score goal
function endVideo(){
  
  end=Date.now();
  while(end < plannedEnd)
  end=Date.now();
  player.pauseVideo();
  console.log("Time : " + String(end-mid));
  var p = document.getElementById("info");
  p.innerText="Congrats! You got " + String(points) + " points!";
}


async function loadVideo(){
  //Find the id of template
  let urlString = window.location.href;
  let id = -1;
  points=-1;
  try{
    let paramString = urlString.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    
    for (let pair of queryString.entries()) {
      if(pair[0] == "id") { id = parseInt(pair[1])};
      if(pair[0] == "points") { points = pair[1]};
    }
  }catch{}
  if(id==-1 || points==-1){
    document.getElementById("error").removeAttribute("style");
    return;
  }
  console.log("Points : ");
  console.log(points);
  // console.log("Fuff");
  try{
    points = parseInt(new TextDecoder().decode(base64ToBytes(points)));
    params = await Fetch(id);
  }
  catch{
    document.getElementById("error").innerText = document.getElementById("error").innerText + ". Error:failed_to_fetch_parameters";
    document.getElementById("error").removeAttribute("style");
    return;
  }
  console.log(params);
  
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  
  tag.src = "./iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
loadVideo();
document.addEventListener("click", (e) => {
  if (e.target.id=="rec_conf"){
      player.playVideo();
  }
});