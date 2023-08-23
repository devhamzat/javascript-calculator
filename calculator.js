var errorMessage = "syntax error"
function displayFunction(displayValue){
    var display = document.getElementById("input-text");
    if(displayValue === '.' && (display.value.endsWith('.')|| display.value ==='')){
        return "";
    }
    if(displayValue === '+' && display.value.includes('+')){
        return "";
    }
    if(displayValue === '-' && display.value.includes('-')){
        return "";
    }
    if(displayValue === '*' && display.value.includes('*')){
        return "";
    }if(displayValue === '/' && display.value.includes('/')){
        return "";
    }
    display.value += displayValue
}
function calcButton(){
    var display = document.getElementById("input-text");
    try{
        display.value = eval(display.value);
    }catch(error){
        alert("syntax error ")
    }
    }
   
function deleteFunction(){
    var display = document.getElementById("input-text");
    display.value = display.value.slice(0,-1);
}
function clearFunction(){
    var display = document.getElementById("input-text");
    display.value = "";
}



