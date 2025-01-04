function onChangeEmail() {
  const email = form.email().value;
  form.emailRequiredError().style.display = email ? "none" : "block";

  form.emailInvalidError().style.display = validateEmail(email)
    ? "none"
    : "block";
  toggleRegisterButtonDisabled();
}

function onChangePassword() {
  const password = form.password().value;
  form.passwordRequiredError().style.display = password ? "none" : "block";

  form.passwordMinLengthError().style.display =
    password.length >= 6 ? "none" : "block";
  validadePasswordMatch();
  toggleRegisterButtonDisabled();
}

function onChangeConfirmPassword() {
  validadePasswordMatch();
  toggleRegisterButtonDisabled();
}

function validadePasswordMatch() {
  const password = form.password().value;
  const confirmPassword = form.confirmPassword().value;

  form.confirmPasswordDoesntMatchError().style.display =
    password === confirmPassword ? "none" : "block";
}

function isFormValid() {
  console.log("teste");
  const email = form.email().value;
  if (!email || !validateEmail(email)) {
    return false;
  }
  const password = form.password().value;
  if (!password || password.length < 6) {
    return false;
  }
  const confirmPassword = form.confirmPassword().value;
  if (password !== confirmPassword) {
    return false;
  }

  return true;
}

function toggleRegisterButtonDisabled() {
  form.registerButton().disabled = !isFormValid();
}

const form = {
  confirmPasswordDoesntMatchError: () =>
    document.getElementById("password-doesnt-match-error"),
  confirmPassword: () => document.getElementById("confirm-password"),
  email: () => document.getElementById("email"),
  emailInvalidError: () => document.getElementById("email-invalid-error"),
  emailRequiredError: () => document.getElementById("email-required-error"),
  password: () => document.getElementById("password"),
  passwordMinLengthError: () =>
    document.getElementById("password-min-length-error"),
  passwordRequiredError: () =>
    document.getElementById("password-required-error"),
  registerButton: () => document.getElementById("register-button"),
};
