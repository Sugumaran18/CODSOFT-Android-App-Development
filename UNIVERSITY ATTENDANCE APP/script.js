const authForm = document.getElementById('authForm');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const studentView = document.getElementById('studentView');
const instructorView = document.getElementById('instructorView');
const attendanceForm = document.getElementById('attendanceForm');

authForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    authenticateUser(email, password);
});

registerBtn.addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    registerUser(email, password);
});

function authenticateUser(email, password) {
    // Placeholder function for authentication
    console.log('Login attempt:', email, password);
    if (email === 'student@university.com') {
        showStudentView();
    } else if (email === 'instructor@university.com') {
        showInstructorView();
    } else {
        alert('Invalid login credentials');
    }
}

function registerUser(email, password) {
    // Placeholder function for registration
    console.log('Register attempt:', email, password);
    alert('Registration successful!');
    // Redirect to attendance entry after registration
    showStudentView();
}

function showStudentView() {
    document.getElementById('auth').style.display = 'none';
    studentView.style.display = 'block';
}

function showInstructorView() {
    document.getElementById('auth').style.display = 'none';
    instructorView.style.display = 'block';
}

// Handle attendance submission
attendanceForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const course = document.getElementById('course').value;
    const date = document.getElementById('date').value;
    submitAttendance(course, date);
});

function submitAttendance(course, date) {
    console.log('Attendance submitted for:', course, 'on', date);
    alert('Attendance recorded successfully!');
}
