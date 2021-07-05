export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validatePhone(phone) {
  const re = /^([0-9]{10})$/;
  return re.test(String(phone));
}

export function validateLoginForm(formData = {}) {
  const { email = '', password = '' } = formData;
  const error = {};

  if (!validateEmail(email)) error.email = true;
  if (password.length < 8) error.password = true;
  return error;
}

export function validateRegisterForm(formData = {}) {
  const { name = '', email = '', password = '', phone = '' } = formData;

  const error = {};
  if (name.length < 3) error.name = true;

  if (!validateEmail(email)) error.email = true;

  if (password.length < 8) error.password = true;

  if (!validatePhone(phone)) error.phone = true;
  return error;
}
