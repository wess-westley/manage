alert("hello");

// Show initial section
document.addEventListener('DOMContentLoaded', function() {
    navigateTo('dashboard');
});

// Navigation function
function navigateTo(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Request access function (for protected sections)
function requestAccess(sectionId) {
    document.getElementById('login-form').style.display = 'flex';
    // Store the requested section to show after login
    document.getElementById('login-form').dataset.requestedSection = sectionId;
}

// Close login form
function closeLoginForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('login-error').style.display = 'none';
}

// Check password (simplified for demo)
function checkPassword() {
    const username = document.getElementById('username-input').value;
    const password = document.getElementById('password-input').value;
    
    // Demo credentials
    if ((username === 'teacher' && password === 'teach123') || 
        (username === 'hod' && password === 'hod123')) {
        
        closeLoginForm();
        const requestedSection = document.getElementById('login-form').dataset.requestedSection;
        navigateTo(requestedSection);
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
}

// Show form within sections
function showForm(formId) {
    // Hide all forms first
    ['concern-form', 'assignment-form', 'attendance-form'].forEach(id => {
        document.getElementById(id).style.display = 'none';
    });
    
    // Show requested form
    document.getElementById(formId).style.display = 'block';
}

// Show HOD section
function showHodSection(section) {
    // Hide all HOD sections
    ['concerns', 'allocation', 'status', 'announcements'].forEach(sec => {
        document.getElementById(`hod-${sec}`).style.display = 'none';
    });
    
    // Show requested section
    document.getElementById(`hod-${section}`).style.display = 'block';
}

// Submit concern
function submitConcern() {
    const concernType = document.getElementById('concern-type').value;
    const concernText = document.getElementById('concern-text').value;
    
    if (concernType && concernText) {
        alert('Concern submitted successfully!');
        document.getElementById('concern-form').style.display = 'none';
    } else {
        alert('Please fill all fields');
    }
}
