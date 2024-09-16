function calculateTriangleArea(){
    const base = getInputValuebyID('triangle-base');
    const height = getInputValuebyID('triangle-height');

    const area = 0.5*base*height;
    setInnerTextById('triangle-area',area)
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