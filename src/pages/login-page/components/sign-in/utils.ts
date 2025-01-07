function isValidValues(email: string, password: string) {
  const isEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(
    email
  );
  const isPassword = /^.*(?=.*[a-zA-Z])(?=.*\d).*$/.test(password);

  return isEmail && isPassword;
}

export { isValidValues };
