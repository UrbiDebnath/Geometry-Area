function calculateEllipseArea(){
    const a = getInputValuebyID('ellipse-major-radius');
    const b = getInputValuebyID('ellipse-minor-radius');

    const area = 3.14*a*b;
    setInnerTextById('ellipse-area',area)
}

function getInputValuebyID(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}