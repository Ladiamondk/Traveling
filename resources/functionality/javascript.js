const signInBtn = document.querySelector('.signInBtn');
const signUpBtn = document.querySelector('.signUpBtn');
const signInForm = document.querySelector('#sign-in');
const signUpForm = document.querySelector('#sign-up');
const usernameInput = document.getElementById('username');
const username =  usernameInput.value;
const emailInput = document.getElementById('email');
const email =  emailInput.value;
const passwordInput = document.getElementById('password');
const password =  passwordInput.value;
const consentInput = document.getElementById('consent');
const consent =  consentInput.value;

signUpForm.style.opacity = '0';
signUpForm.style.transition = 'opacity 0.5s ease-in-out';
signInForm.style.transition = 'opacity 0.5s ease-in-out';

signUpBtn.addEventListener('click', () => {
    signUpForm.style.opacity = '1'; // Make the form visible
    signInForm.style.opacity = '0'; // Hide the other form
});

signInBtn.addEventListener('click', () => {
    signInForm.style.opacity = '1'; // Make the form visible
    signUpForm.style.opacity = '0'; // Hide the other form
});