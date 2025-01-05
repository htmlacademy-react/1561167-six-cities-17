function isValidValues(email: string, password: string) {
  const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPassword =
    password.length >= 2 && /[a-zA-Z]/.test(password) && /\d/.test(password);
  return isEmail && isPassword;
}

export { isValidValues };
