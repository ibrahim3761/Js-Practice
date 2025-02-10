var myVar=document.querySelector("#im1");

myVar.style.width="300px";

function myPic1(params) {
    myVar.src ="Images/1.png";
}

function myPic2(params) {
    myVar.src="/Images/2.png";
}

// Image slider js

var photos=["Images/1.png","Images/2.png","Images/3.png"];

var imgTag=document.querySelector("#im2")

imgTag.style.width="300px";

var count=0;

function next(params) {
    count++;

    if (count>=photos.length) {
        count=0;
        imgTag.src=photos[count];
    }
    else
    {
        imgTag.src=photos[count];
    }
}

function prev(params) {
    count--
    if (count<0) {
        count=photos.length-1;
        imgTag.src=photos[count];
    }
    else
    {
        imgTag.src=photos[count];
    }
    
}