/**
   * CSS to hide everything on the page,
   * except for elements that have the "beastify-image" class.
   */
// const hidePage = `body > :not(.beastify-image) {
//   display: none;
// }`;

/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */


function listenForClicks() {
  
  document.addEventListener("click", (e) => {
    
    /**
     * Given the name of a beast, get the URL to the corresponding image.
     */
    /**
     * Insert the page-hiding CSS into the active tab,
     * then get the beast URL and
     * send a "beastify" message to the content script in the active tab.
     */
    function hidePoints(tabs) {
      browser.tabs.sendMessage(tabs[0].id, {
        command: "hide_scores",
      }).catch(reportError);
    }
    
    /**
     * Remove the page-hiding CSS from the active tab,
     * send a "reset" message to the content script in the active tab.
     */
    function reset(tabs) {
      browser.tabs.sendMessage(tabs[0].id, {
        command: "reset",
      }).catch(reportError);
    }

    /**
     * Just log the error to the console.
     */
    function reportError(error) {
      console.error(`Could not hidePoints: ${error}`);
      reportExecuteScriptError(error);
    }

    /**
     * Get the active tab,
     * then call "hidePoints()" or "reset()" as appropriate.
     */
    // console.log(e.target.id == "hide_scores");
    if (e.target.id == "hide_scores"){
      if(e.target.checked){
        browser.tabs.query({active: true, currentWindow: true})
        .then(hidePoints)
        .catch(reportError);
      }
      else {
        browser.tabs.query({active: true, currentWindow: true})
        .then(reset)
        .catch(reportError);
      }
    }
    if(e.target.classList.contains("bt_sum_ranking")){
      browser.tabs.executeScript({file: "/content_scripts/ranking_sums.js"});
    }
  });
}

var points = 0;

async function listenForReveal() {

  function activate(result){
    console.log(result);
    var p = document.getElementById("pAvailable");
    p.innerText = "Results availabe: " + String(result.ile);

    if(result.ile > 0){
      var bt = document.getElementById("btReveal");
      bt.setAttribute("class", "button beast");
      points = result.res;
      document.addEventListener("click", (e) => {
        if (e.target.id == "btReveal"){
          pts = bytesToBase64(new TextEncoder().encode(String(points)));
          
          browser.tabs.create({active:true, url : ("../home/main.html?points="+pts)});
        }
      });
      // bt.setAttribute("onclick", "reveal(" + String(result.res) +")");
    }
    else{
      p.innerText += "\n\nResults are only available on 'Problems' subpage."
    }
  }

  function order(tabs) {
    browser.tabs.sendMessage(tabs[0].id, {
      command: "get_working",
    }).then(activate)
    .catch(reportError);
  }

  /**
     * Just log the error to the console.
     */
  function reportError(error) {
    console.error(`Could not ScoreCount: ${error}`);
    reportExecuteScriptError(error);
  }

  await browser.tabs.query({active: true, currentWindow: true})
  .then(order)
  .catch(reportError);

  

}
    // document.addEventListener("click", (e) => {
      // if (e.target.id == "hide_scores"){


/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
*/

function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Failed to execute hide-scores content script: ${error.message}`);
}

async function setSlider(){
  let a = await browser.storage.local.get("Hidden");
  console.log(a);
  if(a["Hidden"]){
    let s = document.getElementById("hide_scores");
    s.checked=1;
  }
}

function bytesToBase64(bytes) {
  const binString = String.fromCodePoint(...bytes);
  return btoa(binString);
}

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
// browser.tabs.executeScript({file: "/content_scripts/beastify.js"})
// .then(listenForClicks());
// if(window.)
setSlider();
browser.tabs.executeScript({file: "/content_scripts/hide_scores.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);

browser.tabs.executeScript({file: "/content_scripts/score_count.js"})
.then(listenForReveal)
.catch(reportExecuteScriptError);


