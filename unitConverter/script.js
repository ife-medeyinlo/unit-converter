if (typeof document !== "undefined") {
    const convertBtn = document.getElementById("convert-btn");
    const inputEl = document.getElementById("number-input");
    const lengthEl = document.getElementById("length-el");
    const volumeEl = document.getElementById("volume-el");
    const massEl = document.getElementById("mass-el");
    const meterRate = 3.281;
    const feetRate = 0.305;
    const litreRate = 0.264;
    const gallonRate = 3.785;
    const kiloRate = 2.205;
    const poundRate = 0.454;


function clearTarget() {
    // if (inputEl.value == inputEl.value) {
        inputEl.value = "";
    // }
}


convertBtn.addEventListener("click", function() {
    getLength();
    getVolume(); 
    getMass();
    // console.log("Button is clicked")
})

function getLength() {
    let meterCalc = Number(inputEl.value * meterRate).toFixed(3);
    let feetCalc = Number(inputEl.value * feetRate).toFixed(3);

    let calculations;
    calculations = `
        <h2>Length (Meter/Feet)</h2>
        <p> ${inputEl.value} meters = ${meterCalc} feet | 
        ${inputEl.value} feet = ${feetCalc} meters </p>
    `
    lengthEl.innerHTML = calculations;

}


function getVolume() {
    let litreCalc = Number(inputEl.value * litreRate).toFixed(3);
    let gallonCalc = Number(inputEl.value * gallonRate).toFixed(3);

    let calculations;
    calculations = `
        <h2>Volume (Liters/Gallons)</h2>
        <p> ${inputEl.value} litres = ${litreCalc} gallons | 
        ${inputEl.value} gallons = ${gallonCalc} litres </p>
    `
    volumeEl.innerHTML = calculations;
}

function getMass() {
    let kiloCalc = Number(inputEl.value * kiloRate).toFixed(3);
    let poundCalc = Number(inputEl.value * poundRate).toFixed(3);

    let calculations;
    calculations = `
        <h2>Mass (Kilograms/Pounds)</h2>
        <p> ${inputEl.value} kilograms = ${kiloCalc} pounds | 
        ${inputEl.value} pounds = ${poundCalc} kilograms </p>
    `
    massEl.innerHTML = calculations;
}

let input = document.querySelector('#number-input'); // get the input element
input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(input); // immediately call the function

function resizeInput() {
  this.style.width = this.value.length + "ch";
}

























}