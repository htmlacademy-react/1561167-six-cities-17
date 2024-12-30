import { TOKEN_KEY } from '../const';
import { Token } from '../types/token';

const getToken = (): Token => localStorage.getItem(TOKEN_KEY) ?? '';

const setToken = (token: Token): void => localStorage.setItem(TOKEN_KEY, token);

const dropToken = (): void => localStorage.removeItem(TOKEN_KEY);

export { getToken, setToken, dropToken };
