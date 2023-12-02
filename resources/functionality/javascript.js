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

signUpBtn.addEventListener('click', () => {
    signUpForm.style.visibility = 'visible';
    signInForm.style.visibility = 'hidden';
});
signInBtn.addEventListener('click', () => {
    signInForm.style.visibility = 'visible';
    signUpForm.style.visibility = 'hidden';
});