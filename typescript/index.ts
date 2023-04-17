//GLOBAL VARIABLE DECLARATION
let displaytext:string= " ";
let evalinputstring:string = " ";
let isdegree:boolean = true;
let memory:string="";
let infinity:number=Infinity;
let tan:RegExp = /tan(\d+)/;
let sin:RegExp  = /sin(\d+)/;
let cos:RegExp  = /cos(\d+)/;
let cot:RegExp  = /cot(\d+)/;
let sec:RegExp  = /sec(\d+)/;
let cosec:RegExp  = /cosec(\d+)/;
let rt:RegExp  = /√(\d+)/;
let lg:RegExp =/log(\d+)/
let screenEl = document.getElementById("#screen") as HTMLInputElement
//INDIVIDUAL FUNCTIONS FOR OPERATIONS
function absolute(input:string):number {
  let numInput:number = Number(input);
  return Math.abs(numInput);
}
function square(input:string):number {
  return eval(input);
}
function exp(input:string):number {
  return Math.exp(Number(input));
}
function root(input:string):number {
  let numInput:number = Number(input);
  return Math.sqrt(numInput);
}
function cbroot(input:string):number {
  let numInput:number = Number(input);
  return Math.cbrt(numInput);
}
function xrooty(a:number,b:number):number{
    return Math.pow(a,1/b);
}
function factorial(input:number):number {
  try {
    if (input === 0) {
        return 1;
    }
    return input * factorial(input - 1)!;
  }
  catch {
    return infinity;
  }
}


//MAIN CALCULATOR FUCTION
function handleinput(input:string):void {
 let  result:string;
  switch (input) {
    //BASIC OPERATIONS
    case "clear":
      displaytext= " ";
      (screenEl).value = " ";
      break;
    // Addition
    case "+":
      if (displaytext === " ") {
        return;
      }
      displaytext = displaytext + "+";
      (screenEl).value = displaytext;
      break;
    // Substraction
    case "-":
      displaytext = displaytext + "-";
      (screenEl).value = displaytext;
      break;
    //Multiplication
    case "*":
      if (displaytext === " ") {
        return;
      }
      displaytext = displaytext + "*";
      (screenEl).value = displaytext;
      break;
    //DIVISION
    case "/":
      if (displaytext === " ") {
        return;
      }
      displaytext = displaytext + "/";
      (screenEl).value= displaytext;
      break;
    //MODULUS
    case "%":
      if (displaytext === " ") {
        return;
      }
      displaytext = displaytext + "%";
      (screenEl).value = displaytext;
      break;
    //LEFT-PARANTHESIS
    case "lp":
      displaytext = displaytext + "(";
      (screenEl).value = displaytext;
      break;
    //RIGHT PARENTHESIS
    case "rp":
      displaytext = displaytext + ")";
      (screenEl).value = displaytext;
      break;
    //ABSOLUTE VALUE
    case "abs":
      displaytext = absolute(displaytext).toString();
      (screenEl).value= displaytext;
      break;
    //SQUARE FUNCTION
    case "square":
      displaytext = displaytext + "**2";
      (screenEl).value= displaytext;
      break;
    //CUBE
    case "cube":
      displaytext = displaytext + "**3";
      (screenEl).value= displaytext;
      break;
    // ONE BY X FUNCTION
    case "1/x":
      let SplitInputdata:string[] = displaytext.split(/[+\-*\/]/);
      let lastelement:string = SplitInputdata[SplitInputdata.length - 1]!;
      displaytext = displaytext.slice(0, -lastelement.length);
      displaytext = displaytext + "1/" + lastelement;
      (screenEl).value = displaytext;
      break;
    //EXPONENTIAL FUNCTION
    case "exp":
      displaytext = exp(displaytext).toString();
      (screenEl).value = displaytext;
      break;
    //SQUARE ROOT FUNCTION
    case "sqrt":
      displaytext = root(displaytext).toString();
      (screenEl).value = displaytext;
      break;
    //DELETE LAST ELEMENT ON DISPLAY
    case "x":
      displaytext = displaytext.toString();
      displaytext = displaytext.slice(0, -1);
      (screenEl).value= displaytext;
      break;
    // E FUNCTION
    case "e":
      if (displaytext === " ") {
        displaytext+="2.718281";
        (screenEl).value= displaytext;
        return
      }
      if(displaytext.charAt(displaytext.length-1)==="+"){
         displaytext+="2.718281";
         (screenEl).value= displaytext;
         return
      }else if(displaytext.charAt(displaytext.length-1)==="-"){
         displaytext+="2.718281";
         (screenEl).value= displaytext;
         return
      }else if(displaytext.charAt(displaytext.length-1)==="/"){
         displaytext+="2.718281";
         (screenEl).value= displaytext;
         return
      }
      displaytext=displaytext+"*2.718281";
      displaytext=eval(displaytext);
      (screenEl).value= displaytext;
      break;
    // PIE BUTTON HANDLER
    case "pie":
        if (displaytext === " ") {
            displaytext+="3.14159";
            (screenEl).value= displaytext;
            return
          }
        if(displaytext.charAt(displaytext.length-1)==="+"){
          displaytext+="3.14159";
          (screenEl).value= displaytext;
          return
        }else if(displaytext.charAt(displaytext.length-1)==="-"){
          displaytext+="3.14159";
          (screenEl).value= displaytext;
          return
        }else if(displaytext.charAt(displaytext.length-1)==="/"){
          displaytext+="3.14159";
          (screenEl).value= displaytext;
          return
        }
        displaytext=displaytext+"*3.14159";
        displaytext=eval(displaytext);
        (screenEl).value= displaytext;
        break;
    //FACTORIAL HANDLER
    case "!":
      let data:string[];
      let lastelement1:string;
      let factAns:number;
         displaytext=(screenEl).value;
          data = displaytext.split(/[+\-*\/]/);
          lastelement1 = data[data.length - 1]!;
          factAns = factorial(Number(lastelement1));
          displaytext = displaytext.slice(0, -lastelement1.length);
          displaytext = displaytext + factAns;
          (screenEl).value= displaytext;
          break;
    // X POWER Y FUNCTION
    case "x-power-y":
      if (displaytext === " ") {
        return;
      }
      displaytext = displaytext + "**";
      (screenEl).value = displaytext;
      break;
    //TEN-POWER-X
    case "ten-power-x":
      if (displaytext === " ") {
        displaytext = "1";
        (screenEl).value = displaytext;
        return;
      } else {
        displaytext = eval("10**" + displaytext);
        (screenEl).value = displaytext;
        return;
      }
      break;
    //LOG FUNCTION
    case "log":
      displaytext+="log10(";
      (screenEl).value = displaytext;
      return;
    //LN FUNCTION
    case "ln":
      displaytext+="log(";
      (screenEl).value = displaytext;
      return;
    // CUBE ROOT X
    case "cbrt":
      if (displaytext === " ") {
        return;
      }
      displaytext = cbroot(displaytext).toString();
      (screenEl).value = displaytext;
      return;
    // Y ROOT X FUNCTION
    case "y-root-x":
      if (displaytext === " ") {
        return;
      }
      displaytext=displaytext+"√";
      (screenEl).value = displaytext;
      return;
    //TWO POWER X FUNCTION
    case "two-power-x":
        if (displaytext === " ") {
            displaytext= "2**"+displaytext;
            (screenEl).value= displaytext;
            displaytext=eval(displaytext);
            (screenEl).value= displaytext;
            return;
          }
        displaytext= "2**"+displaytext;
        (screenEl).value = displaytext;
        displaytext=eval(displaytext);
        (screenEl).value= displaytext;
        return;
    // E POWER X FUNCTION
    case "epowerx":
      if (displaytext === " ") {
        displaytext = "1";
        (screenEl).value = displaytext;
        return;
      } else {
        displaytext = eval("2.71828**" + displaytext);
        (screenEl).value= displaytext;
        return;
      }
    // Y LOG X FUNCTION
    case "log2":
      displaytext=displaytext+"log2(";
      (screenEl).value = displaytext;
      return;
    // FE HANDLER  
    case "fe":
      if (displaytext === " ") {
        return;
      }
      displaytext=Number(displaytext).toExponential(2);
      (screenEl).value= displaytext;
      return
    // EQUAL BUTTON HANDLER
    case "=":
      let finalResult:number|string;
      try{
        let completeExpression:string=(screenEl).value;
        finalResult=eval(convertString(completeExpression));
        if(isNaN(Number(finalResult))){
          showErrorMessage("error")
        }else
        {     
          displaytext = finalResult.toString();
        }
        (screenEl).value=finalResult.toString();
      }catch (e){
        if (e instanceof SyntaxError) {
        showErrorMessage("Not a valid operation")
        }
      }
      break;
      // Trigonometry
     case "sin":
        displaytext+="sin(";
        (screenEl).value = displaytext;
        break;
      case 'cos':
        displaytext+="cos(";
        (screenEl).value = displaytext;
        break;
      case 'tan':
        displaytext+="tan(";
        (screenEl).value = displaytext;
        break;
      case 'cosec':
        displaytext+="cosec(";
        (screenEl).value = displaytext;
        break;
      case 'sec':
        displaytext+="sec(";
        (screenEl).value = displaytext;
        break;
      case 'cot':
        displaytext+="cot(";
        (screenEl).value = displaytext;
        break;

      // MEMORY FUNCTIONS
    case "ms":
      let completeExpression:string=(screenEl).value;
      memory=eval(completeExpression);
      (document.getElementById("memory") as HTMLElement).innerText=memory;
      displaytext=memory;
      (screenEl).value=displaytext;
      break;
    case "mc":
           memory=" ";
           (document.getElementById("memory") as HTMLElement).innerText=memory.toString();
           break;
    case "mr":
          displaytext=(document.getElementById("memory") as HTMLElement).innerText;
          (screenEl).value = displaytext;
          break;
    case "m+":
            displaytext=displaytext+"+"+(document.getElementById("memory") as HTMLElement).innerText;
            result=eval(displaytext);
            memory=result;
            (document.getElementById("memory") as HTMLElement).innerText=memory.toString();
            (screenEl).value=result;
            break;
    case "m-":
            displaytext=(screenEl).value;
            memory=(document.getElementById("memory") as HTMLElement).innerText;  
            displaytext=(memory)+"-"+"("+displaytext+")";
            result=eval(displaytext);
            (document.getElementById("memory") as HTMLElement).innerText=result;
            (screenEl).value=result
            break;
    // FUNCTIONS HANDLER (FLOOR, RANDOM,CEIL,ABS)
    case "floor":
               let functionsInput:number = eval(displaytext);
               if(isNaN(functionsInput)){
                  displaytext="Error";
               }else{
                displaytext = Math.floor(eval(String(functionsInput))).toString();
               }
               (screenEl).value=displaytext;
               break;
    case "ceil":
               functionsInput = eval(displaytext);
               if(isNaN(functionsInput)){
                 displaytext="Error";
               }else{
                  displaytext = (Math.ceil(eval(String(functionsInput)))).toString();
               }
               (screenEl).value=displaytext;
               break;
    case "rand":
                displaytext = String(Math.random().toFixed(3));
                (screenEl).value=displaytext;
                break;
    // ANY OTHER KEY PRESS HANDLER
    default:
      displaytext += input;
      (screenEl).value = displaytext;
  }
}
//FUNCTION FOR HANDLER PLUS/MINUS TOGGLER
function toggleplus():void{
  let isplus:boolean;
  let screenValue:string;
  let result:string;
  let str:string =  (screenEl).value;
  if(str.includes("-")){
    isplus=false;
  }else{
    isplus=true;
  }
  if(!isplus){
    isplus=true; 
    screenValue= (screenEl).value;
    result = eval(screenValue);
    result=result.toString();
    if(result.includes("-")){
      displaytext=Math.abs(Number(result)).toString();
    }
  }else{
    isplus=false; 
     screenValue= (screenEl).value;
    let result = eval(screenValue);
    result=result.toString();
    if(!result.includes("-")){
      displaytext="-"+displaytext;
    }

  }
  (screenEl).value=displaytext;
  return;  
}


//FUNCTION FOR THE 2ND BUTTON TOGGLER
function toggle():void {
  let square:HTMLElement = document.querySelector(".square")!;
  let cube:HTMLElement = document.querySelector(".cube")!;
  let sqrt:HTMLElement = document.querySelector(".root")!;
  let cbrt:HTMLElement = document.querySelector(".cuberoot")!;
  let xpowery:HTMLElement = document.querySelector(".x-power-y")!;
  let yrootx:HTMLElement = document.querySelector(".yrootx")!;
  let tenpowerx:HTMLElement = document.querySelector(".ten-power-x")!;
  let twopowerx:HTMLElement = document.querySelector(".two-power-x")!;
  let log:HTMLElement = document.querySelector(".log")!;
  let log2:HTMLElement = document.querySelector(".log2")!;
  let ln:HTMLElement = document.querySelector(".ln")!;
  let epowerx:HTMLElement = document.querySelector(".epowerx")!;
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
    log2.classList.add("hide");
  } else {
    log.classList.add("hide");
    log2.classList.remove("hide");
  }
  if (ln.classList.contains("hide")) {
    ln.classList.remove("hide");
    epowerx.classList.add("hide");
  } else {
    ln.classList.add("hide");
    epowerx.classList.remove("hide");
  }
}
//FUNCTION FOR DEGREE TO RADIAN AND RADIAN TO DEGREE TOGGLER
function toggledeg():void{
  let degree:HTMLElement = document.getElementById("#DEG")!;
  if (isdegree) {
    degree.innerText = "RAD";
    isdegree = false;
  } else {
    degree.innerText = "DEG";
    isdegree = true;
  }
}
// DROP DOWN FOR TRIGONOMETRY MENU
function trigooptionsadd():void{
  let trigodrop:boolean=(document.querySelector(".trigo-dropdown") as HTMLElement).classList.contains("hide")
  if(trigodrop){
    (document.querySelector(".trigo-dropdown") as HTMLElement).classList.remove("hide");
    (document.querySelector(".func-dropdown") as HTMLElement).classList.add("hide");

  }else{
    (document.querySelector(".trigo-dropdown") as HTMLElement).classList.add("hide");   
  }
}
// FUNCTION FOR FUNCTION DROPDOWN MENU
function functionoptionsadd():void{
  let funcdrop:boolean=(document.querySelector(".func-dropdown") as HTMLElement).classList.contains("hide")
  if(funcdrop){
    (document.querySelector(".func-dropdown") as HTMLElement).classList.remove("hide");
    (document.querySelector(".trigo-dropdown")as HTMLElement).classList.add("hide");

  }else{
    (document.querySelector(".func-dropdown") as HTMLElement).classList.add("hide");   
  }
}
function convertString(inputstring:string):string{
  let regexAndFunction = [
    {
        regPattern: /e/g, // Regular expression to match 'e'
        callFunction: "2.718281828" // Call this string as a replacement
    },
    {
        regPattern: /π/g, // Regular expression to match 'π'
        callFunction: "3.14159265359" // Call this string as a replacement
    },
    {
        regPattern: /(\d+\.?\d*)\√(\-?\d+\.?\d*)/g, // Regular expression to match a square root expression
        callFunction: "getRoot($1, $2)" // Call the getRoot() function with the matched numbers as arguments
    },
    {
        regPattern: /sin\((\d+[+\-\/\.]?\d*)\)/g, // Regular expression to match a sine expression
        callFunction: isdegree ?"Math.sin(($1)*(3.14/180))": "Math.sin($1)"   // Call the getSin() function with the matched number as an argument
    },
    {
        regPattern: /cosec\((\d+[+\-\/\.]?\d*)\)/g, // Regular expression to match an inverse sine expression
        callFunction: isdegree ?"(1/Math.sin($1*(3.14/180))": "1/Math.sin($1))"  // Call the getSinIn() function with the matched number as an argument
    },
    {
        regPattern: /cos\((\d+[+\-\/\.]?\d*)\)/g, // Regular expression to match a cosine expression
        callFunction: isdegree ?"Math.cos($1*(3.14/180))": "Math.cos($1)"  // Call the getCos() function with the matched number as an argument
    },
    {
        regPattern: /sec\((\d+[+\-\/\.]?\d*)\)/g, // Regular expression to match an inverse cosine expression
        callFunction: isdegree ?"(1/Math.cos($1*(3.14/180))": "1/Math.cos($1))" // Call the getCosIn() function with the matched number as an argument
    },
    {
        regPattern: /tan\((\d+[+\-\/\.]?\d*)\)/g, // Regular expression to match a tangent expression
        callFunction: isdegree ?"Math.tan($1*(3.14/180))": "Math.tan($1)" // Call the getTan() function with the matched number as an argument
    },
    {
        regPattern: /cot\((\d+[+\-\/\.]?\d*)\)/g, // Regular expression to match an inverse tangent expression
        callFunction: isdegree ?"(1/Math.tan($1*(3.14/180)))": "(1/Math.tan($1))" // Call the getTanIn() function with the matched number as an argument
    },
    {
        regPattern: /log10\((\d+\.?\d*)\)/g, // Regular expression to match a base-10 logarithm expression
        callFunction: "Math.log10($1)" // Call the getLog() function with the matched number as an argument
    },
    {
        regPattern: /log2\((\d+\.?\d*)\)/g, // Regular expression to match a base-2 logarithm expression
        callFunction: "Math.log2($1)" // Call the getLog2() function with the matched number as an argument
    },
    {
        regPattern: /log\((\d+\.?\d*)\)/g, // Regular expression to match a ln  expression
        callFunction: "Math.log($1)"  // Call the getLn() function with the matched number as an argument
    },

]

let convertedString = inputstring;

regexAndFunction.map((regObject) => {
    convertedString = convertedString.replace(regObject.regPattern, regObject.callFunction)
})

return convertedString;

}
function showErrorMessage(message:string):void{
  displaytext=" ";
  (screenEl).value=displaytext;
  (document.getElementById("errorscreen") as HTMLElement).innerText=message;

  setTimeout(() => {
    (document.getElementById("errorscreen") as HTMLElement).innerText=" ";
  }, 1000);
}
