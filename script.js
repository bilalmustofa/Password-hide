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

// Password strength parameters
const strengthBar = document.getElementById('strengthBar');
const message = document.getElementById('message');
const passwordBox = document.querySelector('.password-box');

passwordInput.addEventListener('input', () => {

    // declaration of variables for password strength parameters
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const passwordLength = passwordInput.value.length;
    const passwordValue = passwordInput.value;
    let width = 0;
    let score = 0;


    // Show the message and strength bar when user starts typing
    if(passwordLength > 0) {
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
        passwordBox.style.border = '';
    }
    if(passwordLength > 0) {
        strengthBar.style.display = 'block';
    } else {
        strengthBar.style.display = 'none';
    }

    // Check password length
    const hasLength = passwordLength >= 8;
    if (hasLength) {
        score += 1;
    }
    // Check for uppercase letters
    const hasUpperCase = passwordValue.split('').some(char => upperCase.includes(char));
    if (hasUpperCase) {
        score += 1;
    }
    // Check for lowercase letters
    const hasLowerCase = passwordValue.split('').some(char => lowerCase.includes(char));
    if (hasLowerCase) {
        score += 1;
    }
    // Check for numbers
    const hasNumbers = passwordValue.split('').some(char => numbers.includes(char));
    if (hasNumbers) {
        score += 1;
    }
    // Check for special characters
    const hasSpecialChars = passwordValue.split('').some(char => specialChars.includes(char));
    if (hasSpecialChars) {
        score += 1;
    }

    // Update the strength bar and message based on the score
    if(score ===0){
        width = 0;
        message.textContent = '';
        passwordBox.style.border = '';
    } else if(score === 1){
        width = 20;
        message.textContent = 'Password is Weak';
        message.style.color = '#ff4d4d';
        passwordBox.style.border = '2px solid #ff4d4d';
        strengthBar.style.backgroundColor = '#ff4d4d';
    } else if(score === 2){
        width = 40;
        message.textContent = 'Password is Fair';
        message.style.color = '#ffa500';
        passwordBox.style.border = '2px solid #ffa500';
        strengthBar.style.backgroundColor = '#ffa500';
    } else if(score === 3){
        width = 60;
        message.textContent = 'Password is Good';
        message.style.color = '#ffff00';
        passwordBox.style.border = '2px solid #ffff00';
        strengthBar.style.backgroundColor = '#ffff00';
    } else if(score === 4){
        width = 80;
        message.textContent = 'Password is Strong';
        message.style.color = '#90ee90';
        passwordBox.style.border = '2px solid #90ee90';
        strengthBar.style.backgroundColor = '#90ee90';
    } else if(score === 5){
        width = 100;
        message.textContent = 'Password is Very Strong';
        message.style.color = '#28a745';
        passwordBox.style.border = '2px solid #28a745';
        strengthBar.style.backgroundColor = '#28a745';
    }
    strengthBar.style.width = width + '%';

    // Function to update the check (✓) and cross (✗) icons
    const updateIcons = (condition, iconId) => {
        const icon = document.getElementById(iconId);
        if (condition) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-check');
            icon.style.color = '#28a745';
        } else {
            icon.classList.remove('fa-check');
            icon.classList.add('fa-xmark');
            icon.style.color = '#ff4d4d';
        }
    };

    // Update icons for each password strength parameter
    updateIcons(hasLength, 'lengthIcon');
    updateIcons(hasUpperCase, 'uppercaseIcon');
    updateIcons(hasLowerCase, 'lowercaseIcon');
    updateIcons(hasNumbers, 'numberIcon');
    updateIcons(hasSpecialChars, 'specialIcon');


});