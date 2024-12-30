import { GridLoader } from 'react-spinners';
import styles from './style.module.css';

const COLOR_SPINNER = '#4481C3';
const SIZE_SPINNER = 25;

function LoadingPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <div className={styles.wrapper}>
        <GridLoader
          color={COLOR_SPINNER}
          loading
          size={SIZE_SPINNER}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export { LoadingPage };
