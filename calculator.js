function updateDisplay(value) {
    document.clc.display.value += value;
}

function clearDisplay() {
    document.clc.display.value = '';
}

function calculate() {
    try {
        document.clc.display.value = eval(document.clc.display.value);
    } catch (error) {
        document.clc.display.value = 'Error';
    }
}