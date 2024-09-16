function calculateRhombusArea(){
    const d1 = getInputValuebyID('rhombus-length1');
    const d2 = getInputValuebyID('rhombus-length2');

    const area = 0.5*d1*d2;
    setInnerTextById('rhombus-area',area)
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