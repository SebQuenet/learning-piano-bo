import { lifecycle } from 'recompose';

const withLifecycle = lifecycle({
  async componentDidMount() {
    this.props.autoLogin();
  },
});

export default withLifecycle;
