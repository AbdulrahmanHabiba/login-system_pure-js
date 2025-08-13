// Simple registration form handler
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
});

// Handle registration form submission
function handleRegister(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('floating_name').value.trim();
    const email = document.getElementById('floating_email').value.trim();
    const password = document.getElementById('floating_password').value;
    const repeatPassword = document.getElementById('floating_repeat_password').value;
    
    // Validate input
    if (!validateInput(name, email, password, repeatPassword)) {
        return;
    }
    
    // Check if email already exists
    if (isEmailExists(email)) {
        showMessage('Email already registered. Please use a different email or login.', 'error');
        return;
    }
    
    // Create and save user
    if (createUser(name, email, password)) {
        showMessage('Registration successful! You can now login.', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }
}

// Validate form input
function validateInput(name, email, password, repeatPassword) {
    // Check if all fields are filled
    if (!name || !email || !password || !repeatPassword) {
        showMessage('Please fill in all fields', 'error');
        return false;
    }
    
    // Check password length
    if (password.length < 6) {
        showMessage('Password must be at least 6 characters long', 'error');
        return false;
    }
    
    // Check if passwords match
    if (password !== repeatPassword) {
        showMessage('Passwords do not match', 'error');
        return false;
    }
    
    return true;
}

// Check if email already exists
function isEmailExists(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === email);
}

// Create new user and save to localStorage
function createUser(name, email, password) {
    try {
        const newUser = {
            name,
            email,
            password,
            registrationDate: new Date().toISOString()
        };
        
        // Get existing users
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Add new user
        users.push(newUser);
        
        // Save back to localStorage
        localStorage.setItem('users', JSON.stringify(users));
        
        return true;
    } catch (error) {
        showMessage('Error creating user. Please try again.', 'error');
        return false;
    }
}

// Show message to user
function showMessage(message, type) {
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`;
    messageDiv.textContent = message;
    
    // Add to page
    document.body.appendChild(messageDiv);
    
    // Remove after 3 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}
