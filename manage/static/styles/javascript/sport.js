// scripts.js

function requestAccess(sectionId) {
    const password = prompt("Enter password to access this section:");
    if (password === "admin123") {  // You can change password here
        document.getElementById(sectionId).style.display = "block";
        alert("Access granted!");
    } else {
        alert("Access denied!");
    }
}

function showComplaintForm() {
    document.getElementById("complaint-form").style.display = "block";
    document.getElementById("performance-form").style.display = "none";
    document.getElementById("attendance-form").style.display = "none";
}

function showPerformanceForm() {
    document.getElementById("complaint-form").style.display = "none";
    document.getElementById("performance-form").style.display = "block";
    document.getElementById("attendance-form").style.display = "none";
}

function showAttendanceForm() {
    document.getElementById("complaint-form").style.display = "none";
    document.getElementById("performance-form").style.display = "none";
    document.getElementById("attendance-form").style.display = "block";
}

function checkPassword() {
    const input = document.getElementById("password-input").value;
    if (input === "admin123") {  // You can change password here
        document.getElementById("login-form").style.display = "none";
        alert("Login successful!");
    } else {
        document.getElementById("login-error").style.display = "block";
    }
}

function closeLoginForm() {
    document.getElementById("login-form").style.display = "none";
}
