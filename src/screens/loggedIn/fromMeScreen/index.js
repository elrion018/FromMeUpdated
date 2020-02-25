import {connect} from 'react-redux';
import FromMeScreen from './presenter';
import {actionCreators as userActions} from '../../../redux/user';

const mapStateToProps = (state, ownProps) => {
  const {user} = state;

  return {
    user,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setLogIn: () => {
      dispatch(userActions.setLogIn());
    },
    setLogOut: () => {
      dispatch(userActions.setLogOut());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FromMeScreen);
