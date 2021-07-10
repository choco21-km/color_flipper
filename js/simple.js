var colours=["red","green","blue","#ffccaa","orange","yellow"];
var color=document.getElementById("color");
var clickbtn=document.getElementById("button");

clickbtn.addEventListener("click",function(){
 var randomnum=RandomNumber();
 document.body.style.backgroundColor=colours[randomnum];
 color.textContent = colours[randomnum];
});
function RandomNumber(){
    return Math.floor(Math.random()*colours.length);
}