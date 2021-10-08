
// getting all the DOM elements needed for the app
// Select lists
const dropDownListFrom = document.querySelector("#selectFrom");
const dropDownListTo = document.querySelector("#selectTo");
// Button to convert
const startConversion = document.querySelector("#startConversion");
//Output P tag
const output = document.querySelector("#output");
//the amount input box
const amount = document.querySelector("#amount");

const getCurrencies = async () => {
  try {
    return await (
      await fetch(
        "https://openexchangerates.org/api/latest.json?app_id=c7f171d1499e4a71a4d358c9ed877c59"
      )
    ).json();
  } catch (e) {
    console.log("There was an error retrieving the rates. Please check your internet connection");
  }
};

var {rates} =  await getCurrencies();

for (let [key, value] of Object.entries(rates)) {
  var el = document.createElement("option");
  el.textContent = key;
  el.value = key;
  dropDownListFrom.appendChild(el);
}
for (let [key, value] of Object.entries(rates)) {
  var el = document.createElement("option");
  el.textContent = key;
  el.value = key;
  dropDownListTo.appendChild(el);
}


startConversion.addEventListener("click", () => {
  
  output.innerHTML = `${amount.value} ${dropDownListFrom.value} = ${(
    (rates[dropDownListTo.value] / rates[dropDownListFrom.value]) *
    amount.value
  ).toFixed(2)} ${dropDownListTo.value}`;
});
