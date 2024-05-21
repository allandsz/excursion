function equivalentcheck() {
//this allows the last value to remain in view until other buttons are presseed.
    if (parseInt(document.getElementById('equivalent').value))
    { document.getElementById('equivalent').value = 0;
    document.getElementById('result').value = 0;
}
}
function input(x) {

    equivalentcheck();
    let y = parseFloat(document.getElementById('result').value);
    if (document.getElementById('decimalvar').value==0)
    {
        x += y * 10; //multiply the text input by 10 and add the value of x.
        document.getElementById('result').value = x; //return x to the text output.

    }
else{ // if decimal is true
let decimalcount = parseInt(document.getElementById('decimalvar').value);
if(decimalcount ==1) {
    x *= 1/10; // we are using math to place the decimal point.
    y += x;
    document.getElementById('result').value = y;
}
else{
    document.getElementById('result').value += x;
}
decimalcount++;
document.getElementById('decimalvar').value = decimalcount;

}

}

function decimalpoint() {

    if (document.getElementById('decimalvar').value == 0) { //this prevent multiple decimal points}
        document.getElementById('decimalvar').value = 1;
}
    if (parseInt(document.getElementById('operation').value)) { //this is an empty string, it will return false.
     document.getElementById('result').value = 0;   
}
}
function operandcheck() { 
   if(document.getElementById('operand').value== "")
 { document.getElementById('operand').value = document.getElementById('result').value;
   document.getElementById('equivalent').value = 1;

 }

else
 {   
     operatorcheck();
}
 }
 
 function operatorcheck(){
     let a = parseFloat(document.getElementById('operand').value);
    let b = parseFloat(document.getElementById('result').value);
 
 switch (parseInt(document.getElementById('operation').value))
 
 { case 1: //addition
 a += b;
 break;
 
 case 2: //subtraction
 a -= b;
 break;
 
 case 3: //multiplication
 a *= b;
 break;
 
 case 4 ://division
 a /= b;
 
 }

 document.getElementById('operand').value = a;
 document.getElementById('result').value = a;
 document.getElementById('equivalent').value = 1;
 }
 
     function operators(X) {
 
     switch(X)
      {
         case 1:
              document.getElementById('operation').value = 1; //addition
             break;
         case 2: document.getElementById('operation').value = 2; //subtraction
             break;
         case 3: document.getElementById('operation').value = 3; //multiplication
             break;
         case 4:document.getElementById('operation').value = 4; //divison
             break;
             default:            
    
     }
     operandcheck();
 }
 function equals(){
    operators(parseInt(document.getElementById('operation').value));
    document.getElementById('result').value = document.getElementById('operand').value;
    document.getElementById('operand').value = "";
    document.getElementById('equivalent').value = 1;
 }



function allclear() {
document.getElementById('result').value = 0;
document.getElementById('operand').value = "";
document.getElementById('operation'). value = 0;
document.getElementById('equivalent').value = 0;
}

function plusminus() {
let X = parseFloat(document.getElementById('result').value);
X *= -1;
document.getElementById('result').value = X;
}

function percent() {
    let X = parseFloat(document.getElementById('result').value);
    X *= 0.01;
    document.getElementById('result').value = X;
    }

    function square() {
        let X = parseFloat(document.getElementById('result').value);
        X *= X;
        document.getElementById('result').value = X;
        }

       

