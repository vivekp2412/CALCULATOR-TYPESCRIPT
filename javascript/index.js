"use strict";
let displaytext = " ";
let evalinputstring = " ";
let isdegree = true;
let memory = "";
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
    let i = eval(input);
    return Math.abs(i);
}
function square(input) {
    return eval(input);
}
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
    try {
        if (input === 0) {
            return 1;
        }
        return input * factorial(input - 1);
    }
    catch (_a) {
        return Infinity;
    }
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
            displaytext = document.getElementById("#screen").value;
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
            displaytext += "log10(";
            document.getElementById("#screen").value = displaytext;
            return;
        //LN FUNCTION
        case "ln":
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
        case "log2":
            displaytext = displaytext + "log2(";
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
            let finalResult;
            try {
                let op = document.getElementById("#screen").value;
                finalResult = eval(convertString(op));
                if (isNaN(Number(finalResult))) {
                    showErrorMessage("error");
                }
                else {
                    displaytext = finalResult.toString();
                }
                document.getElementById("#screen").value = finalResult.toString();
            }
            catch (e) {
                if (e instanceof SyntaxError) {
                    showErrorMessage("Not a valid operation");
                }
            }
            break;
        // Trigonometry
        case "sin":
            displaytext += "sin(";
            document.getElementById("#screen").value = displaytext;
            return;
        case 'cos':
            displaytext += "cos(";
            document.getElementById("#screen").value = displaytext;
            return;
        case 'tan':
            displaytext += "tan(";
            document.getElementById("#screen").value = displaytext;
            return;
        case 'cosec':
            displaytext += "cosec(";
            document.getElementById("#screen").value = displaytext;
            return;
        case 'sec':
            displaytext += "sec(";
            document.getElementById("#screen").value = displaytext;
            return;
        case 'cot':
            displaytext += "cot(";
            document.getElementById("#screen").value = displaytext;
            return;
        // MEMORY FUNCTIONS
        case "ms":
            let expression = document.getElementById("#screen").value;
            console.log(expression);
            memory = eval(expression);
            document.getElementById("memory").innerText = memory;
            displaytext = memory;
            document.getElementById("#screen").value = displaytext;
            return;
        case "mc":
            memory = " ";
            document.getElementById("memory").innerText = memory.toString();
            return;
        case "mr":
            displaytext = document.getElementById("memory").innerText;
            document.getElementById("#screen").value = displaytext;
            return;
        case "m+":
            displaytext = displaytext + "+" + document.getElementById("memory").innerText;
            var result = eval(displaytext);
            memory = result;
            document.getElementById("memory").innerText = memory.toString();
            document.getElementById("#screen").value = result;
            return;
        case "m-":
            displaytext = document.getElementById("#screen").value;
            memory = document.getElementById("memory").innerText;
            displaytext = (memory) + "-" + "(" + displaytext + ")";
            var result = eval(displaytext);
            document.getElementById("memory").innerText = result;
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
    let log2 = document.querySelector(".log2");
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
        log2.classList.add("hide");
    }
    else {
        log.classList.add("hide");
        log2.classList.remove("hide");
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
    }
    else {
        degree.innerText = "DEG";
        isdegree = true;
    }
}
// DROP DOWN FOR TRIGONOMETRY MENU
function trigooptionsadd() {
    let trigodrop = document.querySelector(".trigo-dropdown").classList.contains("hide");
    if (trigodrop) {
        document.querySelector(".trigo-dropdown").classList.remove("hide");
        document.querySelector(".func-dropdown").classList.add("hide");
    }
    else {
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
            regPattern: /sin\((\d+[+\-\/\.]?\d*)\)/g,
            callFunction: isdegree ? "Math.sin(($1)*(3.14/180))" : "Math.sin($1)" // Call the getSin() function with the matched number as an argument
        },
        {
            regPattern: /cosec\((\d+[+\-\/\.]?\d*)\)/g,
            callFunction: isdegree ? "(1/Math.sin($1*(3.14/180))" : "1/Math.sin($1))" // Call the getSinIn() function with the matched number as an argument
        },
        {
            regPattern: /cos\((\d+[+\-\/\.]?\d*)\)/g,
            callFunction: isdegree ? "Math.cos($1*(3.14/180))" : "Math.cos($1)" // Call the getCos() function with the matched number as an argument
        },
        {
            regPattern: /sec\((\d+[+\-\/\.]?\d*)\)/g,
            callFunction: isdegree ? "(1/Math.cos($1*(3.14/180))" : "1/Math.cos($1))" // Call the getCosIn() function with the matched number as an argument
        },
        {
            regPattern: /tan\((\d+[+\-\/\.]?\d*)\)/g,
            callFunction: isdegree ? "Math.tan($1*(3.14/180))" : "Math.tan($1)" // Call the getTan() function with the matched number as an argument
        },
        {
            regPattern: /cot\((\d+[+\-\/\.]?\d*)\)/g,
            callFunction: isdegree ? "(1/Math.tan($1*(3.14/180)))" : "(1/Math.tan($1))" // Call the getTanIn() function with the matched number as an argument
        },
        {
            regPattern: /log10\((\d+\.?\d*)\)/g,
            callFunction: "Math.log10($1)" // Call the getLog() function with the matched number as an argument
        },
        {
            regPattern: /log2\((\d+\.?\d*)\)/g,
            callFunction: "Math.log2($1)" // Call the getLog2() function with the matched number as an argument
        },
        {
            regPattern: /log\((\d+\.?\d*)\)/g,
            callFunction: "Math.log($1)" // Call the getLn() function with the matched number as an argument
        },
    ];
    let convertedString = inputstring;
    regexAndFunction.map((regObject) => {
        convertedString = convertedString.replace(regObject.regPattern, regObject.callFunction);
    });
    return convertedString;
}
function showErrorMessage(message) {
    displaytext = " ";
    document.getElementById("#screen").value = displaytext;
    document.getElementById("errorscreen").innerText = message;
    setTimeout(() => {
        document.getElementById("errorscreen").innerText = " ";
    }, 1000);
}
// export{}
