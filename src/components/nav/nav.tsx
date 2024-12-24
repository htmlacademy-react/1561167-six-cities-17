import { Link } from 'react-router-dom';
import { Path } from '../../const';

type UserProfileProps = {
  isLoggedIn: boolean;
  userName: string;
  favoritesCount: number;
};

function UserProfile({
  isLoggedIn,
  userName,
  favoritesCount,
}: UserProfileProps): JSX.Element {
  if (isLoggedIn) {
    return (
      <>
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__user-name user__name">{userName}</span>
        <span className="header__favorite-count">{favoritesCount}</span>
      </>
    );
  }

  return (
    <>
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__login">Sign in</span>
    </>
  );
}

function Item(): JSX.Element {
  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" to={Path.Login}>
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

function Nav({
  isLoggedIn,
  userName,
  favoritesCount,
}: UserProfileProps): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={Path.Favorites}
          >
            <UserProfile
              isLoggedIn={isLoggedIn}
              userName={userName}
              favoritesCount={favoritesCount}
            />
          </Link>
        </li>
        {isLoggedIn && Item()}
      </ul>
    </nav>
  );
}

export default Nav;
