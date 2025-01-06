function isValidValues(email: string, password: string) {
  const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPassword = /^.*(?=.*[a-zA-Z])(?=.*\d).*$/.test(password);
  return isEmail && isPassword;
}

export { isValidValues };
