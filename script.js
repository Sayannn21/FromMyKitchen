// Variables to store user credentials
var users = [];

// Function to handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  var username = document.getElementById('loginUsername').value;
  var password = document.getElementById('loginPassword').value;

  // Check if user exists and password is correct
  var user = users.find(function(u) {
    return u.username === username && u.password === password;
  });

  if (user) {
    // Redirect to another page
    window.location.href = 'order.html';
  } else {
    var loginError = document.getElementById('loginError');
    loginError.textContent = 'Invalid username or password';
  }
});

// Function to handle registration form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  var username = document.getElementById('registerUsername').value;
  var password = document.getElementById('registerPassword').value;

  // Check if username is available
  var isUsernameAvailable = users.every(function(u) {
    return u.username !== username;
  });

  if (isUsernameAvailable) {
    users.push({ username: username, password: password });
    var registrationMessage = document.getElementById('registrationMessage');
    registrationMessage.textContent = 'Registration successful!';
    registrationMessage.classList.add('success');
    clearRegistrationForm();
  } else {
    var registrationMessage = document.getElementById('registrationMessage');
    registrationMessage.textContent = 'Username already exists';
    registrationMessage.classList.remove('success');
  }
});

// Function to show the logged-in page and hide the login page
function showLoggedInPage() {
  var loginPage = document.getElementById('loginPage');
  var loggedInPage = document.getElementById('loggedInPage');
  loginPage.classList.add('hidden');
  loggedInPage.classList.remove('hidden');
}

// Function to clear the registration form fields
function clearRegistrationForm() {
  document.getElementById('registerUsername').value = '';
  document.getElementById('registerPassword').value = '';
}
// Function to handle logout process
function logout() {
    // Perform any necessary logout operations here
    
    // Redirect to another page after logout
    window.location.href = 'logout.html';
  }
  
  // Add event listener to the logout button
  document.getElementById('logoutButton').addEventListener('click', logout);
  