// Add event listener to signin and signup buttons
document.addEventListener("DOMContentLoaded", function() {
    const signinBtn = document.querySelector(".signin-btn");
    const signupBtn = document.querySelector(".signup-btn");

    signinBtn.addEventListener("click", function() {
        alert("Sign in button clicked!");
    });

    signupBtn.addEventListener("click", function() {
        alert("Sign up button clicked!");
    });
});