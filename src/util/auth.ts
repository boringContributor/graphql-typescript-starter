import Auth from 'types/auth';

const demoScopes = ['read_genres', 'read_author'];

const authorize = async (token: string): Promise<Auth | null> => ({
  isAllowed: true,
  name: 'Simon Steindl',
  scopes: demoScopes,
});

export default authorize;
