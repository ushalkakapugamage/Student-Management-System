
//---------handle window navigation---------//

document.addEventListener("DOMContentLoaded", function() {
    const signupButton = document.getElementById("signupButton");

    signupButton.addEventListener("click", function() {
        window.location.href = "signUpForm.html"; // Navigate to signUpForm.html
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const viewButton = document.getElementById("viewButton");

    viewButton.addEventListener("click", function() {
        window.location.href = "viewStudent.html"; // Navigate to viewStudent.html
    });
});

