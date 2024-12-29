import { GridLoader } from 'react-spinners';
import styles from './style.module.css';

function LoadingPage(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <GridLoader
        color={'#4481C3'}
        loading
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export { LoadingPage };