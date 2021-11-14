import { compose } from 'recompose';
import withConnect from './App.connect';
import App from './App.design';
import withLifecycle from './App.lifecycle';

export default compose(withConnect, withLifecycle)(App);
