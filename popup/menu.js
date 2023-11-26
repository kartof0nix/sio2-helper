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
      {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "hide_scores",
        });
      }
    }

    /**
     * Remove the page-hiding CSS from the active tab,
     * send a "reset" message to the content script in the active tab.
     */
    function reset(tabs) {
      {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "reset",
        });
      }
    }

    /**
     * Just log the error to the console.
     */
    function reportError(error) {
      console.error(`Could not hidePoints: ${error}`);
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
  });
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

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
// browser.tabs.executeScript({file: "/content_scripts/beastify.js"})
// .then(listenForClicks());
setSlider();
browser.tabs.executeScript({file: "/content_scripts/hide_scores.js"})
.then(listenForClicks());
