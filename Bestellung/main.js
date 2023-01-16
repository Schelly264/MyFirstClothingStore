/*
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log(`Button ${button.id} was clicked!`);
        check1.classList.toggle("faded");
    });
});
*/
const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    console.log(button.classList);
    buttons.forEach(function (button) {
      button.classList.remove("button-clicked");
    });
    button.classList.add("button-clicked");
  });
});

document.querySelector(".mfcs-back-button").onclick = function () {
  location.href = "../Warenkorb/warenkorb.html";
  console.log("Callback Funktion wird aufgerufen");
};

document.querySelector(".mfcs-buy-button").onclick = function () {
  /*
  const input1 = document
    .querySelector("#text-input1")
    .addEventListener("input", function () {
      if (valid) {
        isFormValid = true;
      } else {
        isFormValid = false;
      }
      checkFormValidity();
    });

  const input2 = document
    .querySelector("#text-input2")
    .addEventListener("input", function () {
      if (valid) {
        isFormValid = true;
      } else {
        isFormValid = false;
      }
      checkFormValidity();
    });

  const input3 = document
    .querySelector("#text-input3")
    .addEventListener("input", function () {
      if (valid) {
        isFormValid = true;
      } else {
        isFormValid = false;
      }
      checkFormValidity();
    });

  const input4 = document
    .querySelector("#text-input4")
    .addEventListener("input", function () {
      if (valid) {
        isFormValid = true;
      } else {
        isFormValid = false;
      }
      checkFormValidity();
    });

  const input5 = document
    .querySelector("#text-input5")
    .addEventListener("input", function () {
      if (valid) {
        isFormValid = true;
      } else {
        isFormValid = false;
      }
      checkFormValidity();
    });

  const buttonPaypal = document
    .querySelector("#mfcs-button-paypal")
    .addEventListener("click", function () {
      isFormValid = true;
      checkFormValidity();
    });

  const buttonRechnung = document
    .querySelector("#mfcs-button-rechnung")
    .addEventListener("click", function () {
      isFormValid = true;
      checkFormValidity();
    });

  const buttonKLarna = document
    .querySelector("#mfcs-button-klarna")
    .addEventListener("click", function () {
      isFormValid = true;
      checkFormValidity();
    });

  function checkFormValidity() {
    if (isFormValid) {
      document.querySelector(".mfcs-buy-button").disabled = false;
    } else {
      document.querySelector(".mfcs-buy-button").disabled = true;
    }
  }*/
  /*
  let choosedPayment = false;
  document.querySelector("#mfcs-button-paypal").onclick = function () {
    choosedPayment = true;
    console.log(choosedPayment);
  };
  document.querySelector("#mfcs-button-rechnung").onclick = function () {
    choosedPayment = true;
  };
  document.querySelector("#mfcs-button-klarna").onclick = function () {
    choosedPayment = true;
  };*/

  const input1 = document.querySelector("#text-input1").value;
  const input2 = document.querySelector("#text-input2").value;
  const input3 = document.querySelector("#text-input3").value;
  const input4 = document.querySelector("#text-input4").value;
  const input5 = document.querySelector("#text-input5").value;

  let noInputAlert = [];
  let paymentMessage = "";
  if (
    input1 === "" ||
    input2 === "" ||
    input3 === "" ||
    input4 === "" ||
    input5 === ""
  ) {
    if (input1 === "") {
      noInputAlert.push("Straßenname");
    }
    if (input2 === "") {
      noInputAlert.push("Hausnummer");
    }
    if (input3 === "") {
      noInputAlert.push("Stadt");
    }
    if (input4 === "") {
      noInputAlert.push("Postleitzahl");
    }
    if (input5 === "") {
      noInputAlert.push("Land");
    }
    let alertMsg = `Bitte füllen Sie die folgenden Felder aus: ${noInputAlert.join(
      ", "
    )}`;
    /*
    if (!choosedPayment) {
      paymentMessage = " und wählen Sie eine Zhalungsmethode!";
      alertMsg += `${paymentMessage}\n`;
      
    }*/
    alert(alertMsg);
    noInputAlert = [];
    return;
  }

  const regStraße = /^[A-Z, a-z]+$/;
  const regHausnummer = /^[0-9]{1,4}[a-zA-Z]?$/;
  const regStadt = /^[A-Z, a-z]+$/;
  const regPostleitzahl = /^[0-9]{6}$/;
  const regLand = /^[A-Z, a-z]+$/;

  const resultStraße = document
    .querySelector("#text-input1")
    .value.match(regStraße);
  const resultHausnummer = document
    .querySelector("#text-input2")
    .value.match(regHausnummer);
  const resultStadt = document
    .querySelector("#text-input3")
    .value.match(regStadt);
  const resultPostleitzahl = document
    .querySelector("#text-input4")
    .value.match(regPostleitzahl);
  const resultLand = document
    .querySelector("#text-input5")
    .value.match(regLand);

  let invalidInput = [];
  let hintInvalidInput = [];
  if (
    resultStraße != null &&
    resultHausnummer != null &&
    resultStadt != null &&
    resultPostleitzahl != null &&
    resultLand != null //&&
    //choosedPayment
  ) {
    //setTimeout(function () {
    document.querySelector("#confirm-dialog").showModal();
    document
      .querySelector("#dialog-yes")
      .addEventListener("click", function () {
        document.querySelector("#confirm-dialog").close();
        location.href = "../AbschlussEinkauf/abschlussEinkauf.html";
        console.log("Callback Funktion wird aufgerufen");
      });

    document.querySelector("#dialog-no").addEventListener("click", function () {
      document.querySelector("#confirm-dialog").close();
    });
    //}, 500);
  } else if (
    resultStraße == null ||
    resultHausnummer == null ||
    resultStadt == null ||
    resultPostleitzahl == null ||
    resultLand == null //||
    //!choosedPayment
  ) {
    if (resultStraße == null) {
      invalidInput.push("Straßenname");
      hintInvalidInput.push(
        "Straßenname: nur Buchsstaben und Leerzeichen sind erlaubt!"
      );
    }
    if (resultHausnummer == null) {
      invalidInput.push("Hausnummer");
      hintInvalidInput.push(
        "Hausnummer: besteht aus eins bis vier Ziffern und am Ende ein Buchstabe (optional)!"
      );
    }
    if (resultStadt == null) {
      invalidInput.push("Stadt");
      hintInvalidInput.push(
        "Stadt: nur Buchsstaben und Leerzeichen sind erlaubt!"
      );
    }
    if (resultPostleitzahl == null) {
      invalidInput.push("Postleitzahl");
      hintInvalidInput.push("Postleitzahl: besteht aus sechs Ziffern!");
    }
    if (resultLand == null) {
      invalidInput.push("Land");
      hintInvalidInput.push(
        "Land: nur Buchsstaben und Leerzeichen sind erlaubt!"
      );
    }

    let alertMessage = `Folgende Felder haben eine ungültige Eingabe: ${invalidInput.join(
      ", "
    )}\n`;
    hintInvalidInput.forEach(function (element) {
      alertMessage += `- ${element}\n`;
    });
    /*
    if (
      !choosedPayment &&
      resultStraße != null &&
      resultHausnummer != null &&
      resultStadt != null &&
      resultPostleitzahl != null &&
      resultLand != null
    ) {
      alert("Wählen Sie eine Zahlungsmethode!");
    } else {
      alert(alertMessage);
    }
    */
    alert(alertMessage);
    noInputAlert = [];
    hintInvalidInput = [];
    return;
  }
};
