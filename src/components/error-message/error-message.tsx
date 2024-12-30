import { useAppSelector } from '../../hooks';
import { selectError } from '../../store/selectors';
import styles from './style.module.css';

function ErrorMessage(): JSX.Element | null {
  const message = useAppSelector(selectError);
  return message ? (
    <div className={styles['error-message']}>{message}</div>
  ) : null;
}

export { ErrorMessage };
