
function calculate(){
    var x=parseInt(document.getElementById("num1").value);
console.log(x);
var y=parseInt(document.getElementById("num2").value);
console.log(y);
var opr=document.getElementById("op").value;
var result=0;
if(opr=='+'){
    result=x+y;
}
else if(opr=='-'){
result=x-y;
}
else if(opr=='*'){
result=x*y;
}
else if(opr=='/'){
result=x/y;
}

console.log(result);
document.getElementById("text").innerText=result.toFixed(2);
event.preventDefault();
}