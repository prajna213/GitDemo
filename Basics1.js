/**
 * http://usejsdoc.org/
 */
function add(a,b)
{
return a+b;
}

console.log(add(2,3));
console.log(add(5,3));

console.log(add(4,3));

console.log(add(2,3));
console.log(add(2,6));
console.log(add(2,4));
console.log(add(2,2));
console.log(add(2,9));
console.log(add(2,12));

var a=4;
var b= ["hello","world","4","goodbye"];

console.log(b.length+ "is the size of the array");
for(var i=0;i<b.length;i++)
{
console.log(b[i]);
}

var c= new Array();

c[0]= "goodbye";
c[1]="4";
c[2]="world";
c[3]="hello";
c[4]="bad";
//length - 1 will be the maximum index
console.log(c.length+ "is the size of the array called C");

for(var i=0;i<c.length;i++)
{
console.log(c[i]);
}