import LocationsItem from '../../components/locations-item/locations-item';
import Logo from '../../components/logo/logo';
import SignIn from '../../components/sign-in/sign-in';
import { HeaderLogoValue } from '../../const';

function LoginPage() {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo valueAttributesLogo={HeaderLogoValue} />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <SignIn />
          </section>
          <section className="locations locations--login locations--current">
            <LocationsItem
              location="Amsterdam"
              className="locations__item-link"
            />
            {/* <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div> */}
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
