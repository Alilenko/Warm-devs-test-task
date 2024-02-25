// Open/close modal
const modal = document.getElementById("modal");
const modalBg = document.querySelector(".modal-bg");
const openBtn = document.getElementById("open_modal");
const closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", () => {
  modal.classList.add("open");
  modalBg.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
  modalBg.classList.remove("open");
});

modalBg.addEventListener("click", (e) => {
  if (!e.target.closest(".modal")) {
    modal.classList.remove("open");
    modalBg.classList.remove("open");
  }
});

// form validation

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isNameValid = validateForm(e, "name", "error-name");
  const isEmailValid = validateForm(e, "email", "error-email");
  const isPhoneValid = validateForm(e, "phone", "error-phone");

  if (isNameValid && isEmailValid && isPhoneValid) {
    successMessage.style.visibility = "visible";
    successMessage.style.opacity = "1";

    setTimeout(() => {
      document.getElementById("form").reset();
      successMessage.style.visibility = "hidden";
      successMessage.style.opacity = "0";
    }, 2000);
  }
});

function validateForm(input, error) {
  var inputValue = document.getElementById(input).value;
  if (inputValue.length <= 2) {
    document.getElementById(error).textContent =
      "Value must be more than 2 symbols";
    return false;
  } else {
    document.getElementById(error).textContent = "";
    return true;
  }
}
