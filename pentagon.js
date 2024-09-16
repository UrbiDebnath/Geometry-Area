function calculatePentagonArea(){
    const p = getInputValuebyID('pentagon-perimeter');
    const a = getInputValuebyID('pentagon-apothem');

    const area = 0.5*p*a;
    setInnerTextById('pentagon-area',area)
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