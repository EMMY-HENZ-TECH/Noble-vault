const correctPassword = "NobleClan£";
const passwordScreen = document.getElementById('password-screen');
const mainContent = document.getElementById('main-content');
const passwordInput = document.getElementById('password-input');
const passwordSubmit = document.getElementById('password-submit');
const passwordError = document.getElementById('password-error');

// Check if password is stored in localStorage
if (localStorage.getItem("passwordEntered") === "true") {
  passwordScreen.style.display = "none"; // Skip password screen
  mainContent.style.display = "block"; // Show main content
} else {
  // Show password screen by default
  passwordScreen.style.display = "flex";
  mainContent.style.display = "none";
}

// Handle password submission
passwordSubmit.addEventListener("click", () => {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === correctPassword) {
    localStorage.setItem("passwordEntered", "true"); // Store password state
    passwordScreen.style.display = "none"; // Hide password screen
    mainContent.style.display = "block"; // Show main content
  } else {
    passwordError.style.display = "block"; // Show error message
  }
});

// Prevent back navigation
window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {
  window.history.pushState(null, null, window.location.href);
};
