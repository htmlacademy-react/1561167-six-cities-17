function isValidValues(email: string, password: string) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordPattern = /^[a-zA-Z0-9]{2,}$/;
  return emailPattern.test(email) && passwordPattern.test(password);
}

export { isValidValues };
