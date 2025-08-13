# Login & Register System

A simple, client-side authentication system built with HTML, CSS, and JavaScript using localStorage for data persistence.

## ✨ Features

### 🔐 Authentication System
- **User Registration**: Simple registration with name, email, and password
- **User Login**: Secure login with email and password validation
- **User Profile**: Display user information after successful login
- **Session Management**: Automatic login state management
- **Logout Functionality**: Secure logout with session clearing

### 🎨 User Interface
- **Modern Design**: Clean and responsive UI using Tailwind CSS
- **Custom Styling**: Enhanced visual effects and animations
- **Mobile Responsive**: Works seamlessly on all device sizes
- **Dark Mode Support**: Automatic dark mode detection

### 🛡️ Security Features
- **Email Uniqueness**: Prevents duplicate email registrations
- **Password Validation**: Ensures password strength (minimum 6 characters)
- **Input Validation**: Comprehensive form validation
- **Protected Routes**: Automatic redirection for unauthenticated users

## 🚀 Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- No server or backend required

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Start using the system!

### File Structure
```
Task 4/
├── index.html          # Login page
├── register.html       # Registration page
├── profile.html        # User profile page
├── test.html          # Testing utility page
├── css/
│   └── style.css      # Custom styles and animations
├── js/
│   ├── main.js        # Main JavaScript utilities
│   ├── login.js       # Login functionality
│   ├── register.js    # Registration functionality
│   └── profile.js     # Profile management
├── navbar.html        # Navigation component
├── footer.html        # Footer component
└── README.md          # This file
```

## 📱 How to Use

### 1. Registration
1. Navigate to the registration page
2. Fill in your full name, email, and password
3. Confirm your password
4. Click "Submit" to create your account

### 2. Login
1. Go to the login page
2. Enter your registered email and password
3. Click "Login" to access your profile

### 3. Profile
1. View your account information
2. See your registration date
3. Use the logout button to end your session

### 4. Testing
- Use `test.html` to test all system functions
- Create test users and verify functionality
- Clear test data when finished

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Styling with Tailwind CSS and custom animations
- **JavaScript (ES6+)**: Modern JavaScript with localStorage API
- **Tailwind CSS**: Utility-first CSS framework

### Data Storage
- **localStorage**: Client-side data persistence
- **User Data**: Stored as JSON objects
- **Session Management**: Current user tracking

### Key Functions
- `isLoggedIn()`: Check authentication status
- `getCurrentUser()`: Retrieve current user data
- `redirectToProfile()`: Smart navigation management
- Form validation and error handling

## 🐛 Recent Fixes

### ✅ Profile Page Refresh Issue
- Fixed infinite redirect loop in `main.js`
- Added smart navigation logic to prevent unnecessary redirects
- Profile page now loads correctly without refreshing

### ✅ Simplified Registration
- Combined first/last name into single "Full Name" field
- Removed phone and company fields
- Streamlined user data structure
- Updated all related JavaScript functions

### ✅ Enhanced Navigation
- Created clean, simple navbar component
- Added responsive footer
- Improved overall user experience

## 🧪 Testing

The system includes a comprehensive testing page (`test.html`) that allows you to:
- Test user registration
- Test login functionality
- View profile data
- Clear all test data
- Verify system integrity

## 🌟 Future Enhancements

- [ ] Password strength indicator
- [ ] Email verification system
- [ ] Password recovery functionality
- [ ] User avatar support
- [ ] Advanced profile customization
- [ ] Data export functionality

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you encounter any issues or have questions:
1. Check the testing page first
2. Review the browser console for errors
3. Ensure JavaScript is enabled
4. Clear browser cache if needed

---

**Built with AH using modern web technologies**
