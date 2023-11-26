// ==UserScript==
// @name         Hide scores
// @version      0.1
// @description  Hide point scores for submissions, whilst still showing pretests 
// @author       You
// @match        https://szkopul.edu.pl/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
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
  
    
  
   function hideScores() {
        var elems = document.body.getElementsByTagName("*");
        for (let i=0; i < elems.length; i++){
            if(elems[i].id.includes("submission") ){
                //console.log(elems[i]);
                elems[i].style="background: #ffffff;" ;
            }
        }
        for (let i=0; i < elems.length; i++){
            if(elems[i].id.includes("score") ){
                //console.log(elems[i]);
                elems[i].style="display:none" ;
            }
        }
    }
    
    function hideScoresCall(){
        hideScores();
        browser.storage.local.set({"Hidden":true});
    }
    function showScores(){
        // browser.tabs.removeCSS({code: hidePage})
        var elems = document.body.getElementsByTagName("*");
        for (let i=0; i < elems.length; i++){
            if(elems[i].id.includes("submission") ){
                //console.log(elems[i]);
                elems[i].removeAttribute("style");
            }
        }

    }
    function showScoresCall() {
      browser.storage.local.set({"Hidden":false});
      showScores();
    }
  
    async function init(){
      let a = await browser.storage.local.get("Hidden");
      console.log(a);
      if(a["Hidden"]){
        hideScores();
      }
      //Un-HIDE
      let g = document.getElementsByTagName("body")[0]
      g.removeAttribute("style");
    }
  
    /**
     * Listen for messages from the background script.
     * Call "beastify()" or "reset()".
    */
    
    browser.runtime.onMessage.addListener((message) => {
      if (message.command == "hide_scores") {
        hideScoresCall();
        
      } else if (message.command == "reset") {
        showScoresCall();
      }
    });
    init();
  
  
})();
  