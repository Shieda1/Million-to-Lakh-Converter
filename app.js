// https://www.omnicalculator.com/conversion/million-to-lakh

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const lakhRadio = document.getElementById('lakhRadio');
const millionRadio = document.getElementById('millionRadio');

let lakh;
let million = v; 

// labels of the inpust
const variable = document.getElementById('variable');

lakhRadio.addEventListener('click', function() {
  variable.textContent = 'Million';
  million = v;
  result.textContent = '';
});

millionRadio.addEventListener('click', function() {
  variable.textContent = 'Lakh';
  lakh = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(lakhRadio.checked)
    result.textContent = `Lakh = ${computelakh().toFixed(5)}`;

  else if(millionRadio.checked)
    result.textContent = `Million = ${computemillion().toFixed(5)}`;
})

// calculation

function computelakh() {
  return Number(million.value) * 10;
}

function computemillion() {
  return Number(lakh.value) / 10;
}