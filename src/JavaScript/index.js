const loginRegistration = document.getElementById("login-registration");

const registerLink = document.getElementById("register-link");
const loginLink = document.getElementById("login-link");

const registration = document.getElementById("registration");
const login = document.getElementById("login");

const closeBtn = document.getElementById("close-btn");
const openLogin = document.getElementById("open-login");

// add event listener for registration
registerLink.addEventListener("click", () => {
  login.classList.toggle("active");
  registration.classList.toggle("active");
  loginRegistration.classList.toggle("h-96");
  loginRegistration.classList.toggle("h-100");
});

// add event listener for login
loginLink.addEventListener("click", () => {
  login.classList.toggle("active");
  registration.classList.toggle("active");
  loginRegistration.classList.toggle("h-96");
  loginRegistration.classList.toggle("h-100");
});

// add event listener for close btn 
closeBtn.addEventListener("click", () => {
  loginRegistration.style.display = "none";
})

// add event listener for open login 
openLogin.addEventListener("click", () => {
  loginRegistration.style.display = "flex";
})