document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();

    // Get values of each parameter
    const ph = parseFloat(document.getElementById('ph').value) || 0;
    const oxidizing = parseFloat(document.getElementById('oxidizing').value) || 0;
    const no3 = parseFloat(document.getElementById('no3').value) || 0;
    const hardness = parseFloat(document.getElementById('hardness').value) || 0;
    const tss = parseFloat(document.getElementById('tss').value) || 0;
    const cl = parseFloat(document.getElementById('cl').value) || 0;
    const so4 = parseFloat(document.getElementById('so4').value) || 0;
    const fe = parseFloat(document.getElementById('fe').value) || 0;
    const f = parseFloat(document.getElementById('f').value) || 0;
    const cu = parseFloat(document.getElementById('cu').value) || 0;

    // Calculate the sum of all values
    const total = ph + oxidizing + no3 + hardness + tss + cl + so4 + fe + f + cu;

    // Display the result in the result box
    const resultBox = document.getElementById('result-box');
    resultBox.innerText = 'Total: ' + total.toFixed(0); //

    // Change the result box color to green
    resultBox.style.backgroundColor = 'green';
    resultBox.style.color = 'white';
});

document.querySelector('button[type="reset"]').addEventListener('click', function() {
    // Clear the result box and reset its color when the form is reset
    const resultBox = document.getElementById('result-box');
    resultBox.innerText = '';
    resultBox.style.backgroundColor = 'white';
    resultBox.style.color = 'black';
});
