function QI(x, x_mid, x_up) {
    return x.map((xi, i) => Math.min(100, 100*Math.abs(xi - x_mid[i]) / (x_up[i] - x_mid[i])));
  }

function result(x) {
    if (x < 30) {
      return 'Poor';
    } else if (x < 50) {
      return 'Marginal';
    } else if (x < 80) {
      return 'Fair';
    } else {
      return 'Good';
    }
  }

  function choose_style(x) {
    if (x < 30) {
      return 'red';
    } else if (x < 50) {
      return 'brown';
    } else if (x < 80) {
      return 'yellow';
    } else {
      return 'green';
    }
  }

document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();
    //Low Up parametrs
    const p_up=[9,5,45,10,1500,350,500,0.3,0.7,1]
    const p_mid=[7.5,0,0,7,875,0,0,0,0,0]
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
    const parametrs=[ph,oxidizing,no3,hardness,tss,cl,so4,fe,f,cu]
    const si=QI(parametrs,p_mid,p_up)
    const ss = si.map(value => Math.exp(value / 100)-1);
    const S = ss.reduce((acc, val) => acc + val, 0);
    const w = ss.map(value => value / S);
    const wqi = w.reduce((acc, wi,i)=>acc+wi*si[i],0);
    const WQI = 100-Math.max(0,wqi);

    // Display the result in the result box
    const resultBox = document.getElementById('result-box');
    resultBox.innerText =  WQI.toFixed(0)+'  '+result(WQI); //

    resultBox.classList.remove('green', 'yellow', 'brown', 'red');
    const chosenStyle = choose_style(WQI);
    resultBox.classList.add(chosenStyle);
});

document.querySelector('button[type="reset"]').addEventListener('click', function() {
    // Clear the result box and reset its color when the form is reset
    const resultBox = document.getElementById('result-box');
    resultBox.innerText = '';
    resultBox.classList.remove('green', 'yellow', 'brown', 'red');
});

function toggleNavBar() {
  var navbar = document.getElementById("navbar");

  // Toggle the active class to show or hide the links
  if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
  } else {
      navbar.classList.add("active");
  }
}
