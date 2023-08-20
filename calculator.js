var display = document.getElementById("input-text");
function displayFunction(number){
    display.value += number;
}

function clearFunction(){
    display.value = " "
}
function deleteFunction(){
    display.value = display.value.slice(0,-1);
}
function calculate(){
    try {
        display.value = eval(display.value);        
    } catch (error) {
    
       display.value = "Invalid input"
    }
    
}
