function calculateParallelogramArea(){
    const base = getInputValuebyID('parallelogram-base');
    const height = getInputValuebyID('parallelogram-height');

    const area = base*height;
    setInnerTextById('parallelogram-area',area)
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