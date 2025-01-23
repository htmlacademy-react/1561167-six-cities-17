import { Link, useNavigate } from 'react-router-dom';
import { AuthorizationStatus, Path } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logOut } from '../../store/api-actions';
import { memo, MouseEvent } from 'react';
import {
  selectAuthorizationStatus,
  selectUserAvatarUrl,
  selectUserEmail,
} from '../../store/user/user-selectors';

type NavProps = {
  favoritesCount: number;
};

type UserProfileProps = {
  isLoggedIn: boolean;
} & NavProps;

const UserProfile = memo((props: UserProfileProps): JSX.Element => {
  const { isLoggedIn, favoritesCount } = props;
  const userEmail = useAppSelector(selectUserEmail);
  const userAvatarUrl = useAppSelector(selectUserAvatarUrl);

  const backgroundImage = {
    backgroundImage: `url(${userAvatarUrl})`,
    borderRadius: '50%',
  };
  const avatarClasses = 'header__avatar-wrapper user__avatar-wrapper';

  if (isLoggedIn) {
    return (
      <>
        <div className={avatarClasses} style={backgroundImage}></div>
        <span className="header__user-name user__name">{userEmail}</span>
        <span className="header__favorite-count">{favoritesCount}</span>
      </>
    );
  }

  return (
    <>
      <div className={avatarClasses}></div>
      <span className="header__login">Sign in</span>
    </>
  );
});

type OnLinkClick = (evt: MouseEvent<HTMLAnchorElement>) => void;

type ItemProps = {
  onLinkClick: OnLinkClick;
};

const Item = memo(
  ({ onLinkClick }: ItemProps): JSX.Element => (
    <li className="header__nav-item">
      <a onClick={onLinkClick} className="header__nav-link">
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  )
);

const Nav = memo(({ favoritesCount }: NavProps): JSX.Element => {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isLoggedIn = authorizationStatus === AuthorizationStatus.Auth;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLinkClick = (evt: MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();
    dispatch(logOut())
      .unwrap()
      .then(() => {
        navigate(Path.Root);
      });
  };

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
              favoritesCount={favoritesCount}
            />
          </Link>
        </li>
        {isLoggedIn && <Item onLinkClick={handleLinkClick} />}
      </ul>
    </nav>
  );
});

Item.displayName = 'Item';
UserProfile.displayName = 'UserProfile';
Nav.displayName = 'Nav';

export { Nav };
