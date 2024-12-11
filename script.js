const password = "NobleClan£";
const lockScreen = document.getElementById("lock-screen");
const mainContent = document.getElementById("main-content");
const passwordInput = document.getElementById("password-input");
const submitButton = document.getElementById("submit-password");
const errorMessage = document.getElementById("error-message");

// Check lock state in local storage
if (localStorage.getItem("locked") === "true") {
  lockScreen.style.display = "block";
  mainContent.style.display = "none";
} else {
  lockScreen.style.display = "none";
  mainContent.style.display = "block";
}

// Handle password submission
submitButton.addEventListener("click", () => {
  if (passwordInput.value === password) {
    localStorage.setItem("locked", "false");
    lockScreen.style.display = "none";
    mainContent.style.display = "block";
  } else {
    errorMessage.style.display = "block";
    navigator.vibrate(200); // Vibrate on incorrect password (optional)
  }
});

// Lock again when visiting
localStorage.setItem("locked", "true");
