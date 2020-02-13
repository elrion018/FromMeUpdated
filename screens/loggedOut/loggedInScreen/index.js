import {connect} from 'react-redux';
import LogInScreen from './presenter';
import {actionCreators as userActions} from '../../../redux/user';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setToken: () => {
      dispatch(userActions.setToken());
    },
    setUser: () => {
      dispatch(userActions.setUser());
    },
    setLogIn: () => {
      dispatch(userActions.setLogIn());
    },
    setLogOut: () => {
      dispatch(userActions.setLogOut());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(LogInScreen);
