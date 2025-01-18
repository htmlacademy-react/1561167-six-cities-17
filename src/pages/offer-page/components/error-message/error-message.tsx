import { ToastContainer } from 'react-toastify';
import { ERROR_SHOW_TIMEOUT } from '../../../../const';
import { useAppSelector } from '../../../../hooks';
import { selectErrorMessage } from '../../../../store/selectors';
import { notify } from '../../../../utils/utils';

function ErrorMessage(): JSX.Element {
  const error = useAppSelector(selectErrorMessage);

  if (error) {
    notify(error);
  }

  return (
    <ToastContainer
      position="top-center"
      autoClose={ERROR_SHOW_TIMEOUT}
      theme="colored"
    />
  );
}

export default ErrorMessage;
