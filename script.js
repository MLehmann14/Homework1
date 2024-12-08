const principalBox = document.querySelector("#principal");
const aprSlider = document.querySelector("#apr");
const aprText = document.querySelector("#aprText");
const yearsBox = document.querySelector("#years");
const periodSelect = document.querySelector("#period");
const accumulatedOutput = document.querySelector("#accumulated");
const amountOutput = document.querySelector("#amount");

aprSlider.addEventListener("input", () => {
  aprText.textContent = aprSlider.value;
});

function calculate() {
  const principal = parseFloat(principalBox.value);
  const apr = parseFloat(aprSlider.value) / 100;
  const years = parseFloat(yearsBox.value);
  const period = parseInt(periodSelect.value);

  const amount = principal * Math.pow(1 + apr / period, period * years);
  const interest = amount - principal;

  accumulatedOutput.textContent = interest.toFixed(2); // Limit the output to 2 decimal places
  amountOutput.textContent = amount.toFixed(2); // Limit the output to 2 decimal places
}

document.querySelector("#calculateButton").addEventListener("click", calculate);
