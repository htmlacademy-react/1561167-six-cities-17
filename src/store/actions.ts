import { createAction } from '@reduxjs/toolkit';

const setError = createAction<string | null>('error/setError');

export { setError };
