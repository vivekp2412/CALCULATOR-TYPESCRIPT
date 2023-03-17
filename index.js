var displaytext = " ";
var evalinputstring = " ";
var isdegree = true;
var memory=0;
function absolute(input) {
  console.log(input);
  let i = eval(input);
  return Math.abs(i);
}
function square(input) {
  return eval(input);
}
function onebyx(input) {
  return 1 / input;
}
function exp(input) {
  return Math.exp(input);
}
function flor(input) {
  console.log(input);
  console.log(Math.floor(input));
  return Math.floor(input);
}
function root(input) {
  i = eval(input);
  return Math.sqrt(i);
}
function cbroot(input) {
    i = eval(input);
    return Math.cbrt(i);
  }
  function xrooty(a,b){
    return Math.pow(a,1/b);
  }
function factorial(input) {
  if (input == 1) return 1;
  return input * factorial(input - 1);
}
// function handleXPower(power) {
//     if ((/[\d)IE]/.test(evalinputString.slice(-1)))) {
//          let splitArr = evalinputString.split(/[+\-*\/]/);
//                  let lastOprandDigit = splitArr.slice(-1)[0].length;
//                  let cutBeforeInputString = evaluateInputString.slice(0, (lastOprandDigit * -1));
//                  displayInput.value = cutBeforeInputString + "(" + splitArr.slice(-1)[0] + ")^" + power;
//                   evalinputString = cutBeforeInputString + "Math.pow(" + splitArr.slice(-1)[0] + "," + power + ")";
//                 }
//     else {
//         console.log("Invalid operation!!!");
//     }}

function handleinput(input) {
  var result;
  switch (input) {
    case "clear":
      displaytext = " ";
      document.getElementById("#screen").value = " ";
      return;
    case "+":
      if (displaytext == " ") {
        return;
      }
      evalinputstring = displaytext + "+";
      displaytext = displaytext + "+";

      document.getElementById("#screen").value = displaytext;
      return;
    case "-":
      if (displaytext == " ") {
        return;
      }
      evalinputstring = displaytext + "-";
      displaytext = displaytext + "-";
      document.getElementById("#screen").value = displaytext;
      return;
    case "*":
      if (displaytext == " ") {
        return;
      }
      evalinputstring = displaytext + "*";
      displaytext = displaytext + "*";
      document.getElementById("#screen").value = displaytext;
      return;
    case "/":
      if (displaytext == " ") {
        return;
      }
      evalinputstring = displaytext + "/";
      displaytext = displaytext + "/";
      document.getElementById("#screen").value = displaytext;
      return;
    case "%":
      if (displaytext == " ") {
        return;
      }
      evalinputstring = displaytext + "%";
      displaytext = displaytext + "%";
      document.getElementById("#screen").value = displaytext;
      return;

    case "lp":
      evalinputstring = displaytext + "(";
      displaytext = displaytext + "(";
      document.getElementById("#screen").value = displaytext;
      return;
    case "rp":
      evalinputstring = displaytext + ")";
      displaytext = displaytext + ")";
      document.getElementById("#screen").value = displaytext;
      return;
    case "abs":
      displaytext = absolute(displaytext);
      document.getElementById("#screen").value = displaytext;
      return;
    case "square":
      // evalinputstring=displaytext;
      // handleXPower(2);
      // displaytext=eval(displaytext);
      displaytext = displaytext + "**2";
      document.getElementById("#screen").value = displaytext;
      return;
    case "cube":
      displaytext = displaytext + "**3";
      document.getElementById("#screen").value = displaytext;
      return;
    case "1/x":
      let data = displaytext.split(/[+\-*\/]/);
      let lastelement = data[data.length - 1];
      displaytext = displaytext.slice(0, -lastelement.length);

      displaytext = displaytext + "1/" + lastelement;
      console.log(displaytext);
      document.getElementById("#screen").value = displaytext;
      return;
    case "exp":
      displaytext = exp(displaytext);
      document.getElementById("#screen").value = displaytext;
      return;
    case "sqrt":
    //      let data3 = displaytext.split(/[+\-*\/]/);
    //     let lastelement3 = data3[data3.length - 1];
    //   displaytext = displaytext.slice(0, -lastelement3.length);

      displaytext = root(displaytext);
    // displaytext=displaytext + "Math.pow(" + lastelement3+")"
    // displaytext=eval(displaytext);
      document.getElementById("#screen").value = displaytext;
      return;

    case "x":
      displaytext = displaytext.toString();
      displaytext = displaytext.slice(0, -1);
      document.getElementById("#screen").value = displaytext;
      return;
    case "e":
        displaytext+="2.718281"
        document.getElementById("#screen").value = displaytext;
        return;
    case "pie":
        if (displaytext == " ") {
            displaytext+="3.14159"
            document.getElementById("#screen").value = displaytext;
            return
          }
            displaytext=displaytext+"*3.14159";
            displaytext=eval(displaytext);
            document.getElementById("#screen").value = displaytext;
            return;
    case "!":
      data1 = displaytext.split(/[+\-*\/]/);
      lastelement1 = data1[data1.length - 1];
      factans = factorial(lastelement1);
      displaytext = displaytext.slice(0, -lastelement1.length);
      displaytext = displaytext + factans;
      document.getElementById("#screen").value = displaytext;
      return;
    case "x-power-y":
      if (displaytext == " ") {
        return;
      }

      displaytext = displaytext + "**";

      document.getElementById("#screen").value = displaytext;

      return;
    case "ten-power-x":
      if (displaytext == " ") {
        displaytext = 1;
        document.getElementById("#screen").value = displaytext;
        return;
      } else {
        displaytext = eval("10**" + displaytext);

        document.getElementById("#screen").value = displaytext;

        return;
      }
    //    displaytext=displaytext+"**";
    case "log":
      if (displaytext == " ") {
        return;
      }
      displaytext = eval(displaytext);
      displaytext = eval(Math.log10(displaytext));
      document.getElementById("#screen").value = displaytext;
      return;
    case "ln":
      if (displaytext == " ") {
        return;
      }
      displaytext = eval(displaytext);
      displaytext = eval(Math.log(displaytext));
      document.getElementById("#screen").value = displaytext;
      return;


    case "cbrt":
      if (displaytext == " ") {
        return;
      }
      displaytext = cbroot(displaytext);
      document.getElementById("#screen").value = displaytext;
      return;
    case "y-root-x":
      if (displaytext == " ") {
        return;
      }
      screentext=displaytext+"√";
      let x = displaytext.split(/[√]/);
      displaytext = "Math.pow("+x[0]+","+"1/";
      document.getElementById("#screen").value = screentext;
      return;
      
    case "two-power-x":
        if (displaytext == " ") {
            displaytext= "2**"+displaytext;
            document.getElementById("#screen").value = displaytext;
            displaytext=eval(displaytext);
            document.getElementById("#screen").value = displaytext;
            return;
          }
        displaytext= "2**"+displaytext;
        document.getElementById("#screen").value = displaytext;
        displaytext=eval(displaytext);
        document.getElementById("#screen").value = displaytext;
        return;
    case "epowerx":
      if (displaytext == " ") {
        displaytext = 1;
        document.getElementById("#screen").value = displaytext;
        return;
      } else {
        displaytext = eval("2.71828**" + displaytext);

        document.getElementById("#screen").value = displaytext;

        return;
      }
    case "epowerx":
        if (displaytext == " ") {
          displaytext = 1;
          document.getElementById("#screen").value = displaytext;
          return;
        } else {
          displaytext = eval("2.71828**" + displaytext);
  
          document.getElementById("#screen").value = displaytext;
  
          return;
        }
    

        
    case "=":
      let op = document.getElementById("#screen").value;
      try {
        result = eval(op);
        console.log(result);
        if(result==NaN){
          displaytext="error";
        }else{     displaytext = result;}
   
      } catch (e) {
        if (e instanceof SyntaxError) {
          displaytext = "Not valid operation";
          // displaytext="";
        }
      } finally {
        document.getElementById("#screen").value = displaytext;
        return;
      }


      // memory functions
    case "ms":
      memory=displaytext;
      document.getElementById("memory").innerText=memory;
      displaytext=" ";
      document.getElementById("#screen").value = displaytext;

      return
    case "mc":
        memory=0;
        document.getElementById("memory").innerText=memory;
        // displaytext=" ";
        // document.getElementById("#screen").value = displaytext;
  
        return
    case "mr":
          displaytext=document.getElementById("memory").innerText;
          // document.getElementById("memory").innerText=memory;
          // displaytext=" ";
          document.getElementById("#screen").value = displaytext;
    
          return
    case "mr":
            displaytext=document.getElementById("memory").innerText;
            // document.getElementById("memory").innerText=memory;
            // displaytext=" ";
            document.getElementById("#screen").value = displaytext;
      
            return
    case "m+":
             displaytext=displaytext+"+"+document.getElementById("memory").innerText;
             var result=eval(displaytext);
             memory=result;
             document.getElementById("memory").innerText=memory;
             document.getElementById("#screen").value=result;
        
              return
    case "m-":
                displaytext=displaytext+"-"+document.getElementById("memory").innerText;
                var result=eval(displaytext);
                memory=result;
                document.getElementById("memory").innerText=memory;
                document.getElementById("#screen").value=result
           
                 return
            //function
    case "floor":
              //  displaytext=document.getElementById("#screen").innerText;
               
               let r = flor(displaytext);
               document.getElementById("#screen").innerText=r;
               return;
          
        
        
      

    default:
      displaytext += input;
      evalinputstring = displaytext;
      document.getElementById("#screen").value = displaytext;
  }
}
function toggle() {
  let toggle = document.querySelector(".toggle");
  isToogle = true;
  let square = document.querySelector(".square");
  let cube = document.querySelector(".cube");
  let sqrt = document.querySelector(".root");
  let cbrt = document.querySelector(".cuberoot");
  let xpowery = document.querySelector(".x-power-y");
  let yrootx = document.querySelector(".yrootx");
  let tenpowerx = document.querySelector(".ten-power-x");
  let twopowerx = document.querySelector(".two-power-x");
  let log = document.querySelector(".log");
  let xlogy = document.querySelector(".xlogy");
  let ln = document.querySelector(".ln");
  let epowerx = document.querySelector(".epowerx");
  if (square.classList.contains("hide")) {
    square.classList.remove("hide");
    cube.classList.add("hide");
  } else {
    square.classList.add("hide");
    cube.classList.remove("hide");
  }
  if (sqrt.classList.contains("hide")) {
    sqrt.classList.remove("hide");
    cbrt.classList.add("hide");
  } else {
    sqrt.classList.add("hide");
    cbrt.classList.remove("hide");
  }
  if (xpowery.classList.contains("hide")) {
    xpowery.classList.remove("hide");
    yrootx.classList.add("hide");
  } else {
    xpowery.classList.add("hide");
    yrootx.classList.remove("hide");
  }
  if (tenpowerx.classList.contains("hide")) {
    tenpowerx.classList.remove("hide");
    twopowerx.classList.add("hide");
  } else {
    tenpowerx.classList.add("hide");
    twopowerx.classList.remove("hide");
  }
  if (log.classList.contains("hide")) {
    log.classList.remove("hide");
    xlogy.classList.add("hide");
  } else {
    log.classList.add("hide");
    xlogy.classList.remove("hide");
  }
  if (ln.classList.contains("hide")) {
    ln.classList.remove("hide");
    epowerx.classList.add("hide");
  } else {
    ln.classList.add("hide");
    epowerx.classList.remove("hide");
  }
}
function toggledeg() {
  let degree = document.getElementById("#DEG");
  if (isdegree) {
    degree.innerText = "RAD";
    isdegree = false;
  } else {
    degree.innerText = "DEG";
    isdegree = true;
  }
}
// console.log(string);
