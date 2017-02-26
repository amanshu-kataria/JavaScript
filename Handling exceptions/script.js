function main(){
    try{
        doAllTheThings();
    }
    catch(e){
        console.error(e);
        reportError(e);
    }
}

function doAllTheThings(){
    throw{
        message: "Everthing's ruined",
        name: "Fatal exception",
        toString: function(){
            return this.name+": " +this.message;
            }
        }
}

function reportError(e){
    document.getElementById("exception1").innerHTML="Uh oh, something went wrong, Here's what we know: "+e.message + " (Includes only error message.)";
    document.getElementById("exception2").innerHTML="Uh oh, something went wrong, Here's what we know: "+e+" (Includes both error name and error message.)";
}