sioUrls=["*://*.sio2.staszic.waw.pl/*","*://*.sio2.mimuw.edu.pl/*", "*://*.szkopul.edu.pl/*"]

function listener(details) {
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