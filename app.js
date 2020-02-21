const form = document.getElementById('myForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = form.username.value;
  const password = form.password.value;

  await fetch('https://reqres.in/api/login', {
    method: 'post',
    body: JSON.stringify({
      email: username,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const response = await response.json();
  console.log(json);
})