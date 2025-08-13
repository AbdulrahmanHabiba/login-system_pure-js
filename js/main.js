// Simple utility functions for authentication
const auth = {
    // Check if user is logged in
    isLoggedIn() {
        return localStorage.getItem('currentUser') !== null;
    },
    
    // Get current user data
    getCurrentUser() {
        const user = localStorage.getItem('currentUser');
        return user ? JSON.parse(user) : null;
    },
    
    // Redirect to login page
    redirectToLogin() {
        if (!this.isLoggedIn()) {
            window.location.href = 'index.html';
        }
    },
    
    // Redirect to profile page (only if not already there)
    redirectToProfile() {
        if (this.isLoggedIn()) {
            const currentPage = window.location.pathname;
            if (!currentPage.includes('profile.html')) {
                window.location.href = 'profile.html';
            }
        }
    }
};

// Load shared components when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Load navbar and footer
    loadComponent('navbar-placeholder', 'navbar.html');
    loadComponent('footer-placeholder', 'footer.html');
    
    // Check authentication status
    checkAuth();
});

// Load HTML components
function loadComponent(elementId, componentPath) {
    const element = document.getElementById(elementId);
    if (element) {
        fetch(componentPath)
            .then(response => response.text())
            .then(html => {
                element.innerHTML = html;
            })
            .catch(error => {
                console.log('Component not loaded:', error);
            });
    }
}

// Check authentication and redirect if needed
function checkAuth() {
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('profile.html')) {
        // Profile page - check if logged in
        if (!auth.isLoggedIn()) {
            auth.redirectToLogin();
        }
    } else if (currentPage.includes('index.html') || currentPage.includes('register.html')) {
        // Login/Register pages - check if already logged in
        if (auth.isLoggedIn()) {
            auth.redirectToProfile();
        }
    }
}

