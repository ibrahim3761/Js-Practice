var num=  Number(prompt("Enter a number"));
if (num > 0) {
    document.write("Positive");
}
else{
    document.write("Negative");
}

var res =  num > 0 ? "Positive" : "Negative";

document.write(res);