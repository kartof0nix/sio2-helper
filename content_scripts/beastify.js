(function() {

  /**
   * CSS to hide everything on the page,
   * except for elements that have the "beastify-image" class.
   */
  const hidePage = `body > :not(.beastify-image) {
    display: none;
  }`;

  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  
  /**
   * Given a URL to a beast image, remove all existing beasts, then
   * create and style an IMG node pointing to
   * that image, then insert the node into the document.
  */
  function removeStyles(){
    var currentStyles = document.getElementById(".beastify-styles");
    if(currentStyles== null) return;
    currentStyles.remove();
  }

  function appendStyles(){
    var currentStyles = document.getElementById(".beastify-styles");
    if(currentStyles!= null) return;

    var customStyles = document.createElement('style'); 
    customStyles.innerHTML = hidePage;
    customStyles.setAttribute("id", ".beastify-styles")
    // document.documentElement.insertBefore(customStyles); 
    document.body.appendChild(customStyles);
  }

 function insertBeast(beastURL) {
  appendStyles();
   removeExistingBeasts();
  //  browser.tabs.insertCSS({code: hidePage});

   let beastImage = document.createElement("img");
   beastImage.setAttribute("src", beastURL);
   beastImage.style.height = "100vh";
   beastImage.className = "beastify-image";
   document.body.appendChild(beastImage);
  }

  function insertBeastCall(beastURL){
    insertBeast(beastURL);
    browser.storage.local.set({"State":"Beasted"});
    browser.storage.local.set({"beastURL" : beastURL});
  }
  /**
   * Remove every beast from the page.
  */
 function removeExistingBeasts() 
 {
   let existingBeasts = document.querySelectorAll(".beastify-image");
   for (let beast of existingBeasts) {
     beast.remove();
    }
  }
  function unBeastify(){
    // browser.tabs.removeCSS({code: hidePage})
    removeStyles();
    removeExistingBeasts();
  }
  function unBeastifyCall() {
    browser.storage.local.set({"State":"Off"});
    unBeastify();
  }

  async function init(){
    let a = await browser.storage.local.get("State");
    console.log(a);
    if(a["State"] == "Beasted"){
      let beastUrl = await browser.storage.local.get("beastURL");
      let c = beastUrl["beastURL"]
      console.log(c);
      insertBeastCall(c);
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
    // console.log(message.command);
    if (message.command === "beastify") {
      insertBeastCall(message.beastURL);
      
    } else if (message.command === "reset") {
      unBeastifyCall();
    }
  });
  init();


})();
