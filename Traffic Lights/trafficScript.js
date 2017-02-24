var light=undefined;

function initializeSignal(){
    return (['red','yellow','green'])[Math.floor(Math.random()*3)];
}

function controlLights(){
    if(light===undefined)
    {
        light=initializeSignal();
        if(light==="red")
            turnRed();
        else if(light==="yellow")
            turnYellow();
        else turnGreen();
    }
    else{
        if(light==="red"){
            light="yellow";
            turnYellow();
        }
        else if(light==="yellow"){
            light="green";
            turnGreen();
        }
        else{
            light="red";
            turnRed();
        }
    }
}

function turnRed(){
    document.getElementById("green_light").style.backgroundColor="white";
    document.getElementById("red_light").style.backgroundColor="red";
    console.log("red");
}

function turnYellow(){
    document.getElementById("red_light").style.backgroundColor="white";
    document.getElementById("yellow_light").style.backgroundColor="yellow";
    console.log("yellow");
}

function turnGreen(){
    document.getElementById("yellow_light").style.backgroundColor="white";
    document.getElementById("green_light").style.backgroundColor="green";
    console.log("green");
}