import { ChangeEvent, useState } from 'react';
import { AuthorizationData } from '../../../../types/user';
import { isValidValues } from './utils';

const initialUser: AuthorizationData = {
  login: '',
  password: '',
};

function SignIn() {
  const [signIn, setSignIn] = useState<AuthorizationData>(initialUser);

  const handleValueChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>): void => {
    setSignIn((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSignIn(initialUser);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="login__form form"
      action="#"
      method="post"
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          onChange={handleValueChange}
          className="login__input form__input"
          type="email"
          name="login"
          placeholder="Email"
          required
          value={signIn.login}
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          onChange={handleValueChange}
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={signIn.password}
        />
      </div>
      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={!isValidValues(signIn.login, signIn.password)}
      >
        Sign in
      </button>
    </form>
  );
}

export { SignIn };
