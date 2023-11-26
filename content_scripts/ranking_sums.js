
(function(){
    if (window.rankingHasRun) {
        return;
    }
    window.rankingHasRun = true;
    
    async function a(){
        let doColor = 1;

        a = document.getElementsByClassName("ranking")
        tab = a[0]
        b = tab.getElementsByTagName("tbody")[0]
        c = b.getElementsByTagName("tr")

        r=[];

        for(let i = 0; i < c.length; i++){
        d = c[i].getElementsByTagName("td");

        for(let j = 0; j < d.length; j++){
            if(j >= r.length){
                r.push(0);
            }
            if(d[j].className.includes("score") || d[j].className.includes("summary")){
                if(d[j].textContent != ""){
                    r[j] += parseInt(d[j].textContent);
                }
            }
        }
        }

        let mx = 0;
        for(let i = 2; i < r.length - 1; i++){
        if(r[i] > mx) mx = r[i];
        }

        d = document.createElement("tr")
        d.setAttribute("class", "medal-none")
        d.setAttribute("style", "border-top:2px solid #666666")

        //First two elements
        e = document.createElement("td")
        e.textContent="∑"
        d.appendChild(e)

        function getColor(value){
            //value from 0 to 1
            var hue=((1-value)*120).toString(10);
            return ["hsl(",hue,",100%,80%)"].join("");
        }


        for(let i = 1; i < r.length; i++){
        e = document.createElement("td")
        // e.setAttribute("class", "r row_summary")
        e.textContent=r[i]
        // if(r[i] == 0)
            // e.textContent="-"
        if(doColor && i != r.length - 1){
            e.style.backgroundColor = getColor( 1 - (r[i] / mx));
        }
        d.appendChild(e)
        }
        tab.appendChild(d)
    }
    // console.log("Summing ranking!");
    try{
        a();
    }
    catch(error){
        console.log("Can't summarize ranking!");
        console.log(error);
    }

  
})();