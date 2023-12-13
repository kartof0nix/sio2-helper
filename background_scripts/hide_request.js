sioUrls=["*://*.sio2.staszic.waw.pl/*","*://*.sio2.mimuw.edu.pl/*", "*://*.szkopul.edu.pl/*"]

function listener(details) {

    //Check if this is a problem statement
    var pts = ["","",""].concat( details.url.split('/'));
    if((pts[pts.length-2] == "p" && pts[pts.length-1] != "")|| pts[pts.length-3] == "p" ){
        //Like "*/p/abc" or "*/p/abc/" 
        console.log("BREAK!");
        return;
    }

    console.log("Site intercepted!");
    let filter = browser.webRequest.filterResponseData(details.requestId);
    let decoder = new TextDecoder("utf-8");
    let encoder = new TextEncoder();
    
    filter.ondata = event => {
        let str = decoder.decode(event.data, {stream: true});
        // Just change any instance of Example in the HTTP response
        // to WebExtension Example.
        str = str.replace("<body", '<body style="display:none"');
        filter.write(encoder.encode(str));
        filter.disconnect();
    }
    
    return {};
}
// console.log("Site NOT intercepted!");

browser.webRequest.onBeforeRequest.addListener(
    listener,
    {urls: sioUrls, types: ["main_frame"]},
    ["blocking"]
    );