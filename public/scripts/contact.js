/*
    File: contact.js
    Aislinn Richardson
    301146892
    Date: June 4 2023
*/

var submitInformation = document.getElementById("submitInformation");
submitInformation.addEventListener("click", submit);

function submit () {
    //creates a variable to store information
    var Person = []

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const textMessage = document.getElementById('textMessage').value;

    //adds personal information to object to store
    var personInformation = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        textMessage: textMessage
      };
      
}

