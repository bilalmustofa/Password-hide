const passwordInput = document.getElementById('passwordInput');
const eyeIcon = document.getElementById('eyeIcon');

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
   
})