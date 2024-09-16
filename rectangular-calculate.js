function calculateRectangleArea(){
    const width = getInputValuebyID('rectangle-width');
    const length = getInputValuebyID('rectangle-length');

    const area = width*length;
    setInnerTextById('rectangle-area',area)
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