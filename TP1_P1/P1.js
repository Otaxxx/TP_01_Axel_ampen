const euroInput = document.querySelector('input[placeholder="Montant en Euro"]');  
const dollarInput = document.querySelector('input[placeholder="Montant en Dollar"]');
const dollarAustralienInput = document.querySelector('input[placeholder="Montant en Dollar Australien"]');

const convertEuroToDollar = (euro) => euro * 1.18; 
const convertEuroToDollarAustralien = (euro) => euro * 1.77;

euroInput.addEventListener('input', (event) => {
    const euroValue = parseFloat(event.target.value);
    if (!isNaN(euroValue)) {
        dollarInput.value = convertEuroToDollar(euroValue).toFixed(2);
        dollarAustralienInput.value = convertEuroToDollarAustralien(euroValue).toFixed(2);
    }
});

dollarInput.addEventListener('input', (event) => {
    const dollarValue = parseFloat(event.target.value);
    if (!isNaN(dollarValue)) {
        const euroValue = dollarValue / 1.18; 
        euroInput.value = euroValue.toFixed(2);
        dollarAustralienInput.value = convertEuroToDollarAustralien(euroValue).toFixed(2);
    }
});

dollarAustralienInput.addEventListener('input', (event) => {
    const dollarAustralienValue = parseFloat(event.target.value);
    if (!isNaN(dollarAustralienValue)) {
        const euroValue = dollarAustralienValue / 1.77; 
        euroInput.value = euroValue.toFixed(2);
        dollarInput.value = convertEuroToDollar(euroValue).toFixed(2);
    }
});
