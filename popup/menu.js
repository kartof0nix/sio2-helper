/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
*/

function listenForClicks() {
  
  var sum_results;

  function bytesToBase64(bytes) {
    const binString = String.fromCodePoint(...bytes);
    return btoa(binString);
  }
  
  /**
   * Send a "hide_scores" message to the content script in the active tab.
   */
  function hidePoints(tabs) {
    browser.tabs.sendMessage(tabs[0].id, {
      command: "hide_scores",
    }).catch(reportExecuteScriptError);
  }

  /**
   * Send a "reset" message to the content script in the active tab.
  */
 function reset(tabs) {
   browser.tabs.sendMessage(tabs[0].id, {
     command: "reset",
    }).catch(reportExecuteScriptError);
  }
  
  /**
   * Remember the scores and update their count 
   */
  function capture_scores(result){
    //Write how many points are available
    var p = document.getElementById("pAvailable");
    p.innerText = "Results availabe: " + String(result.ile);
    if(result.ile > 0){
      //Activate button
      var bt = document.getElementById("btReveal");
      bt.setAttribute("class", "button beast");
    }
    sum_results = result;
  }

  /**
   * Send a "get_scores" message to the content script and remember the result
  */
 function getAvailableScores(tabs){
    browser.tabs.sendMessage(tabs[0].id, {
      command: "get_scores",
    }).then(capture_scores)
    .catch(reportExecuteScriptError);
  }

  document.addEventListener("click", (e) => {
    /**
     * Get the active tab,
     * then call "hidePoints()" or "reset()" as appropriate.
     */
    if (e.target.id == "hide_scores"){
      if(e.target.checked){
        browser.tabs.query({active: true, currentWindow: true})
        .then(hidePoints)
        .catch(reportExecuteScriptError);
      }
      else{
        browser.tabs.query({active: true, currentWindow: true})
        .then(reset)
        .catch(reportExecuteScriptError);
      }
    }
    else if(e.target.id == "btReveal" && sum_results.ile > 0){
      pts = bytesToBase64(new TextEncoder().encode(String(points)));
      browser.tabs.create({active:true, url : ("../home/main.html?points="+pts)});
    }
    else if(e.target.classList.contains("bt_sum_ranking")){
      browser.tabs.executeScript({file: "/content_scripts/ranking_sums.js"});
    }
  });

  //Execute get_scores script
  browser.tabs.query({active: true, currentWindow: true})
  .then(getAvailableScores)
  .catch(reportExecuteScriptError);
}

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

setSlider();

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */

browser.tabs.executeScript({file: "/content_scripts/scores.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);


