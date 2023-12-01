var reps = document.getElementsByClassName("table-report")
var bodies = [];
for(let j = 0; j < reps.length; j++){
	var c = null;
	for(var i = 0; i < reps[j].length; i++){
		if(a[j].children[i].tagName == "TBODY") c = a[j].children[i];
	}
	if(c != null){
		bodies.push(c);
	}
}
//Bodies : ziden
