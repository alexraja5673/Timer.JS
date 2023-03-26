function clock(){
	var a=new Date();
	document.getElementById("time").innerHTML=a.toLocaleTimeString();
}
 const x=setInterval("clock(),1000");
		

function msg(){
	var b=document.getElementById("click");
	b.innerHTML="Hello";
}

// function clock1(){
	// var c=new Date();
	// document.getElementById("timer").innerHTML=c.toLocaleTimeString();
// }
 // const x=setInterval("clock(),1000");
		

 function stop(){
	 clearInterval(x);
 }
 
 
 function pop(){
	alert("Hello");
}

	

 function cancel(){
	 clearTimeout(y);
 }
 
 