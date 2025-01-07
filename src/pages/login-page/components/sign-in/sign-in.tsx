import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { AuthorizationData } from '../../../../types/user';
import { isValidValues } from './utils';
import { notify } from '../../../../utils/utils';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../../../const';
import { useAppDispatch } from '../../../../hooks';
import { logIn } from '../../../../store/api-actions';

const initialUser: AuthorizationData = {
  login: '',
  password: '',
};

function SignIn() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState<AuthorizationData>(initialUser);
  const [isValid, setValid] = useState<boolean>(true);

  useEffect(() => {
    setValid(isValidValues(signIn.login, signIn.password));
  }, [signIn]);

  const handleValueChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>): void => {
    setSignIn((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    if (!isValid) {
      notify('Invalid email or password');
      return;
    }

    dispatch(logIn(signIn))
      .unwrap()
      .then(() => {
        setSignIn(initialUser);
        navigate(Path.Root);
      });
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
          pattern="^.*(?=.*[a-zA-Z])(?=.*\d).*$"
          title="Пароль состоит минимум из одной латинской буквы и цифры."
          required
        />
      </div>
      <button className="login__submit form__submit button" type="submit">
        Sign in
      </button>
    </form>
  );
}

export { SignIn };
