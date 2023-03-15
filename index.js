var displaytext=" ";
function handleinput(input){
   
    var result;
    switch(input){
        case 'clear':
            displaytext=" ";
            document.getElementById("#screen").value= " ";
            return;
        case '+':
            displaytext=displaytext+"+";
            document.getElementById("#screen").value=displaytext;
            return;
        case "=":
            let op = document.getElementById("#screen").value;
            result = eval(op);
            displaytext=result;
            document.getElementById("#screen").value=displaytext;
            return;
        default:
            displaytext+=input;
            document.getElementById("#screen").value=displaytext;

        
    }
   
  
        
}

// console.log(string);