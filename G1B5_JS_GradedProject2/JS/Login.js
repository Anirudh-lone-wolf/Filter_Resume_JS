function login() {
  let username = document.getElementById("user-input").value;
  let password = document.getElementById("password-input").value;

  //Storing username & password in local storage. Overriding them if they exists
  window.localStorage.setItem("username", username);
  window.localStorage.setItem("password", password);

  //Will be an API Call in production
  if (username === "username" && password === "password") {
    // code to prevent the user from going back to the login page
    if (typeof Storage !== "undefined") {
      sessionStorage.setItem("login", "true");
    }
    window.onpopstate = function (event) {
      if (sessionStorage.getItem("login") === "true") {
        history.go(1);
      }
    };
    window.location.replace("Resume.html");
  } else {
    alert("Login Failed Invalid Username/Password");
  }
}
