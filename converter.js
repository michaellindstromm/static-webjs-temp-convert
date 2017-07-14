let button = document.getElementById("converter");
let radioFar = document.getElementById("far-radio")
let radioCel = document.getElementById("cel-radio")
// console.log(radio.value);

function toCelsius () {
    let far = document.getElementById("temp-input").value;
    let cel = (far - 32) * (5/9);
    if (cel > 32) {
      document.getElementById("calculated-temp").innerHTML = `<p>${cel} ºC</p>`.fontcolor("red");
      return cel;
    } else if (cel < 0) {
      document.getElementById("calculated-temp").innerHTML = `<p>${cel} ºC</p>`.fontcolor("blue");
      return cel;
    } else {
      document.getElementById("calculated-temp").innerHTML = `<p>${cel} ºC</p>`.fontcolor("green");
      return cel;
    }

}

function toFahrenheit () {
  let cels = document.getElementById("temp-input").value;
  let farh = (cels *(9/5)) + 32;
  if (farh > 90) {
    document.getElementById("calculated-temp").innerHTML = (`<p>${farh}ºF</p>`).fontcolor("red");
    return farh;
  } else if (farh < 32) {
    document.getElementById("calculated-temp").innerHTML = `<p>${farh} ºF</p>`.fontcolor("blue");
    return farh;
  } else {
    document.getElementById("calculated-temp").innerHTML = `<p>${farh} ºF</p>`.fontcolor("green");
    return farh;
  }
}



// Get a reference to the button element in the DOM



// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  if (radioCel.checked === true) {
    toCelsius();
  } else {
    toFahrenheit();
  }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
