let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e) =>{
        buttonText = e.target.innerText;
console.log("buuton text is" , buttonText)
if(buttonText=='X'){
    buttonText='*';
    screenValue+=buttonText;
    screen.value =screenValue;
}
else if(buttonText=='C'){
          screenValue = "";
         screen.value = screenValue;
}
else if(buttonText == '='){
    screen.value = eval(screenValue)

}
else{
    screenValue+=buttonText;
    screen.value =screenValue;
}

    });
} 

var n=document.querySelectorAll(".calculator").length;
for(var i=0; i<n; i++){

   document.querySelectorAll(".calculator")[i].addEventListener("click",function(){
 var audio=new Audio("sound/tune.mp3");
 audio.play();


   }) ;
}

    