let backPassword = document.getElementById("backPass");
let cardNumber = document.getElementById("cardNumber");
let cardName = document.getElementById("name");
let expDateMonth = document.getElementById("expDateMonth");
let expDateYear = document.getElementById("expDateYear");
// Get the input fields
let cardHolderName = document.getElementById("cardHolderName");
let cardHolderNumber = document.getElementById("cardHolderNumber");
let month = document.getElementById("month");
let year = document.getElementById("year");
let cvcNumber = document.getElementById("cvcNumber");
let confirmBtn = document.getElementById("confirmBtn");
// Checking for errors
let cardInfo = document.getElementsByClassName("cardInformation");
let errorFields = document.getElementsByClassName("error");
let Numbererror = document.getElementById("numFieldError");

// Numbers Field only expect numbers
function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}

// Get the values of eachinput field
cardHolderName.addEventListener("keyup", function () {
  cardName.innerHTML = cardHolderName.value;
});
cardHolderNumber.addEventListener("keyup", function () {
  cardNumber.value = cardHolderNumber.value;
});
month.addEventListener("keyup", function () {
  expDateMonth.textContent = month.value;
});
year.addEventListener("keyup", function () {
  expDateYear.textContent = year.value;
});
cvcNumber.addEventListener("keyup", function () {
  backPassword.value = cvcNumber.value;
});
// -------------

// Check input field format

confirmBtn.addEventListener("click", function () {
  let errorCheck=0;
  for (let i = 0; i < cardInfo.length; i++) {
    if (cardInfo[i].value == "") {
      errorFields[i].style.visibility = "visible";
      cardInfo[i].style.border = "1px solid red";
      errorCheck=1;
    } else {
      errorFields[i].style.visibility = "hidden";
      cardInfo[i].style.border = "1px solid hsl(270, 3%, 87%)";
    
    }
  }

  //check for the number field format
 
  let x = cardNumber.value;
  if (x.length < 16) {
    cardHolderNumber.focus();
    Numbererror.style.visibility = "visible";
    cardHolderNumber.style.border = "1px solid red";
    errorCheck=1;
  } else {
    Numbererror.style.visibility = "hidden";
    cardHolderNumber.style.border = "1px solid hsl(270, 3%, 87%)";
  
  }
  if (errorCheck === 0) {
    document.querySelector(".info").classList.add("hide");
    document.querySelector(".submitContainer").classList.remove("hide");
  }
});

document.getElementById("continueBtn").addEventListener("click", function () {
  document.querySelector(".info").classList.remove("hide");
  document.querySelector(".submitContainer").classList.add("hide");
  cardInfo[1].reset();
});
