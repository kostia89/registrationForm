const activeInput = document.querySelector('select');
const phoneInput = document.querySelector('.addMasck');

const testForm = document.getElementById('testForm');

activeInput.addEventListener('change', () => {
  if (activeInput.value === 'ua') {
    phoneInput.value = '+380';
  } else if (activeInput.value === 'usa') {
    phoneInput.value = '+1';
  } else if (activeInput.value === 'pl') {
    phoneInput.value = '+48';
  } else {
    phoneInput.value = '';
  }
});

testForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const firstName = document.getElementById('firstName');
  const countrySelect = document.getElementById('countrySelect');
  const password = document.getElementById('password');
  const email = document.getElementById('email');
  const secondName = document.getElementById('secondName');
  const phone = document.getElementById('phone');
  const confirmPassword = document.getElementById('confirmPassword');
  const agree = document.getElementById('agree');

  function validatePassword(password) {
    const letterRegex = /[a-zA-Z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[^a-zA-Z0-9]/;

    return (
      letterRegex.test(password) &&
      digitRegex.test(password) &&
      specialCharRegex.test(password)
    );
  }

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  // Reset error classes before starting validation
  const errorElements = document.querySelectorAll('.errorVisible, .errorBg');
  errorElements.forEach((element) => {
    element.classList.remove('errorVisible', 'errorBg');
  });

  let isValid = true; // Keep track of overall validation status

  if (firstName.value.length < 2) {
    const error = document.querySelector('[data-name="firstName"]');
    error.className = 'errorVisible';
    isValid = false;
  }
  if (countrySelect.value === '') {
    const error = document.querySelector('[data-name="country"]');
    error.className = 'errorVisible';
    isValid = false;
  }
  if (!validatePassword(password.value)) {
    const error = document.querySelector('[data-name="password"]');
    error.className = 'errorVisible';
    isValid = false;
  }
  if (!validateEmail(email.value)) {
    const error = document.querySelector('[data-name="email"]');
    error.className = 'errorVisible';
    isValid = false;
  }
  if (secondName.value.length < 2) {
    const error = document.querySelector('[data-name="secondName"]');
    error.className = 'errorVisible';
    isValid = false;
  }
  if (phone.value === '') {
    const error = document.querySelector('[data-name="phone"]');
    error.className = 'errorVisible';
    isValid = false;
  }
  if (password.value !== confirmPassword.value) {
    const error = document.querySelector('[data-name="confirmPassword"]');
    error.className = 'errorVisible';
    isValid = false;
  }
  if (!agree.checked) {
    // Use "checked" property instead of "value"
    const error = document.querySelector('[data-name="agree"]');
    error.className = 'errorBg';
    isValid = false;
  }

  if (isValid) {
    // If everything is valid, submit the form
    testForm.submit();
  }
});
