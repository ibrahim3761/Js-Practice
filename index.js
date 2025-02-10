// var heading1 =document.getElementById("h-1");
// heading1.innerHTML = "Hello";

// var heading2 =document.getElementById("h-2");
// heading2.innerHTML = "Good Bye - good bye";


// var parag = document.getElementById("para");
// parag.innerHTML="Bye";

// document.querySelector(".h-1").innerHTML="h1";

// document.querySelector("#para").innerHTML="This is a para";

// document.querySelector("h2").innerHTML="be quite";

// document.querySelector("li a").innerHTML = "New tutorial";

// document.querySelector(".my-div a").innerHTML = "New Contact";

// document.querySelectorAll("p")[0].innerHTML = "This is text";

// document.querySelectorAll("p")[1].innerHTML = "This is text";

// var myVar= document.querySelector("#paraID");

// function addStyle()
// {
//     myVar.classList.add("para-style");
// }

// function remStyle() {
//     myVar.classList.remove("para-style");
// }

// document.querySelector("h1").addEventListener("mouseover",function(){
//     document.querySelector("h1").classList.add("my-style");
// });

// document.querySelector("h1").addEventListener("mouseout",function(){
//     document.querySelector("h1").classList.remove("my-style");
// });

var len=document.querySelectorAll(".myButton").length;

for(var i=0;i<len;i++ )
{
    document.querySelectorAll(".myButton")[i].addEventListener("click",function () {
    var text = this.innerHTML; 
    document.querySelector("h1").innerHTML= text+" is clicked"
})
}

for(var i=0;i<len;i++ )
{
    document.querySelectorAll(".myButton")[i].addEventListener("click",function () {
    var text=this.innerHTML;
    audioPlay(text); 
    playAnimation(text); 
})
}

function audioPlay(text){
    switch (text) {
        case "a":
            var audio = new Audio("sounds/A.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("sounds/B.mp3");
            audio.play();
            break;
        case "c":
            var audio = new Audio("sounds/C.mp3");
            audio.play();
            break;  
    }  
}
    
function playAnimation(text) {
    var selectedbutton = document.querySelector("."+text);
    selectedbutton.classList.add("anim");

    setTimeout(function () {
        selectedbutton.classList.remove("anim");
    },4000)
    
}