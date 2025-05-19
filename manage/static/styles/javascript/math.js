let targetSection = '';

function requestAccess(sectionId) {
    targetSection = sectionId;
    document.getElementById('login-form').style.display = 'block';
}

function closeLoginForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('password-input').value = '';
    document.getElementById('login-error').style.display = 'none';
}

function checkPassword() {
    const correctPassword = 'math123'; // your password
    const enteredPassword = document.getElementById('password-input').value;

    if (enteredPassword === correctPassword) {
        document.getElementById(targetSection).style.display = 'block';
        document.getElementById('login-form').style.display = 'none';
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
}

// Initially hide protected sections
window.onload = () => {
    document.getElementById('teacher-management').style.display = 'none';
    document.getElementById('hod-dashboard').style.display = 'none';
};

// Show/hide forms inside teacher management
function showComplaintForm() {
    document.getElementById('complaint-form').style.display = 'block';
    document.getElementById('performance-form').style.display = 'none';
    document.getElementById('attendance-form').style.display = 'none';
}

function showPerformanceForm() {
    document.getElementById('complaint-form').style.display = 'none';
    document.getElementById('performance-form').style.display = 'block';
    document.getElementById('attendance-form').style.display = 'none';
}

function showAttendanceForm() {
    document.getElementById('complaint-form').style.display = 'none';
    document.getElementById('performance-form').style.display = 'none';
    document.getElementById('attendance-form').style.display = 'block';
}
