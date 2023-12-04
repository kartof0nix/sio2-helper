// ==UserScript==
// @name         Hide scores
// @description  Hide point scores for submissions, whilst still showing pretests 
// ==/UserScript==



(function() {
  
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
  */
 if (window.hasRun) {
   return;
  }
  window.hasRun = true;
  
  const sioUrls=["*://*.sio2.staszic.waw.pl/*","*://*.sio2.mimuw.edu.pl/*", "*://*.szkopul.edu.pl/*"]
  const labelUrls=["sio2.staszic.waw.pl"]

  const hideCSS=`.siohelper_hidden {
    display: none;
  };`;
  
  function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) 
  }

  function getScoreBadges(){
    var badgeClass="badge";
    for(var url of labelUrls){
      if(window.location.href.includes(url))
        badgeClass="label"
    }
    var elems = document.getElementsByClassName(badgeClass); 
    var ret=[];
    for (let elem of elems){
      if(isNumeric(elem.textContent)){
        ret.push(elem);
      }
    }
    return ret;
  }

  function hideScoreBadges() {
    var badges = getScoreBadges();
    for(var badge of badges){
      badge.classList.add("siohelper_hidden");
    }
  }

  function hideScoreResults() {
    var elems = document.body.getElementsByTagName("*");
    for (let elem of elems){
      if(elem.id.includes("submission") ){
        elem.style="background: #ffffff;" ;
      }
      if(elem.id.includes("score") ){
        elem.classList.add("siohelper_hidden");
      }
    }
  }
        
  function hideScoresCall(){
    hideScoreBadges();
    hideScoreResults();
    browser.storage.local.set({"Hidden":true});
  }

  function showScores(){
    // browser.tabs.removeCSS({code: hidePage})
    
    elems[i].classList.add("siohelper_hidden");
    var elems = document.body.getElementsByTagName("*");
    for (let elem of elems){
      if(elem.id.includes("submission") ){
        //console.log(elems[i]);
        elem.removeAttribute("style");
      }
      if(elem.classList.contains("siohelper_hidden")){
        elem.classList.remove("siohelper_hidden");
      }
    }
  }
  function showScoresCall() {
    browser.storage.local.set({"Hidden":false});
    showScores();
  }

  function calcScore(){
    var a = getScoreBadges();
    res=0;
    ile=0;

    for(var i = 0; i < a.length; i++){
      var ter = a[i].textContent;
      if(isNumeric(ter)){
          res += parseInt(ter);
          ile += 1;
        }
    }
    return {"ile" : ile, "res" : res};
  }

  async function init(){
    let a = await browser.storage.local.get("Hidden");
    // console.log("Initiat");
    if(a["Hidden"]){
      hideScoresCall();
    }
    let stl = document.createElement("style");
    stl.textContent = hideCSS;
    let g = document.getElementsByTagName("body")[0]
    //Add hiding css
    g.appendChild(stl);
    //Un-HIDE the body
    g.removeAttribute("style");
  }
  
  // console.log("Andrey");

  browser.runtime.onMessage.addListener((message) => {
    if (message.command == "hide_scores") {
      return hideScoresCall();
      
    } else if (message.command == "reset") {
      return showScoresCall();
    }
    else if(message.command == "get_scores"){
      return Promise.resolve( calcScore() );
    }
  });

  init();

  
})();
  