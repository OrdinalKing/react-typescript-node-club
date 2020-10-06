export const ValidateEmail = (email: string): string[] => {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return [''];
  }
  return ['You have entered an invalid email address!'];
};

export const ValidatePassword = (password: string): string[] => {
  const errors: string[] = [];
  if (!/(?=.*[a-z])/.test(password)) {
    errors.push('- Must contain at least 1 lowercase alphabetical character');
  }
  if (!/(?=.*[A-Z])/.test(password)) {
    errors.push('- Must contain at least 1 uppercase alphabetical character');
  }
  if (!/(?=.*[0-9])/.test(password)) {
    errors.push('- Must contain at least 1 numeric character');
  }
  if (!/(?=.*[!@#$%^&*])/.test(password)) {
    errors.push('- Must contain at least one special character');
  }
  if (!/(?=.{8,})/.test(password)) {
    errors.push('- Must be 8 characters or longer');
  }
  return errors;
};
