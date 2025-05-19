// admin.js

// Global variables
let currentPage = 1;
const itemsPerPage = 10;
let studentsData = [];
let teachersData = [];
let staffData = [];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in (from sessionStorage)
    if (sessionStorage.getItem('isLoggedIn')) {
        showAdminDashboard();
        loadDashboardData();
        loadStudentsData();
        loadTeachersData();
        loadStaffData();
    } else {
        showLoginPage();
    }

    // Event listeners
    document.getElementById('studentSearch').addEventListener('input', filterStudents);
    document.getElementById('teacherSearch').addEventListener('input', filterTeachers);
    document.getElementById('staffSearch').addEventListener('input', filterStaff);
});

// Login Functions
function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (in a real app, this would be a server-side check)
    if (username === 'admin' && password === 'password') {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', username);
        showAdminDashboard();
        loadDashboardData();
        loadStudentsData();
        loadTeachersData();
        loadStaffData();
    } else {
        alert('Invalid username or password');
    }
}

function logout() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    showLoginPage();
}

// Page Navigation
function showLoginPage() {
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('adminDashboard').style.display = 'none';
}

function showAdminDashboard() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'flex';
    showSection('dashboard');
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.main-content > div[id$="Section"]').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId + 'Section').style.display = 'block';
    document.getElementById('sectionTitle').textContent = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);

    // Update active menu item
    document.querySelectorAll('.sidebar-menu li a').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`.sidebar-menu li a[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
}

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function previewAvatar(input, previewId, defaultIconId) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById(previewId).src = e.target.result;
            document.getElementById(previewId).style.display = 'block';
            document.getElementById(defaultIconId).style.display = 'none';
        }
        reader.readAsDataURL(input.files[0]);
    }
}

// Data Loading Functions
function loadDashboardData() {
    // In a real app, this would be an API call
    console.log('Loading dashboard data...');
}

function loadStudentsData() {
    // Mock data - in a real app, this would be an API call
    studentsData = [
        { id: 1, name: 'John Doe', class: 'Form 2 West', admissionDate: '2022-01-15', status: 'Active' },
        { id: 2, name: 'Jane Smith', class: 'Form 3 East', admissionDate: '2021-09-01', status: 'Active' },
        { id: 3, name: 'Michael Brown', class: 'Form 1 North', admissionDate: '2023-01-10', status: 'Active' },
        { id: 4, name: 'Sarah Johnson', class: 'Form 4 South', admissionDate: '2020-03-22', status: 'Graduated' },
        { id: 5, name: 'David Wilson', class: 'Form 2 East', admissionDate: '2022-01-15', status: 'Active' },
        { id: 6, name: 'Emily Davis', class: 'Form 3 West', admissionDate: '2021-09-01', status: 'Active' },
        { id: 7, name: 'Robert Miller', class: 'Form 1 South', admissionDate: '2023-01-10', status: 'Active' },
        { id: 8, name: 'Jennifer Taylor', class: 'Form 4 North', admissionDate: '2020-03-22', status: 'Graduated' },
        { id: 9, name: 'Thomas Anderson', class: 'Form 2 South', admissionDate: '2022-01-15', status: 'Active' },
        { id: 10, name: 'Lisa Martinez', class: 'Form 3 North', admissionDate: '2021-09-01', status: 'Active' },
        { id: 11, name: 'William Clark', class: 'Form 1 West', admissionDate: '2023-01-10', status: 'Active' },
        { id: 12, name: 'Jessica Rodriguez', class: 'Form 4 East', admissionDate: '2020-03-22', status: 'Graduated' }
    ];

    renderStudentsTable();
}

function loadTeachersData() {
    // Mock data - in a real app, this would be an API call
    teachersData = [
        { id: 1, name: 'Mr. Johnson', subjects: 'Mathematics, Physics', classInCharge: 'Form 4 West', tscNumber: 'TSC12345' },
        { id: 2, name: 'Mrs. Anderson', subjects: 'English, Literature', classInCharge: 'Form 3 East', tscNumber: 'TSC54321' },
        { id: 3, name: 'Mr. Williams', subjects: 'Chemistry, Biology', classInCharge: 'Form 2 North', tscNumber: 'TSC67890' },
        { id: 4, name: 'Ms. Thompson', subjects: 'History, Geography', classInCharge: 'Form 1 South', tscNumber: 'TSC09876' },
        { id: 5, name: 'Mr. Davis', subjects: 'Kiswahili, French', classInCharge: '', tscNumber: 'TSC13579' }
    ];

    renderTeachersTable();
}

function loadStaffData() {
    // Mock data - in a real app, this would be an API call
    staffData = [
        { id: 1, name: 'Mr. Kamau', position: 'Accountant', department: 'Finance', employeeId: 'EMP1001' },
        { id: 2, name: 'Mrs. Wanjiku', position: 'Secretary', department: 'Administration', employeeId: 'EMP1002' },
        { id: 3, name: 'Mr. Ochieng', position: 'Librarian', department: 'Library', employeeId: 'EMP1003' },
        { id: 4, name: 'Ms. Akinyi', position: 'Nurse', department: 'Health', employeeId: 'EMP1004' },
        { id: 5, name: 'Mr. Mwangi', position: 'Security', department: 'Security', employeeId: 'EMP1005' },
        { id: 6, name: 'Mrs. Odhiambo', position: 'Cleaner', department: 'Maintenance', employeeId: 'EMP1006' }
    ];

    renderStaffTable();
}

// Table Rendering Functions
function renderStudentsTable(filteredData = null) {
    const data = filteredData || studentsData;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data.length);
    const paginatedData = data.slice(startIndex, endIndex);

    const tableBody = document.getElementById('studentsTableBody');
    tableBody.innerHTML = '';

    paginatedData.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.class}</td>
            <td>${formatDate(student.admissionDate)}</td>
            <td><span class="status-badge ${student.status.toLowerCase()}">${student.status}</span></td>
            <td>
                <button class="action-btn view-btn" onclick="viewItem('student', ${student.id})"><i class="fas fa-eye"></i></button>
                <button class="action-btn edit-btn" onclick="editItem('student', ${student.id})"><i class="fas fa-edit"></i></button>
                <button class="action-btn delete-btn" onclick="deleteItem('student', ${student.id})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    updatePagination(data.length, 'students');
}

function renderTeachersTable(filteredData = null) {
    const data = filteredData || teachersData;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data.length);
    const paginatedData = data.slice(startIndex, endIndex);

    const tableBody = document.getElementById('teachersTableBody');
    tableBody.innerHTML = '';

    paginatedData.forEach(teacher => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${teacher.name}</td>
            <td>${teacher.subjects}</td>
            <td>${teacher.classInCharge || 'N/A'}</td>
            <td>${teacher.tscNumber}</td>
            <td>
                <button class="action-btn view-btn" onclick="viewItem('teacher', ${teacher.id})"><i class="fas fa-eye"></i></button>
                <button class="action-btn edit-btn" onclick="editItem('teacher', ${teacher.id})"><i class="fas fa-edit"></i></button>
                <button class="action-btn delete-btn" onclick="deleteItem('teacher', ${teacher.id})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    updatePagination(data.length, 'teachers');
}

function renderStaffTable(filteredData = null) {
    const data = filteredData || staffData;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data.length);
    const paginatedData = data.slice(startIndex, endIndex);

    const tableBody = document.getElementById('staffTableBody');
    tableBody.innerHTML = '';

    paginatedData.forEach(staff => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${staff.name}</td>
            <td>${staff.position}</td>
            <td>${staff.department}</td>
            <td>${staff.employeeId}</td>
            <td>
                <button class="action-btn view-btn" onclick="viewItem('staff', ${staff.id})"><i class="fas fa-eye"></i></button>
                <button class="action-btn edit-btn" onclick="editItem('staff', ${staff.id})"><i class="fas fa-edit"></i></button>
                <button class="action-btn delete-btn" onclick="deleteItem('staff', ${staff.id})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    updatePagination(data.length, 'staff');
}

// CRUD Operations
function addItem(type) {
    let formId, dataArray, successMessage;
    
    switch (type) {
        case 'student':
            formId = 'addStudentForm';
            dataArray = studentsData;
            successMessage = 'Student added successfully!';
            break;
        case 'teacher':
            formId = 'addTeacherForm';
            dataArray = teachersData;
            successMessage = 'Teacher added successfully!';
            break;
        case 'staff':
            formId = 'addStaffForm';
            dataArray = staffData;
            successMessage = 'Staff added successfully!';
            break;
        default:
            return;
    }

    const form = document.getElementById(formId);
    const formData = new FormData(form);
    const newItem = { id: dataArray.length + 1 };

    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
        if (key !== 'csrfmiddlewaretoken') {
            newItem[key] = value;
        }
    }

    // Add to the appropriate array
    dataArray.unshift(newItem);
    
    // Show success message
    alert(successMessage);
    
    // Close modal and refresh table
    closeModal(`add${type.charAt(0).toUpperCase() + type.slice(1)}Modal`);
    
    // Refresh the appropriate table
    if (type === 'student') {
        renderStudentsTable();
    } else if (type === 'teacher') {
        renderTeachersTable();
    } else if (type === 'staff') {
        renderStaffTable();
    }
    
    // Reset form
    form.reset();
}

function editItem(type, id) {
    let dataArray, modalId, formId;
    
    switch (type) {
        case 'student':
            dataArray = studentsData;
            modalId = 'editStudentModal';
            formId = 'editStudentForm';
            break;
        case 'teacher':
            dataArray = teachersData;
            modalId = 'editTeacherModal';
            formId = 'editTeacherForm';
            break;
        case 'staff':
            dataArray = staffData;
            modalId = 'editStaffModal';
            formId = 'editStaffForm';
            break;
        default:
            return;
    }

    const item = dataArray.find(item => item.id === id);
    if (!item) return;

    // Set the ID in the form
    document.querySelector(`#${formId} input[name="id"]`).value = item.id;

    // Populate form fields
    for (const key in item) {
        if (key !== 'id' && document.querySelector(`#${formId} [name="${key}"]`)) {
            document.querySelector(`#${formId} [name="${key}"]`).value = item[key];
        }
    }

    // Open the modal
    openModal(modalId);
}

function saveItem(type) {
    let formId, dataArray, successMessage;
    
    switch (type) {
        case 'student':
            formId = 'editStudentForm';
            dataArray = studentsData;
            successMessage = 'Student updated successfully!';
            break;
        case 'teacher':
            formId = 'editTeacherForm';
            dataArray = teachersData;
            successMessage = 'Teacher updated successfully!';
            break;
        case 'staff':
            formId = 'editStaffForm';
            dataArray = staffData;
            successMessage = 'Staff updated successfully!';
            break;
        default:
            return;
    }

    const form = document.getElementById(formId);
    const formData = new FormData(form);
    const id = parseInt(formData.get('id'));
    const itemIndex = dataArray.findIndex(item => item.id === id);

    if (itemIndex === -1) return;

    // Update the item
    for (let [key, value] of formData.entries()) {
        if (key !== 'id' && key !== 'csrfmiddlewaretoken') {
            dataArray[itemIndex][key] = value;
        }
    }

    // Show success message
    alert(successMessage);
    
    // Close modal
    closeModal(`edit${type.charAt(0).toUpperCase() + type.slice(1)}Modal`);
    
    // Refresh the appropriate table
    if (type === 'student') {
        renderStudentsTable();
    } else if (type === 'teacher') {
        renderTeachersTable();
    } else if (type === 'staff') {
        renderStaffTable();
    }
}

function viewItem(type, id) {
    let dataArray;
    
    switch (type) {
        case 'student':
            dataArray = studentsData;
            break;
        case 'teacher':
            dataArray = teachersData;
            break;
        case 'staff':
            dataArray = staffData;
            break;
        default:
            return;
    }

    const item = dataArray.find(item => item.id === id);
    if (!item) return;

    // In a real app, this would open a detailed view modal
    alert(`Viewing ${type}: ${item.name}\nID: ${item.id}\nMore details would be shown here.`);
}

function deleteItem(type, id) {
    if (!confirm(`Are you sure you want to delete this ${type}?`)) return;

    let dataArray, successMessage;
    
    switch (type) {
        case 'student':
            dataArray = studentsData;
            successMessage = 'Student deleted successfully!';
            break;
        case 'teacher':
            dataArray = teachersData;
            successMessage = 'Teacher deleted successfully!';
            break;
        case 'staff':
            dataArray = staffData;
            successMessage = 'Staff deleted successfully!';
            break;
        default:
            return;
    }

    const itemIndex = dataArray.findIndex(item => item.id === id);
    if (itemIndex === -1) return;

    // Remove the item
    dataArray.splice(itemIndex, 1);
    
    // Show success message
    alert(successMessage);
    
    // Refresh the appropriate table
    if (type === 'student') {
        renderStudentsTable();
    } else if (type === 'teacher') {
        renderTeachersTable();
    } else if (type === 'staff') {
        renderStaffTable();
    }
}

// Search and Filter Functions
function filterStudents() {
    const searchTerm = document.getElementById('studentSearch').value.toLowerCase();
    const filteredData = studentsData.filter(student => 
        student.name.toLowerCase().includes(searchTerm) || 
        student.class.toLowerCase().includes(searchTerm) ||
        student.status.toLowerCase().includes(searchTerm)
    );
    renderStudentsTable(filteredData);
}

function filterTeachers() {
    const searchTerm = document.getElementById('teacherSearch').value.toLowerCase();
    const filteredData = teachersData.filter(teacher => 
        teacher.name.toLowerCase().includes(searchTerm) || 
        teacher.subjects.toLowerCase().includes(searchTerm) ||
        (teacher.classInCharge && teacher.classInCharge.toLowerCase().includes(searchTerm)) ||
        teacher.tscNumber.toLowerCase().includes(searchTerm)
    );
    renderTeachersTable(filteredData);
}

function filterStaff() {
    const searchTerm = document.getElementById('staffSearch').value.toLowerCase();
    const filteredData = staffData.filter(staff => 
        staff.name.toLowerCase().includes(searchTerm) || 
        staff.position.toLowerCase().includes(searchTerm) ||
        staff.department.toLowerCase().includes(searchTerm) ||
        staff.employeeId.toLowerCase().includes(searchTerm)
    );
    renderStaffTable(filteredData);
}

// Pagination Functions
function updatePagination(totalItems, tableType) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationInfo = document.querySelector(`#${tableType}Section .pagination-info`);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    paginationInfo.textContent = `Showing ${startItem} to ${endItem} of ${totalItems} entries`;

    const paginationBtns = document.querySelector(`#${tableType}Section .pagination-btns`);
    paginationBtns.innerHTML = '';

    // Previous button
    const prevBtn = document.createElement('div');
    prevBtn.className = 'pagination-btn';
    prevBtn.innerHTML = '<i class="fas fa-angle-left"></i>';
    prevBtn.onclick = () => changePage(-1, tableType);
    if (currentPage === 1) prevBtn.classList.add('disabled');
    paginationBtns.appendChild(prevBtn);

    // Page buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('div');
        pageBtn.className = 'pagination-btn';
        if (i === currentPage) pageBtn.classList.add('active');
        pageBtn.textContent = i;
        pageBtn.onclick = () => {
            currentPage = i;
            if (tableType === 'students') {
                renderStudentsTable();
            } else if (tableType === 'teachers') {
                renderTeachersTable();
            } else if (tableType === 'staff') {
                renderStaffTable();
            }
        };
        paginationBtns.appendChild(pageBtn);
    }

    // Next button
    const nextBtn = document.createElement('div');
    nextBtn.className = 'pagination-btn';
    nextBtn.innerHTML = '<i class="fas fa-angle-right"></i>';
    nextBtn.onclick = () => changePage(1, tableType);
    if (currentPage === totalPages) nextBtn.classList.add('disabled');
    paginationBtns.appendChild(nextBtn);
}

function changePage(step, tableType) {
    const totalItems = tableType === 'students' ? studentsData.length : 
                      tableType === 'teachers' ? teachersData.length : 
                      staffData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if ((currentPage + step) < 1 || (currentPage + step) > totalPages) return;

    currentPage += step;
    
    if (tableType === 'students') {
        renderStudentsTable();
    } else if (tableType === 'teachers') {
        renderTeachersTable();
    } else if (tableType === 'staff') {
        renderStaffTable();
    }
}

// Utility Functions
function formatDate(dateString) {
    if (!dateString) return 'N/A';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}