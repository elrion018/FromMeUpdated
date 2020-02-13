import {connect} from 'react-redux';
import RootContainer from './presenter';
import {actionCreators as userActions} from '../../redux/user';

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps from RootContainer/index.js');

  const {
    user: {isLoggedIn},
  } = state;

  return {
    isLoggedIn, // → isLoggedIn을 subscribe()한 후 계속 listen해야함
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setToken: token => {
      dispatch(userActions.setToken(token));
    },
    setLogOut: () => {
      dispatch(userActions.setLogOut());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootContainer);
