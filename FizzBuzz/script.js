var arrayElements=[1,4,6,7,9,13,15,17,19,20,21,22,23,24,25];
var index=0;

function load(){
    var arr=document.getElementById("array_Elements").innerHTML;
    arr+=arrayElements;
    document.getElementById("array_Elements").innerHTML=arr;
}

function clickMeButton(){
    if(index<arrayElements.length)
    {
        var result=fizzBuzz(arrayElements[index]);
        var output=document.getElementById("output_").innerHTML;
        output=output+" "+result;
        document.getElementById("output_").innerHTML=output;
        index++;
    }
    else alert("Game Over!");
}

function fizzBuzz(num){
    if(num%15===0)
        return "FizzBuzz";
    else if(num%3===0)
        return "Fizz";
    else if(num%5===0)
        return "Buzz";
    else 
        return num;
}