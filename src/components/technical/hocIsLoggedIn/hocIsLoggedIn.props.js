import { withProps } from 'recompose';

export default withProps(() => ({
  isAdmin: !!localStorage.getItem('token'),
}));
