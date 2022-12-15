const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
      const response = await axios.post('/api/users/login', {
        data: { email, password }
      });
  
      if (response.ok) {
        document.location.replace('/favourites');
      } else {
        alert('Failed to log in');
      }
    };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  