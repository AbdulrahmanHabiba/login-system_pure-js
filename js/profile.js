// Simple profile page handler
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (!auth.isLoggedIn()) {
        window.location.href = 'index.html';
        return;
    }
    
    // Display user profile
    displayProfile();
    
    // Add logout button handler
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
});

// Display user profile information
function displayProfile() {
    const user = auth.getCurrentUser();
    
    if (!user) {
        showMessage('User not found', 'error');
        return;
    }
    
    const profileInfo = document.getElementById('profile-info');
    
    if (profileInfo) {
        const profileHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gray-50 p-4 rounded-lg">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <p class="text-lg text-gray-900 font-semibold">${user.name || 'N/A'}</p>
                </div>
                
                <div class="bg-gray-50 p-4 rounded-lg">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <p class="text-lg text-gray-900 font-semibold">${user.email}</p>
                </div>
                
                <div class="bg-gray-50 p-4 rounded-lg">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Registration Date</label>
                    <p class="text-lg text-gray-900 font-semibold">${formatDate(user.registrationDate)}</p>
                </div>
            </div>
        `;
        
        profileInfo.innerHTML = profileHTML;
    }
}

// Handle logout
function handleLogout() {
    // Clear current user session
    localStorage.removeItem('currentUser');
    
    // Show success message
    showMessage('Logged out successfully!', 'success');
    
    // Redirect to login page
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// Format date for display
function formatDate(dateString) {
    try {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch (error) {
        return 'N/A';
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
