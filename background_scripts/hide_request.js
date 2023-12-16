sioUrls=["*://*.sio2.staszic.waw.pl/*","*://*.sio2.mimuw.edu.pl/*", "*://*.szkopul.edu.pl/*"]

function listener(details) {

    console.log("Site intercepted!");
    let filter = browser.webRequest.filterResponseData(details.requestId);
    let decoder = new TextDecoder("utf-8");
    let encoder = new TextEncoder();
    
    filter.ondata = event => {
        let str = decoder.decode(event.data, {stream: true});
        // console.log(str);
        //Check if this is a HTML file
        if(str.includes("<!DOCTYPE html>")){
            // Just hide the body component
            console.log("Replacing...");
            str = str.replace("<body", '<body style="display:none"');
            filter.write(encoder.encode(str));
            filter.disconnect();
        }
        else{
            //Return EXACTLY the same data
            filter.write(event.data);
            filter.disconnect();
        }
        return;
    }
    
    return {};
}
// console.log("Site NOT intercepted!");

browser.webRequest.onBeforeRequest.addListener(
    listener,
    {urls: sioUrls, types: ["main_frame"]},
    ["blocking"]
    );