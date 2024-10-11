let resultDisplayed = false;
let save=localStorage.getItem("save1")||"0";
document.getElementById('display').value=save;
function clearDisplay() {
    localStorage.removeItem("save1");
    document.getElementById('display').value = "";
    resultDisplayed = false; // Reset the flag when the display is cleared
}

function backspace() {
    save = document.getElementById("display");
    save.value = save.value.slice(0, -1);
    localStorage.setItem("save1",save.value)
    console.log(save.value)
}

function appendToDisplay(v) {
     save = document.getElementById('display');
    const operators = ['+', '-', '*', '/', '%'];

    if (resultDisplayed && operators.includes(v)) {
        save.value += v;
        resultDisplayed = false;
    } 
    else if (resultDisplayed && !operators.includes(v)){
        save.value = v;
        resultDisplayed = false;
    }
    else{
        save.value += v;
    }
    localStorage.setItem("save1",save.value)
    console.log(save.value)
}
function calculateResult() {
     save = document.getElementById('display');
    try {
        save.value = eval(save.value);
        resultDisplayed = true;
    } catch (error) {
        save.value = 'Error';
        resultDisplayed = true;
    }
 localStorage.setItem("save1",save.value)
 console.log(save.value)
}
