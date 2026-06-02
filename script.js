const passwordInput = document.getElementById('passwordInput');
const eyeIcon = document.getElementById('eyeIcon');

// Show and Hide Password
eyeIcon.addEventListener('click', () => {

     // Check the current type 
    if(passwordInput.type === 'password'){
        // Show the password
        passwordInput.type = 'text';

         // Change the icon
        eyeIcon.classList.add('fa-eye');
        eyeIcon.classList.remove('fa-eye-slash');
    } else {
        // Hide the password
         passwordInput.type = 'password';

         // Change the icon
         eyeIcon.classList.remove('fa-eye')
         eyeIcon.classList.add('fa-eye-slash');
    }
   
});

// Password strength by the length of password
const message = document.getElementById('message');
const passwordBox = document.querySelector('.password-box');

passwordInput.addEventListener('input', () => {
    if(passwordInput.value.length > 0) {
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
        passwordBox.style.border = '';
    }

    if(passwordInput.value.length < 4 && passwordInput.value.length > 0) {
        passwordBox.style.border = '1.5px solid #ff5925';
        message.textContent = "Password is Weak";
        message.style.color = '#ff5925';
    } else if (passwordInput.value.length >= 4 && passwordInput.value.length < 8) {
        passwordBox.style.border = "1.5px solid yellow";
        message.textContent = "Password is Medium";
        message.style.color = 'yellow';
    } else if(passwordInput.value.length >= 8) {
        passwordBox.style.border = '1.5px solid #26d730';
        message.textContent = "Password is Strong";
        message.style.color = '#26d730';
    }
});