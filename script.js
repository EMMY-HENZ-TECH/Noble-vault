window.onload = function() {
  // If password is already entered, skip password prompt
  if (localStorage.getItem("passwordEntered") === "true") {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    document.getElementById("password-screen").style.display = "block";
    document.getElementById("main-content").style.display = "none";
  }

  document.getElementById("password-submit").addEventListener("click", function() {
    const passwordInput = document.getElementById("password-input").value;
    const correctPassword = "NobleClan£"; // Your password

    if (passwordInput === correctPassword) {
      localStorage.setItem("passwordEntered", "true"); // Store password entry in localStorage
      document.getElementById("password-screen").style.display = "none";
      document.getElementById("main-content").style.display = "block";
    } else {
      document.getElementById("password-error").style.display = "block";
    }
  });

  // Prevent navigation if password is not entered
  window.onbeforeunload = function() {
    if (localStorage.getItem("passwordEntered") !== "true") {
      return "You need to enter the correct password to exit.";
    }
  };

  // Disable back button and prevent navigation (for mobile & browser behavior)
  history.pushState(null, null, location.href);
  window.onpopstate = function () {
    history.pushState(null, null, location.href);
  };
    }
