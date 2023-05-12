// Get the form element
const form = document.querySelector('form');

// Add an event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  
  // Get the form values
  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const address = document.querySelector('#address').value;
  const message = document.querySelector('#message').value;
  
  // Do something with the form values, for example:
  console.log(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nMessage: ${message}`);
});
