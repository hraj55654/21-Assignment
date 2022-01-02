var Num =prompt("Enter the number");
Num = parseInt(Num);
var Num1 = prompt("Enter the number");
Num1 = parseInt(Num1);
var Num2 = prompt("Enter the number");
Num2 = parseInt(Num2);

if(Num <= Num1 && Num <= Num2){
alert("Num is smaller than all");
}else if(Num1 <= Num2 && Num1 <= Num){
alert("Num1 is smaller than all");
}else{
alert("Num2 is smaller than all");
}
