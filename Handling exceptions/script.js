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
    document.getElementById("exception_id").innerHTML="Uh oh, something went wrong, Here's what we know: "+e.message;
}