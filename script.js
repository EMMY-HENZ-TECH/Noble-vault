const correctPassword = "NobleClan£";
const passwordScreen = document.getElementById('password-screen');
const mainContent = document.getElementById('main-content');
const passwordInput = document.getElementById('password-input');
const passwordSubmit = document.getElementById('password-submit');
const passwordError = document.getElementById('password-error');

// Check if password is stored in sessionStorage
if (sessionStorage.getItem("passwordEntered") === "true") {
  passwordScreen.style.display = "none"; // Skip password screen
  mainContent.style.display = "block"; // Show main content
} else {
  passwordScreen.style.display = "flex";
  mainContent.style.display = "none";
}

// Handle password submission
passwordSubmit.addEventListener("click", () => {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === correctPassword) {
    sessionStorage.setItem("passwordEntered", "true"); // Store password state in sessionStorage
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

// Prevent page reload or close without password
window.addEventListener("beforeunload", function (event) {
  if (!sessionStorage.getItem("passwordEntered")) {
    event.preventDefault();
    event.returnValue = ""; // Shows a confirmation dialog
  }
});
