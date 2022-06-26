class Calculator{
    constructor(operand1, operand2){
        this.operand1 = operand1;
        this.operand2 = operand2;
    }
    addNumber() {
        return this.operand1 + this.operand2;
    }
    substractNumber(){
        return this.operand1 - this.operand2;
    }
    multiplyNumber(){
        return this.operand1 * this.operand2;
    }
    divideNumber(){
        return this.operand1 / this.operand2;
    }
}

function invokeCalculator(event){

    console.log(event);
    let operand1 = document.querySelector("form div input#operand-1");
    let operand2 = document.querySelector("form div input#operand-2");
    let operator = document.querySelector("form div input#operator");

    let error = document.querySelector("form div p span#error");
    let output = document.querySelector("form div output span#result");

    let allowed_operators = ["+", "-", "*", "/"];

    console.log(operand1, operand2, operator, error, output);

    if (!operand1 || operand1.value.trim() == ""){
        error.textContent = "Operand 1 is empty.";
        error.style.display = "block";
    }
    else if (!operand2 || operand2.value.trim() == ""){
        error.textContent = "Operand 2 is empty.";
        error.style.display = "block";
    }
    else if (!operator || operator.value.trim() == ""){
        error.textContent = "Operator not choosen.";
        error.style.display = "block";
    }
    else if ( !allowed_operators.find( (x) => { return x == operator.value} ) ){
        error.textContent = "Invalid operator!";
        error.style.display = "block";
    }
    else{
        error.style.display = "none";
        let op1 = Number.parseFloat(operand1.value), op2 = Number.parseFloat(operand2.value), operator_symbol = operator.value;
        let calc = new Calculator(op1, op2);
        
        switch(operator_symbol){
            case '+': 
                output.textContent = calc.addNumber();
                break;
            case '-':
                output.textContent = calc.substractNumber();
                break;
            case '*':
                output.textContent = calc.multiplyNumber();
                break;
            case '/':
                output.textContent = calc.divideNumber();
                break;
        }
    }

    return false;
}

document.querySelector("form div p button#calculate").addEventListener('click', invokeCalculator);