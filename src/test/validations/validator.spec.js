import validateSignupInput from '../../validations/validateSignupInput';

describe('validateSignUpInput', () => {
  const state = {
    email: '',
    confirmPassword: '',
    username: '',
    firstName: 'cc',
    lastName: 'ki',
    password: 'opdj',
  };
  const wrongState = {
    email: 'email',
    password: '',
    confirmPassword: '',
    userName: '',
    firstName: ' klek ddm,df/./',
    lastName: ',jgj/',
  };

  it('checks if email is empty', () => {
    expect(validateSignupInput({}).validationErrors.email).toBe('Email should not empty');
  });
  it('checks if password is empty', () => {
    expect(validateSignupInput({}).validationErrors.password).toBe('Password should not be empty');
  });
  it('checks if firstname is empty', () => {
    expect(validateSignupInput({}).validationErrors.firstName).toBe('First name should not be empty');
  });
  it('checks if lastname is empty', () => {
    expect(validateSignupInput({}).validationErrors.lastName).toBe('Last name should not be empty');
  });
  it('checks if confirmpassword is empty', () => {
    expect(validateSignupInput({}).validationErrors.confirmPassword).toBe('Please confirm password');
  });
  it('checks if email is invalid', () => {
    expect(validateSignupInput(wrongState).validationErrors.email).toBe('You have entered an invalid email');
  });
  it('checks if firstname is invalid', () => {
    expect(validateSignupInput(wrongState).validationErrors.firstName).toBe('Invalid input for firstname');
  });
  it('checks if firstname is less than 3', () => {
    expect(validateSignupInput(state).validationErrors.firstName).toBe('First name should contain a minimum of 3 characters');
  });
  it('checks if lastname is invalid', () => {
    expect(validateSignupInput(wrongState).validationErrors.lastName).toBe('Invalid input for lastname');
  });
  it('checks if lastname is less than 3', () => {
    expect(validateSignupInput(state).validationErrors.lastName).toBe('Last name should contain a minimum of 3 characters');
  });
  it('checks if password is less than 3', () => {
    expect(validateSignupInput(state).validationErrors.password).toBe('Password should contain a min of 8 characters');
  });
});
