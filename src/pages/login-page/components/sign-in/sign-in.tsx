import { ChangeEvent, FormEvent, useState } from 'react';
import { AuthorizationData } from '../../../../types/user';
import { isValidValues } from './utils';
// import { useAppDispatch } from '../../../../hooks';
// import { logIn } from '../../../../store/api-actions';

const initialUser: AuthorizationData = {
  login: '',
  password: '',
};

function SignIn() {
  // const dispatch = useAppDispatch();
  const [signIn, setSignIn] = useState<AuthorizationData>(initialUser);

  const handleValueChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>): void => {
    setSignIn((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // dispatch(logIn(signIn)).then((response) => {
    //   console.log('handleFormSubmit ~ response:', response);
    //   setSignIn(initialUser);
    // });
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
          value={signIn.password}
          pattern="/^.*(?=.*[a-zA-Z])(?=.*\d).*$/"
          title="Пароль состоит минимум из одной буквы и цифры."
          required
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
