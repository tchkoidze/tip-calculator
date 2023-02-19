let billInput = document.getElementsByClassName("bill-input")[0];
let tipButtons = document.getElementsByClassName("tip-button");
let customInput = document.getElementById("custom-input");
let error0 = document.getElementsByClassName("error")[0];
let numOfPeople = document.getElementById("people-input");
let tipPePerson = document.getElementById("tip-per-person");
let totalPerPerson = document.getElementById("total-per-person");
let resetBtn = document.getElementsByClassName("reset-btn")[0];

let color;
let billAmount = 0;
let tipPercentage = 0;
let customTipAmount = 0;
let numOfPerson = 0;

let tip = 0;
let total = 0;

//input ammount of tip
billInput.addEventListener("input", tackTip);
function tackTip(e) {
  billAmount = e.target.value;
  console.log(billAmount);
  if (billAmount > 0 && tipPercentage > 0 && numOfPerson > 0) {
    calculate();
  }
  return billAmount;
}

// change button color

for (let i = 0; i < tipButtons.length; i++) {
  tipButtons[i].addEventListener("click", (event) => {
    console.log(tipButtons);
    x = document.querySelector(".clicked-btn-color");
    console.log(x);
    if (x) {
      console.log(9);
      x.classList.remove("clicked-btn-color");
    }
    event.target.classList.add("clicked-btn-color");
  });
}

// chooe ammount of percentage

for (let tipBtn of tipButtons) {
  console.log(tipBtn.value);
  console.log(typeof tipBtn.value);
  tipBtn.addEventListener("click", selectkTipPercentage);

  function selectkTipPercentage(e) {
    /*if (clicked) {
      tipBtn.style.background = "#0D686D";
    }*/
    tipPercentage = +e.target.value;
    console.log(tipPercentage);
    console.log(typeof tipPercentage);
    if (billAmount > 0 && tipPercentage > 0 && numOfPerson > 0) {
      calculate();
    }
    //tipBtn.style.background = "#0D686D";
    //return tipPercentage;
  }
}

// chooe ammount of percentage by custom
customInput.addEventListener("input", (e) => {
  tipPercentage = e.target.value;
  console.log(tipPercentage);
  console.log(typeof tipPercentage);
  if (billAmount > 0 && tipPercentage > 0 && numOfPerson > 0) {
    calculate();
  }
});

//input nanumber of people

numOfPeople.addEventListener("input", takeNumOfpeople);

function takeNumOfpeople(e) {
  numOfPerson = e.target.value;
  console.log(numOfPerson);
  console.log(typeof numOfPerson);
  //return numOfPerson;
  //calculate();
  if (numOfPerson == 0) {
    error0.style.display = "block";
  } else {
    error0.style.display = "none";
  }
  if (billAmount > 0 && tipPercentage > 0 && numOfPerson > 0) {
    calculate();
  }
}

//calculate

function calculate() {
  tip = (billAmount * tipPercentage) / 100 / numOfPerson;
  //total = ((billAmount * tipPercentage) / 100 + billAmount) / numOfPerson;
  total = tip + billAmount / numOfPerson;
  tipPePerson.textContent = tip.toFixed(2);
  totalPerPerson.textContent = total.toFixed(2);
  //return console.log(z);
}

//reset
resetBtn.addEventListener("click", reset);

function reset() {
  for (let element of tipButtons) {
    element.classList.remove("clicked-btn-color");
  }
  console.log(tipButtons);

  billInput.value = "";
  numOfPeople.value = "";
  tipPePerson.textContent = "$0.00";
  tipPercentage = 0;
  totalPerPerson.textContent = "$0.00";
  error0.style.display = "none";
}

/*
for (let tipBtn of tipButtons) {
  console.log(tipBtn.value);
  console.log(typeof tipBtn.value);
  tipBtn.addEventListener("click", selectkTipPercentage);

  function selectkTipPercentage(e) {
    tipPercentage = +e.target.value;
    console.log(tipPercentage);
    console.log(typeof tipPercentage);
    tipBtn.style.background = "#0D686D";
    //return tipPercentage;
  }
}

*/
