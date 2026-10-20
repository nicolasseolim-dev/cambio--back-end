// Valor de 1 USD em cada moeda (cotações aproximadas — atualize quando quiser)
const RATES = {
  USD: 1,
  BRL: 5.4,
  EUR: 0.92
};

const amount = document.getElementById("amount");
const from = document.getElementById("from");
const to = document.getElementById("to");
const rate = document.getElementById("rate");
const output = document.getElementById("output");

function format(value, currency) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currency
  }).format(value);
}

function convert() {
  const value = parseFloat(amount.value);
  const unit = RATES[to.value] / RATES[from.value];

  rate.textContent = `1 ${from.value} = ${unit.toFixed(4)} ${to.value}`;
  output.textContent = isNaN(value) ? "—" : format(value * unit, to.value);
}

document.getElementById("swap").addEventListener("click", () => {
  const temp = from.value;
  from.value = to.value;
  to.value = temp;
  convert();
});

amount.addEventListener("input", convert);
from.addEventListener("change", convert);
to.addEventListener("change", convert);

convert();