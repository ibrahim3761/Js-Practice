const str = "dihan ekta vuter baccha";
var res = "";
var f = 1; 

for (var i = 0; i < str.length; i++) 
{
    if (f == 1 && str[i] !== ' ') 
    {
        res+= str[i].toUpperCase(); 
        f = 0; 
    } 
    else 
    {
        res+= str[i];
    }

    if (str[i] == ' ') {
        f = 1; 
    }
}

console.log(res);
