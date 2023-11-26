// ==UserScript==
// @name         Hide scores
// @version      0.1
// @description  Hide point scores for submissions, whilst still showing pretests 
// @author       You
// @match        https://szkopul.edu.pl/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
const hideCSS=`.siohelper_hidden {
  display: none;
};`;

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
            //Dla tabeli 'PROBLEMS'
            if(elems[i].classList.contains("label")){
              try {
                let a = parseInt(elems[i].textContent);
                if( a >= 0 && a <= 100){
                  elems[i].classList.add("siohelper_hidden");
                }
              } catch (error) {
                // Expected error - non-text value
              }
              
            }
        }
        for (let i=0; i < elems.length; i++){
            if(elems[i].id.includes("score") ){
                //console.log(elems[i]);
                elems[i].classList.add("siohelper_hidden");
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
            if(elems[i].classList.contains("siohelper_hidden")){
              elems[i].classList.remove("siohelper_hidden");
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
      let stl = document.createElement("style");
      stl.textContent = hideCSS;
      let g = document.getElementsByTagName("body")[0]
      g.appendChild(stl);
      //Un-HIDE
      g.removeAttribute("style");
      //Add hiding css
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
  