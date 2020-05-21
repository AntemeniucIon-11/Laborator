/*

Antiminiuc Ion

*/

function func1(){   
	let counter=0;   
let max=15;         
let boll=0;        

let intervaler=setInterval(generateList,1000); 
	function generateList(){  





(counter<=max)? (()=>{    

	listings.innerHTML+=`
	<li style="background:${(boll)? '#fe4164':
	'rgba(0,0,0,0)'}">${counter} LISTA</i>` ; 
counter++;   
boll=(boll)?0:1;   





})():(()=>{

clearInterval(intervaler); 
setTimeout(()=>{
document.body.innerHTML=`<center>  //replace data and paste END
<div><h1> END</h1> </div>







</center>`;











},20000)









})()
}








}









 


window.onload=()=>{   
document.bgColor="violet";   
setTimeout(()=>{     
document.bgColor="green";   

setTimeout(func1,2000);  




},1000)




}