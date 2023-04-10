"use strict";
let displaytext = " ";
let evalinputstring = " ";
let isdegree = true;
var memory = "0";
let tan = /tan(\d+)/;
let sin = /sin(\d+)/;
let cos = /cos(\d+)/;
let cot = /cot(\d+)/;
let sec = /sec(\d+)/;
let cosec = /cosec(\d+)/;
let rt = /√(\d+)/;
let lg = /log(\d+)/;
//INDIVIDUAL FUNCTIONS FOR OPERATIONS
function absolute(input) {
    console.log(input);
    let i = eval(input);
    // if(isNaN(i)){
    //   return "Error"
    // }
    return Math.abs(i);
}
function square(input) {
    return eval(input);
}
// function onebyx(input:string) {
//   return eval(1/input);
// }
function exp(input) {
    return Math.exp(Number(input));
}
function flor(input) {
    return Math.floor(Number(input));
}
function root(input) {
    let i = eval(input);
    return Math.sqrt(i);
}
function cbroot(input) {
    let i = eval(input);
    return Math.cbrt(i);
}
function xrooty(a, b) {
    return Math.pow(a, 1 / b);
}
function factorial(input) {
    if (input == 1)
        return 1;
    return input * factorial(input - 1);
}
//MAIN CALCULATOR FUCTION
function handleinput(input) {
    var result;
    let r;
    switch (input) {
        //BASIC OPERATIONS
        case "clear":
            displaytext = " ";
            document.getElementById("#screen").value = " ";
            return;
        // Addition
        case "+":
            if (displaytext == " ") {
                return;
            }
            evalinputstring = displaytext + "+";
            displaytext = displaytext + "+";
            document.getElementById("#screen").value = displaytext;
            return;
        // Substraction
        case "-":
            evalinputstring = displaytext + "-";
            displaytext = displaytext + "-";
            document.getElementById("#screen").value = displaytext;
            return;
        //Multiplication
        case "*":
            if (displaytext == " ") {
                return;
            }
            evalinputstring = displaytext + "*";
            displaytext = displaytext + "*";
            document.getElementById("#screen").value = displaytext;
            return;
        //DIVISION
        case "/":
            if (displaytext == " ") {
                return;
            }
            evalinputstring = displaytext + "/";
            displaytext = displaytext + "/";
            document.getElementById("#screen").value = displaytext;
            return;
        //MODULUS
        case "%":
            if (displaytext == " ") {
                return;
            }
            evalinputstring = displaytext + "%";
            displaytext = displaytext + "%";
            document.getElementById("#screen").value = displaytext;
            return;
        //LEFT-PARANTHESIS
        case "lp":
            evalinputstring = displaytext + "(";
            displaytext = displaytext + "(";
            document.getElementById("#screen").value = displaytext;
            return;
        //RIGHT PARENTHESIS
        case "rp":
            evalinputstring = displaytext + ")";
            displaytext = displaytext + ")";
            document.getElementById("#screen").value = displaytext;
            return;
        //ABSOLUTE VALUE
        case "abs":
            displaytext = absolute(displaytext).toString();
            document.getElementById("#screen").value = displaytext;
            return;
        //SQUARE FUNCTION
        case "square":
            displaytext = displaytext + "**2";
            document.getElementById("#screen").value = displaytext;
            return;
        //CUBE
        case "cube":
            displaytext = displaytext + "**3";
            document.getElementById("#screen").value = displaytext;
            return;
        // ONE BY X FUNCTION
        case "1/x":
            let data = displaytext.split(/[+\-*\/]/);
            let lastelement = data[data.length - 1];
            displaytext = displaytext.slice(0, -lastelement.length);
            displaytext = displaytext + "1/" + lastelement;
            document.getElementById("#screen").value = displaytext;
            return;
        //EXPONENTIAL FUNCTION
        case "exp":
            displaytext = exp(displaytext).toString();
            document.getElementById("#screen").value = displaytext;
            return;
        //SQUARE ROOT FUNCTION
        case "sqrt":
            displaytext = root(displaytext).toString();
            document.getElementById("#screen").value = displaytext;
            return;
        //DELETE LAST ELEMENT ON DISPLAY
        case "x":
            displaytext = displaytext.toString();
            displaytext = displaytext.slice(0, -1);
            document.getElementById("#screen").value = displaytext;
            return;
        // E FUNCTION
        case "e":
            if (displaytext == " ") {
                displaytext += "2.718281";
                document.getElementById("#screen").value = displaytext;
                return;
            }
            if (displaytext.charAt(displaytext.length - 1) == "+") {
                displaytext += "2.718281";
                document.getElementById("#screen").value = displaytext;
                return;
            }
            else if (displaytext.charAt(displaytext.length - 1) == "-") {
                displaytext += "2.718281";
                document.getElementById("#screen").value = displaytext;
                return;
            }
            else if (displaytext.charAt(displaytext.length - 1) == "/") {
                displaytext += "2.718281";
                document.getElementById("#screen").value = displaytext;
                return;
            }
            displaytext = displaytext + "*2.718281";
            displaytext = eval(displaytext);
            document.getElementById("#screen").value = displaytext;
            return;
        // PIE BUTTON HANDLER
        case "pie":
            if (displaytext == " ") {
                displaytext += "3.14159";
                document.getElementById("#screen").value = displaytext;
                return;
            }
            if (displaytext.charAt(displaytext.length - 1) == "+") {
                displaytext += "3.14159";
                document.getElementById("#screen").value = displaytext;
                return;
            }
            else if (displaytext.charAt(displaytext.length - 1) == "-") {
                displaytext += "3.14159";
                document.getElementById("#screen").value = displaytext;
                return;
            }
            else if (displaytext.charAt(displaytext.length - 1) == "/") {
                displaytext += "3.14159";
                document.getElementById("#screen").value = displaytext;
                return;
            }
            displaytext = displaytext + "*3.14159";
            displaytext = eval(displaytext);
            document.getElementById("#screen").value = displaytext;
            return;
        //FACTORIAL HANDLER
        case "!":
            let data1;
            let lastelement1;
            let factans;
            data1 = displaytext.split(/[+\-*\/]/);
            lastelement1 = data1[data1.length - 1];
            factans = factorial(Number(lastelement1));
            displaytext = displaytext.slice(0, -lastelement1.length);
            displaytext = displaytext + factans;
            document.getElementById("#screen").value = displaytext;
            return;
        // X POWER Y FUNCTION
        case "x-power-y":
            if (displaytext == " ") {
                return;
            }
            displaytext = displaytext + "**";
            document.getElementById("#screen").value = displaytext;
            return;
        //TEN-POWER-X
        case "ten-power-x":
            if (displaytext == " ") {
                displaytext = "1";
                document.getElementById("#screen").value = displaytext;
                return;
            }
            else {
                displaytext = eval("10**" + displaytext);
                document.getElementById("#screen").value = displaytext;
                return;
            }
        //LOG FUNCTION
        case "log":
            // if (displaytext == " ") {
            //   return;
            // }
            displaytext += "log10(";
            document.getElementById("#screen").value = displaytext;
            return;
        //LN FUNCTION
        case "ln":
            if (displaytext == " ") {
                return;
            }
            displaytext += "log(";
            document.getElementById("#screen").value = displaytext;
            return;
        // CUBE ROOT X
        case "cbrt":
            if (displaytext == " ") {
                return;
            }
            displaytext = cbroot(displaytext).toString();
            document.getElementById("#screen").value = displaytext;
            return;
        // Y ROOT X FUNCTION
        case "y-root-x":
            if (displaytext == " ") {
                return;
            }
            displaytext = displaytext + "√";
            document.getElementById("#screen").value = displaytext;
            return;
        //TWO POWER X FUNCTION
        case "two-power-x":
            if (displaytext == " ") {
                displaytext = "2**" + displaytext;
                document.getElementById("#screen").value = displaytext;
                displaytext = eval(displaytext);
                document.getElementById("#screen").value = displaytext;
                return;
            }
            displaytext = "2**" + displaytext;
            document.getElementById("#screen").value = displaytext;
            displaytext = eval(displaytext);
            document.getElementById("#screen").value = displaytext;
            return;
        // E POWER X FUNCTION
        case "epowerx":
            if (displaytext == " ") {
                displaytext = "1";
                document.getElementById("#screen").value = displaytext;
                return;
            }
            else {
                displaytext = eval("2.71828**" + displaytext);
                document.getElementById("#screen").value = displaytext;
                return;
            }
        // Y LOG X FUNCTION
        case "ylogx":
            if (displaytext == " ") {
                return;
            }
            displaytext = displaytext + "log";
            document.getElementById("#screen").value = displaytext;
            return;
        // FE HANDLER  
        case "fe":
            if (displaytext == " ") {
                return;
            }
            displaytext = Number(displaytext).toExponential(2);
            document.getElementById("#screen").value = displaytext;
            return;
        // EQUAL BUTTON HANDLER
        case "=":
            let op = document.getElementById("#screen").value;
            console.log(op);
            console.log(eval(convertString(op)));
            document.getElementById("#screen").value = convertString(op);
            try {
                // console.log(op)
                if (tan.test(op)) {
                    // console.log(op.slice(4));
                    if (isdegree) {
                        displaytext = Math.tan((Number(op.slice(4)) * Math.PI) / 180).toFixed(3);
                        if (isNaN(Number(displaytext))) {
                            displaytext = "Error";
                        }
                    }
                    else {
                        displaytext = Math.tan(Number(op.slice(4))).toFixed(3).toString();
                        if (isNaN(Number(displaytext))) {
                            displaytext = "Error";
                        }
                    }
                    if (displaytext.length > 6) {
                        displaytext = "not defined";
                        return;
                    }
                    return;
                }
                //sin
                if (sin.test(op)) {
                    if (isdegree) {
                        displaytext = Math.sin((Number(op.slice(4)) * Math.PI) / 180).toFixed(3).toString();
                        if (isNaN(Number(displaytext))) {
                            displaytext = "Error";
                        }
                    }
                    else {
                        displaytext = Math.sin((Number(op.slice(4)))).toFixed(3).toString();
                        if (isNaN(Number(displaytext))) {
                            displaytext = "Error";
                        }
                    }
                    return;
                }
                if (cos.test(op)) {
                    if (isdegree) {
                        displaytext = Math.cos((Number(op.slice(4)) * Math.PI) / 180).toFixed(3).toString();
                        if (isNaN(Number(displaytext))) {
                            displaytext = "Error";
                        }
                    }
                    else {
                        displaytext = Math.cos((Number(op.slice(4)))).toFixed(3).toString();
                        if (isNaN(Number(displaytext))) {
                            displaytext = "Error";
                        }
                    }
                    return;
                }
                if (cosec.test(op)) {
                    if (isdegree) {
                        var ans = Math.sin((Number(op.slice(6)) * Math.PI) / 180).toFixed(3).toString();
                    }
                    else {
                        var ans = Math.sin((Number(op.slice(6)))).toFixed(3).toString();
                    }
                    displaytext = eval((1 / Number(ans)).toString()).toString();
                    if (isNaN(Number(displaytext))) {
                        displaytext = "Error";
                    }
                    return;
                }
                if (sec.test(op)) {
                    if (isdegree) {
                        var ans = Math.sin((Number(op.slice(4)) * Math.PI) / 180).toFixed(3).toString();
                    }
                    else {
                        var ans = Math.sin((Number(op.slice(4)))).toFixed(3).toString();
                    }
                    displaytext = eval((1 / Number(ans)).toString()).toString();
                    // console.log(displaytext);
                    if (isNaN(Number(displaytext))) {
                        displaytext = "Error";
                    }
                    return;
                }
                if (cot.test(op)) {
                    let ans;
                    if (isdegree) {
                        ans = Math.sin((Number(op.slice(4)) * Math.PI) / 180).toFixed(3).toString();
                    }
                    else {
                        ans = Math.sin((Number(op.slice(4)))).toFixed(3).toString();
                    }
                    displaytext = eval((1 / Number(ans)).toString()).toString();
                    if (isNaN(Number(ans))) {
                        displaytext = "Error";
                    }
                    return;
                }
                if (rt.test(op)) {
                    let element = op.split("√");
                    op = "Math.pow(" + element[0] + "," + "1/" + element[1] + ")";
                }
                if (lg.test(op)) {
                    let logvalue;
                    let element = op.split("log");
                    logvalue = Math.log(Number(element[1]));
                    op = element[0] + "*" + logvalue;
                }
                result = eval(op);
                if (isNaN(result)) {
                    displaytext = "error";
                }
                else {
                    displaytext = result;
                }
            }
            catch (e) {
                if (e instanceof SyntaxError) {
                    displaytext = "Not valid operation";
                    // displaytext="";
                }
            }
            finally {
                document.getElementById("#screen").value = displaytext;
                return;
            }
        // MEMORY FUNCTIONS
        case "ms":
            memory = displaytext;
            document.getElementById("memory").innerText = memory;
            displaytext = " ";
            document.getElementById("#screen").value = displaytext;
            return;
        case "mc":
            memory = "0";
            document.getElementById("memory").innerText = memory;
            return;
        case "mr":
            displaytext = document.getElementById("memory").innerText;
            document.getElementById("#screen").value = displaytext;
            return;
        case "mr":
            displaytext = document.getElementById("memory").innerText;
            document.getElementById("#screen").value = displaytext;
            return;
        case "m+":
            displaytext = displaytext + "+" + document.getElementById("memory").innerText;
            var result = eval(displaytext);
            memory = result;
            document.getElementById("memory").innerText = memory;
            document.getElementById("#screen").value = result;
            return;
        case "m-":
            displaytext = document.getElementById("memory").innerText + "-" + displaytext;
            var result = eval(displaytext);
            memory = result;
            document.getElementById("memory").innerText = memory;
            document.getElementById("#screen").value = result;
            return;
        // FUNTIONS HANDLER (FLOOR, RANDOM,CEIL,ABS)
        case "floor":
            var y = eval(displaytext);
            //  let r:string;
            if (isNaN(y)) {
                r = "Error";
            }
            else {
                r = Math.floor(eval(y)).toString();
            }
            document.getElementById("#screen").value = r;
            return;
        case "ceil":
            var y = eval(displaytext);
            //  let r:string;
            if (isNaN(y)) {
                r = "Error";
            }
            else {
                r = (Math.ceil(eval(y))).toString();
            }
            document.getElementById("#screen").value = r;
            return;
        case "rand":
            displaytext = Math.random().toFixed(3);
            document.getElementById("#screen").value = displaytext;
            return;
        // ANY OTHER KEY PRESS HANDLER
        default:
            displaytext += input;
            evalinputstring = displaytext;
            document.getElementById("#screen").value = displaytext;
    }
}
//FUNCTION FOR HANDLER PLUS/MINUS TOGGLER
function toggleplus() {
    let isplus;
    let str = document.getElementById("#screen").value;
    if (str.includes("-")) {
        isplus = false;
    }
    else {
        isplus = true;
    }
    if (!isplus) {
        isplus = true;
        let z = document.getElementById("#screen").value;
        let r = eval(z);
        r = r.toString();
        console.log(r);
        if (r.includes("-")) {
            displaytext = Math.abs(r).toString();
        }
    }
    else {
        isplus = false;
        let z = document.getElementById("#screen").value;
        let r = eval(z);
        r = r.toString();
        if (!r.includes("-")) {
            displaytext = "-" + displaytext;
        }
    }
    document.getElementById("#screen").value = displaytext;
    return;
    //   let i:number=str.length;
    //   let updatedDisplay:string=""; 
    //   for(;i>=0;i--){
    //  if((str[i]>='0' && str[i]!<='9') ||str[i]=='.'){
    //   }else{
    //     break;
    //   }
    //   }
    //   updatedDisplay=str.slice(0,i-1)+"-"+str.slice(i-1,str.length)
    //   displaytext=updatedDisplay;
    //   (document.getElementById("#screen") as HTMLInputElement).value=displaytext;
}
//FUNCTION FOR THE 2ND BUTTON TOGGLER
function toggle() {
    // let toggle:HTMLElement = document.querySelector(".toggle")!;
    // isToogle = true;
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
    }
    else {
        square.classList.add("hide");
        cube.classList.remove("hide");
    }
    if (sqrt.classList.contains("hide")) {
        sqrt.classList.remove("hide");
        cbrt.classList.add("hide");
    }
    else {
        sqrt.classList.add("hide");
        cbrt.classList.remove("hide");
    }
    if (xpowery.classList.contains("hide")) {
        xpowery.classList.remove("hide");
        yrootx.classList.add("hide");
    }
    else {
        xpowery.classList.add("hide");
        yrootx.classList.remove("hide");
    }
    if (tenpowerx.classList.contains("hide")) {
        tenpowerx.classList.remove("hide");
        twopowerx.classList.add("hide");
    }
    else {
        tenpowerx.classList.add("hide");
        twopowerx.classList.remove("hide");
    }
    if (log.classList.contains("hide")) {
        log.classList.remove("hide");
        xlogy.classList.add("hide");
    }
    else {
        log.classList.add("hide");
        xlogy.classList.remove("hide");
    }
    if (ln.classList.contains("hide")) {
        ln.classList.remove("hide");
        epowerx.classList.add("hide");
    }
    else {
        ln.classList.add("hide");
        epowerx.classList.remove("hide");
    }
}
//FUNCTION FOR DEGREE TO RADIAN AND RADIAN TO DEGREE TOGGLER
function toggledeg() {
    let degree = document.getElementById("#DEG");
    if (isdegree) {
        degree.innerText = "RAD";
        isdegree = false;
        console.log(isdegree);
    }
    else {
        degree.innerText = "DEG";
        isdegree = true;
        console.log(isdegree);
    }
}
// DROP DOWN FOR TRIGONOMETRY MENU
function trigooptionsadd() {
    let trigodrop = document.querySelector(".trigo-dropdown").classList.contains("hide");
    if (trigodrop) {
        console.log(trigodrop);
        document.querySelector(".trigo-dropdown").classList.remove("hide");
        document.querySelector(".func-dropdown").classList.add("hide");
    }
    else {
        console.log(trigodrop);
        document.querySelector(".trigo-dropdown").classList.add("hide");
    }
}
// FUNCTION FOR FUNCTION DROPDOWN MENU
function functionoptionsadd() {
    let funcdrop = document.querySelector(".func-dropdown").classList.contains("hide");
    if (funcdrop) {
        document.querySelector(".func-dropdown").classList.remove("hide");
        document.querySelector(".trigo-dropdown").classList.add("hide");
    }
    else {
        document.querySelector(".func-dropdown").classList.add("hide");
    }
}
function convertString(inputstring) {
    let regexAndFunction = [
        {
            regPattern: /e/g,
            callFunction: "2.718281828" // Call this string as a replacement
        },
        {
            regPattern: /π/g,
            callFunction: "3.14159265359" // Call this string as a replacement
        },
        {
            regPattern: /(\d+\.?\d*)\√(\-?\d+\.?\d*)/g,
            callFunction: "getRoot($1, $2)" // Call the getRoot() function with the matched numbers as arguments
        },
        {
            regPattern: /sin\((\d+[\/\.]?\d*)\)/g,
            callFunction: false ? "Math.sin($1)" : "Math.sin($1*(3.14/180))" // Call the getSin() function with the matched number as an argument
        },
        {
            regPattern: /sin-1\((\d+[\/\.]?\d*)\)/g,
            callFunction: "getSinIn($1)" // Call the getSinIn() function with the matched number as an argument
        },
        {
            regPattern: /cos\((\d+[\/\.]?\d*)\)/g,
            callFunction: "Math.cos($1)" // Call the getCos() function with the matched number as an argument
        },
        {
            regPattern: /cos-1\((\d+[\/\.]?\d*)\)/g,
            callFunction: "getCosIn($1)" // Call the getCosIn() function with the matched number as an argument
        },
        {
            regPattern: /tan\((\d+[\/\.]?\d*)\)/g,
            callFunction: "Math.tan($1)" // Call the getTan() function with the matched number as an argument
        },
        {
            regPattern: /tan-1\((\d+[\/\.]?\d*)\)/g,
            callFunction: "getTanIn($1)" // Call the getTanIn() function with the matched number as an argument
        },
        // {
        //     regPattern: /(\d+\.?\d*)\!/g, // Regular expression to match a factorial expression
        //     callFunction: "factorial($1)" // Call the factorial() function with the matched number as an argument
        // },
        {
            regPattern: /log\((\d+\.?\d*)\)/g,
            callFunction: "Math.log10($1)" // Call the getLog() function with the matched number as an argument
        },
        {
            regPattern: /log2\((\d+\.?\d*)\)/g,
            callFunction: "Math.log2($1)" // Call the getLog2() function with the matched number as an argument
        },
        {
            regPattern: /ln\((\d+\.?\d*)\)/g,
            callFunction: "Math.log($1)" // Call the getLn() function with the matched number as an argument
        },
    ];
    let convertedString = inputstring;
    regexAndFunction.map((regObject) => {
        convertedString = convertedString.replace(regObject.regPattern, regObject.callFunction);
    });
    return convertedString;
}
// export{}
