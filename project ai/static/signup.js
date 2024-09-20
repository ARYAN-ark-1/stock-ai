document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Placeholder for form validation or backend submission
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    // After form submission logic, redirect to sign-in page
    window.location.href = "signin.html";
});
