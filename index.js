function updateCalcScreen(value){
    document.getElementById("CalcScreen").value += value;
}

function calculateAns(){
    document.getElementById("CalcScreen").value = eval( document.getElementById("CalcScreen").value);
}

function clearScreen(){
    document.getElementById("CalcScreen").value = '';
}

function deleteScreen(){
    document.getElementById("CalcScreen").value =  document.getElementById("CalcScreen").value.toString().slice(0, -1);
}