const form = document.getElementById("form");
const card1 = document.getElementById("container");
const card2 = document.getElementById("success-info");
const emailInput = document.getElementById("email");
const msg = document.getElementById("message");
const dismis = document.getElementById("button2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    msg.textContent = "Valid email required";
    msg.className = "error";
    emailInput.classList.add("input-eror");
  } else if (!emailRegex.test(email)) {
    msg.textContent = "Valid email required";
    msg.className = "error";
    emailInput.classList.add("input-eror");
  } else {
    card1.classList.add("hidden");
    card2.classList.remove("hidden");
  }
});

emailInput.addEventListener("focus", () => {
  emailInput.value = "ash@loremcompany.com";
});

dismis.addEventListener("click", () => {
  card2.classList.add("hidden");
  card1.classList.remove("hidden");
  emailInput.value = "";
  emailInput.classList.remove("input-eror");
  msg.textContent = "";
  msg.className = "";
});
