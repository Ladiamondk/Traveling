const signInBtn = document.querySelector('.signInBtn');
const signUpBtn = document.querySelector('.signUpBtn');
const signInForm = document.querySelector('#sign-in');
const signUpForm = document.querySelector('#sign-up');
signUpBtn.addEventListener('click', () => {
    signUpForm.style.visibility = 'visible';
    signInForm.style.visibility = 'hidden';
});
signInBtn.addEventListener('click', () => {
    signInForm.style.visibility = 'visible';
    signUpForm.style.visibility = 'hidden';
});