
(function(){
    
    sioUrls=["*://*.sio2.staszic.waw.pl/*","*://*.sio2.mimuw.edu.pl/*", "*://*.szkopul.edu.pl/*"]
    // For summing the ranking
    function isNumeric(str) {
        if (typeof str != "string") return false // we only process strings!  
        return !isNaN(str) 
    }

    function calcScore(){
        scoreClass="badge"
        if(window.location.href.includes("sio2.staszic")){
            scoreClass="label"
        }

        var a = document.getElementsByClassName(scoreClass); 

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

    browser.runtime.onMessage.addListener((message) => {
        // console.log("Message from the background script:");
        // console.log(message);
        if(message.command != "get_working"){
            return;
        }
        return Promise.resolve( calcScore() );
    });
    

  
})();