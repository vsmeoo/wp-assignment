// Beginner-Friendly JavaScript for Learnsphere

// Highlight active navigation link on page load
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href').split('/').pop();
        if (currentPage === href || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active-link');
        }
    });
});

function showSuccessMessage(elementId, message) {
    const successElement = document.getElementById(elementId);
    if (!successElement) {
        return;
    }

    successElement.textContent = message;
    successElement.style.display = 'block';
}

function hideSuccessMessage(elementId) {
    const successElement = document.getElementById(elementId);
    if (!successElement) {
        return;
    }

    successElement.textContent = '';
    successElement.style.display = 'none';
}

// Simple smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Authentication Functions =====

// Show registration form and hide login form
function showRegister() {
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    
    // Update tab buttons
    const tabs = document.querySelectorAll('.tab-button');
    tabs[0].classList.add('active');
    tabs[1].classList.remove('active');
}

// Show login form and hide registration form
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    
    // Update tab buttons
    const tabs = document.querySelectorAll('.tab-button');
    tabs[1].classList.add('active');
    tabs[0].classList.remove('active');
}

// Validate Registration Form
function validateRegister(event) {
    event.preventDefault();
    
    // Clear all error messages
    document.getElementById('regNameError').textContent = '';
    document.getElementById('regEmailError').textContent = '';
    document.getElementById('regPasswordError').textContent = '';
    document.getElementById('regConfirmError').textContent = '';
    hideSuccessMessage('registerSuccess');
    
    // Get form values
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirm = document.getElementById('regConfirm').value;
    
    let isValid = true;
    
    // Validate name (must be at least 2 characters)
    if (name.length < 2) {
        document.getElementById('regNameError').textContent = 'Name must be at least 2 characters';
        isValid = false;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('regEmailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    // Validate password (min 8 chars, at least 1 uppercase, 1 number, 1 special char)
    if (password.length < 8) {
        document.getElementById('regPasswordError').textContent = 'Password must be at least 8 characters';
        isValid = false;
    } else if (!/[A-Z]/.test(password)) {
        document.getElementById('regPasswordError').textContent = 'Password must contain at least 1 uppercase letter';
        isValid = false;
    } else if (!/[0-9]/.test(password)) {
        document.getElementById('regPasswordError').textContent = 'Password must contain at least 1 number';
        isValid = false;
    } else if (!/[!@#$%^&*]/.test(password)) {
        document.getElementById('regPasswordError').textContent = 'Password must contain at least 1 special character (!@#$%^&*)';
        isValid = false;
    }
    
    // Validate password match
    if (password !== confirm) {
        document.getElementById('regConfirmError').textContent = 'Passwords do not match';
        isValid = false;
    }
    
    // If all validations pass, show success message
    if (isValid) {
        showSuccessMessage('registerSuccess', 'Account created successfully. Welcome to Learnsphere!');
        const registerForm = document.getElementById('registerUserForm');
        if (registerForm) {
            registerForm.reset();
        }
    }
}

// Validate Login Form
function validateLogin(event) {
    event.preventDefault();
    
    // Clear error messages
    document.getElementById('loginEmailError').textContent = '';
    document.getElementById('loginPasswordError').textContent = '';
    hideSuccessMessage('loginSuccess');
    
    // Get form values
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    let isValid = true;
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('loginEmailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    // Validate password (not empty)
    if (password.length === 0) {
        document.getElementById('loginPasswordError').textContent = 'Password is required';
        isValid = false;
    }
    
    // If valid, show success
    if (isValid) {
        showSuccessMessage('loginSuccess', 'Login successful. Welcome back to Learnsphere!');
        const loginForm = document.getElementById('loginUserForm');
        if (loginForm) {
            loginForm.reset();
        }
    }
}

// ===== Contact Form Functions =====

// Validate Contact Form
function validateContact(event) {
    event.preventDefault();
    
    // Clear error messages
    document.getElementById('contactNameError').textContent = '';
    document.getElementById('contactEmailError').textContent = '';
    document.getElementById('contactMessageError').textContent = '';
    hideSuccessMessage('contactSuccess');
    
    // Get form values
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    
    let isValid = true;
    
    // Validate name
    if (name.length < 2) {
        document.getElementById('contactNameError').textContent = 'Name must be at least 2 characters';
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('contactEmailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    // Validate message
    if (message.length < 10) {
        document.getElementById('contactMessageError').textContent = 'Message must be at least 10 characters';
        isValid = false;
    }
    
    // If valid, show success
    if (isValid) {
        showSuccessMessage('contactSuccess', 'Thank you for contacting us. We will get back to you soon.');
        const contactForm = document.getElementById('contactUserForm');
        if (contactForm) {
            contactForm.reset();
        }
    }
}

// ===== Course Details Functions =====

// Enroll in a course
function enrollCourse() {
    alert('Thank you for enrolling! Please log in to access the course materials.');
}

// Add course to wishlist
function addToWishlist() {
    alert('Course added to your wishlist!');
}
