const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const user = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (user && password) {
      const response = await axios.post('/api/users/login', {
        data: { user, password }
      });
  
      if (response.ok) {
        document.location.replace('/favourites');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  