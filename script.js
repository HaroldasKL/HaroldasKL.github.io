document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Hardcoded credentials
  const validUsername = '123';
  const validPassword = '321';

  if (username === validUsername && password === validPassword) {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'restricted.html';
  } else {
    document.getElementById('errorMessage').innerText = 'Invalid credentials';
  }
});