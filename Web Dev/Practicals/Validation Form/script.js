function check() {
    let name = document.getElementById("name").value;
    let job = document.getElementById("job").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let confirmationMessage = document.getElementById("confirmation-message");
  
    if (name === '' || job === '' || phone === '' || email === '' || password === '' || confirm === '') {
      alert('Please fill in all required fields.');
    } else if (password !== confirm) {
      alert('Passwords do not match.');
    } else {
      // Form is valid, you can submit it or perform other actions here
      confirmationMessage.textContent = 'Form submitted successfully!';
    }
  }
  