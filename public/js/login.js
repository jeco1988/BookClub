const loginFormHandler = async (event) => {
  event.preventDefault();
  const user_name = document.querySelector('#email-input').value.trim();
  const password = document.querySelector('#password-input').value.trim();
  if (user_name && password) {
    const response = await axios.post('/api/users/login', {
      data: { user_name, password }
    });
    if (response.status === 200) {
      document.location.replace('/favourites');
    } else {
      alert('Failed to log in');
    }
  }
};
document
  .querySelector('.login')
  .addEventListener('submit', loginFormHandler);