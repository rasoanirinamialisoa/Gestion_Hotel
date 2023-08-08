function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');
  
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
      messageElement.innerText = data.message;
      if (data.username) {
        // Rediriger l'utilisateur vers une page de succès ou le tableau de bord, par exemple
        // window.location.href = '/dashboard';
      }
    })
    .catch(error => console.error('Error:', error));
  }
  