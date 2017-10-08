//validate.js

window.addEventListener("load", createEventListeners, false);

//Global variables
var formValid = true;

//validate email
function validateEmail(){
  var emailValid = true;// used for try/throw/catch
  var email = document.getElementById("inputEmail");
  var patt = /@/;
  var patt2 = /\..{2,6}$/;
  var error = document.getElementById("errorMsg1");

  try {
    if(email.value === "" || patt.test(email.value) === false
    || patt2.test(email.value) === false){
      email.style.background = "pink";
      emailValid = false;
    }
    else {
      email.style.background = "white";
    }
    if (emailValid === false){
      throw "Field is empty or data is improper format";
    }
    else {
      error.style.display = "none";
      error.innerHTML = "";
    }
  }
  catch(msg){
    error.style.display = "block";
    error.innerHTML = msg;
    formValid = false;
  }
}

//validate name
function validateName(){
  var nameValid = true;
  var name = document.getElementById("inputName");
  var error = document.getElementById("errorMsg2");

  try {
    if (name.value === "" || name.value.length < 6){
      name.style.background = "pink";
      nameValid = false;
    }
    else {
      name.style.background = "white";
    }
    if (nameValid === false){
      throw "Field is empty or name must have at least 6 characters";
    }
    else {
      error.style.display = "none";
      error.innerHTML = "";
    }
  }
   catch(msg){
     error.style.display = "block";
     error.innerHTML = msg;
     formValid = false;
   }
}

//validate phone
function validatePhone(){
  var phone = document.getElementById("inputPhone");
  var patt = /^[2-9]\d{2}-\d{3}-\d{4}$/;
  var error = document.getElementById("errorMsg3");
  var phoneValid = true;

  try {
    if (phone.value === "" || patt.test(phone.value) === false){
      phone.style.background = "pink";
      phoneValid = false;
    }
    else {
      phone.style.background = "white";
    }
    if (phoneValid === false){
      throw "Field is empty or data is improper format"
    }
    else {
      error.style.display = "none";
      error.innerHTML = "";
    }
  }
  catch(msg){
    error.style.display = "block";
    error.innerHTML = msg;
    formValid = false;
  }
}

//validate radios
function validateRadios(){
  var radios = document.getElementsByName("optionRadio");
  var error = document.getElementById("errorMsg4");
  var radioValid = true;

  try {
    if (!radios[0].checked && !radios[1].checked){
       for (i = 0; i < 2; i++){
         radios[i].style.outline = "1px solid red";
       }
       radioValid = false;
    }
    else {
      for (i = 0; i < 2; i++){
        radios[i].style.outline = "";
      }
    }
    if (radioValid === false){
      throw "One option must be selected"
    }
    else {
      error.style.display = "none";
      error.innerHTML = "";
    }
  }
  catch(msg){
    error.style.display = "block";
    error.innerHTML = msg;
    formValid = false;
  }
}

//validate form
function validateForm(sbmit){
  var error = document.getElementById("errorMsg5");
  
  if (sbmit.preventDefault){
    sbmit.preventDefault(); //prevent invalid form from submitting
  }
  formValid = true; //reset value for revalidation

  validateEmail();
  validateName();
  validatePhone();
  validateRadios();

  if (formValid === true){
    error.innerHTML = "";
    error.style.display = "";
    document.getElementById("form1").submit();
  }

  else {
    error.innerHTML = "Please correct indicated fields and resubmit";
    error.style.display = "block";
  }
}

//Event listeners
function createEventListeners(){
var form = document.getElementById("form1");
form.addEventListener("submit", validateForm, false);

}
