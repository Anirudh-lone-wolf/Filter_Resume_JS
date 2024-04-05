// Defines the login function
function login() {
  // Retrieves the value entered in the username input field by its ID and stores it in the username variable.
  let username = document.getElementById("user-input").value;
  
  // Retrieves the value entered in the password input field by its ID and stores it in the password variable.
  let password = document.getElementById("password-input").value;

  // Stores the username in the browser's local storage. 
  // If a username already exists, it is overwritten with the new value.
  window.localStorage.setItem("username", username);
  
  // Stores the password in the browser's local storage. 
  // If a password already exists, it is overwritten with the new value.
  window.localStorage.setItem("password", password);

  // This block is a placeholder for actual authentication against an API.
  // Currently, it checks if the entered username and password match specific hardcoded values.
  if (username === "username" && password === "password") {
    // Checks if the browser supports Web Storage.
    if (typeof Storage !== "undefined") {
      // Stores a flag in the session storage to indicate a successful login.
      sessionStorage.setItem("login", "true");
    }
    
    // Adds an event listener to the window object to intercept the 'back' navigation event.
    window.onpopstate = function (event) {
      // Checks if the session indicates a logged-in state.
      if (sessionStorage.getItem("login") === "true") {
        // Prevents navigating back by moving forward in the history stack if the user is logged in.
        history.go(1);
      }
    };
    
    // Navigates to the "Resume.html" page, replacing the current entry in the history stack.
    // This means the user cannot use the browser's back button to return to the login page after logging in.
    window.location.replace("Resume.html");
  } else {
    // Alerts the user if the login attempt fails due to incorrect credentials.
    alert("Login Failed Invalid Username/Password");
  }
}

