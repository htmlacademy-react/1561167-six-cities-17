type UserProfileProps = {
  isLoggedIn: boolean;
  userName: string;
  favoriteCount: number;
};

function UserProfile({
  isLoggedIn,
  userName,
  favoriteCount,
}: UserProfileProps): JSX.Element {
  if (isLoggedIn) {
    return (
      <>
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__user-name user__name">{userName}</span>
        <span className="header__favorite-count">{favoriteCount}</span>
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
      <a className="header__nav-link" href="#">
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  );
}

function Nav({
  isLoggedIn,
  userName,
  favoriteCount,
}: UserProfileProps): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <UserProfile
              isLoggedIn={isLoggedIn}
              userName={userName}
              favoriteCount={favoriteCount}
            />
          </a>
        </li>
        {isLoggedIn && Item()}
      </ul>
    </nav>
  );
}

export default Nav;
