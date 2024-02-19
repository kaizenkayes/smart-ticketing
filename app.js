let btnCount = 0;
let tiketsPrices = 0;
let grandTotal = 0;
let perPresentSeatCount = 1;
let perseatleftCount = 8;

const seatBtn = document.querySelectorAll("#seatBtn");
const inputField = document.getElementById("input");
for (const btn of seatBtn) {
  btn.addEventListener("click", function (e) {
    // ? Set the background color of the button to a specific shade of green
    btn.style.backgroundColor = "#1DD100";
    // ? Disable the button
    btn.setAttribute("disabled", true);

    // ? Increment the button click count
    btnCount++;

    if (btnCount > 3) {
      inputField.removeAttribute("disabled");
    }

    if (btnCount > 4) {
      alert("Allready you have booked all the seats");
      btn.style.backgroundColor = "";
    } else {
      // ? Set paragraph to the text inside the clicked element
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      p1.innerText = e.target.innerText;
      p2.innerHTML = "economy";
      p3.innerHTML = "550";
      const titleContainer = document.getElementById("titleContainer");
      titleContainer.appendChild(p1);
      titleContainer.appendChild(p2);
      titleContainer.appendChild(p3);

      // ? Get reference to the HTML element displaying the totalTickets  price and totalgrandPrice  price

      const totalTiketsPrice = document.getElementById("totalPrice");
      const price = parseFloat(
        document.getElementById("tiketsPrice").innerText
      );
      const grandTotalPrice = document.getElementById("grandTotal");
      tiketsPrices += price;
      grandTotal += price;
      // ? Update the displayed total ticketsPrice
      totalTiketsPrice.innerText = tiketsPrices;
      // ? Update the displayed total GrandTotalPrice
      grandTotalPrice.innerText = grandTotal;

      // ? Increment and display the count of per presentSeat
      const perPresentSeat = document.getElementById("perPresentSeat");
      perPresentSeat.innerText = perPresentSeatCount++;

      // ? Decrement and display the count of per seatLeft
      const perseatleft = document.getElementById("perseatleft");
      perseatleft.innerText = --perseatleftCount;
    }
  });
}

// ? Apply button and Hidden input field and Grand total price display
const applyBtn = document.getElementById("applyBtn");
const inputHidden = document.getElementById("inputHidden");
applyBtn.addEventListener("click", function () {
  const couponElementInp = document.getElementById("input").value;

  if (tiketsPrices >= 2200) {
    if (couponElementInp === "Couple 20") {
      const disCountPrice = tiketsPrices * 0.2;
      const grandTotalPrice = document.getElementById("grandTotal");
      grandTotalPrice.innerText = grandTotal - disCountPrice;
      inputHidden.classList.add("hidden");
    } else if (couponElementInp === "NEW15") {
      const disCountPrice = tiketsPrices * 0.15;
      const grandTotalPrice = document.getElementById("grandTotal");
      grandTotalPrice.innerText = grandTotal - disCountPrice;
      inputHidden.classList.add("hidden");
    } else {
      alert("Invalide Coupon");
    }
  }
});

// ? Add the input and enable/disable the Next button
const yourNameInp = document.getElementById("input2");
const phoneNumberInp = document.getElementById("input3");
yourNameInp.addEventListener("input", checkInp);
phoneNumberInp.addEventListener("input", checkInp);
const nextBtn = document.getElementById("nextBtn");
function checkInp() {
  const nameValue = yourNameInp.value.trim();
  const phoneValue = phoneNumberInp.value.trim();

  if (nameValue !== "" && phoneValue !== "") {
    nextBtn.disabled = false;
  } else {
    nextBtn.disabled = true;
  }
}

// ? Add Modall
nextBtn.addEventListener("click", function () {
  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");

  const body = document.getElementById("body");

  body.classList.add("hidden");
});

// ? Add home screen
const continueBtn = document.getElementById("continueBtn");
continueBtn.addEventListener("click", function () {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
  const body = document.getElementById("body");
  body.classList.remove("hidden");
});
