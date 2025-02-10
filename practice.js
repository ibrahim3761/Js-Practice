task 2

var firstName,lastName ,fullname ,len;

firstName= prompt("Enter first name :");

lastName= prompt("Enter last name :");

fullname= firstName + " " + lastName;

len=fullname.length

document.write(fullname + "<br>");

document.write(len + "<br>");

document.write(fullname.toUpperCase() + "<br>");

document.write(fullname.charAt(2) )

var base,height,area;

base = prompt("Enter Base :");

height = prompt("Enter Height : ");

area = base * height;

document.write("Area = " + area);


var num =prompt("Enter your marks : ");

if(num>0)
    document.write("Positive");
else if(num<0)
    document.write("Negative");
else
    document.write("Zero");

if(num>=80)
    document.write("A+");
else if(num>=70)
    document.write("A");
else if(num>=60)
    document.write("A-");
else if(num>=50)
    document.write("B");
else if(num>=40)
    document.write("C");
else if(num>=33)
    document.write("D");
else
    document.write("F");


function square(num){
    var res = num * num;
    return res;
}
document.write(square(5));
// square(4);

var names = ["Anis","Anus","Fanus"];

names[0]="Anis";
names[1]="Anus";
names[2]="Anas";
names[3]="Fanis";
names[4]="Fanus";

names.push("Sakina")
document.write(names+"<br>");
document.write(names.length+"<br>");

names.shift();

names.unshift("Sakina")

names.pop();

names.push("Anis");

names.splice(2,1,"Angas","Fangas")

names.splice(1,2);

var nam =names.slice(1);

document.write(nam+"<br>");
document.write(nam.length+"<br>");

var sortedname = names.sort();

names.reverse();

document.write(sortedname+"<br>");
document.write(sortedname.length+"<br>");



var count1=["BD","IND"];
var count2=["PAK","SL"];

var count=count1.concat(count2);

document.write(count);
var num = new Array();

for(var i=0;i<5;i++)
{
    num[i]=parseInt(prompt("Enter a number : "));
}

var sum=0;

for(var i=0;i<5;i++)
{
    document.write(num[i]+"<br>");
    sum+=num[i];
}

document.write("Sum of array elements: "+sum);

var num = [20,5,4,25,45];

num.sort(function(a,b){
    return a-b;
});

document.write(num);


function Student(name,age,cgpa,lang) {
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.lang=lang;

    this.display = function()
    {
        document.write(this.name+"<br>");
        document.write(this.age+"<br>");
        document.write(this.cgpa+"<br>");
        document.write(this.lang+"<br>");
    }
}

var student1 = new Student("John",20,3.92,["Bengali","Hindi","English"]);

var student2 = new Student("Joh",20,3.92,["Bengali","Hindi","English"]);

var student3 = new Student("Jon",20,3.92,["Bengali","Hindi","English"]);


student1.display();

student2.display();

student3.display();

