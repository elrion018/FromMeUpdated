import {connect} from 'react-redux';
import HomeScreen from './presenter';

const mapStateToProps = (state, ownProps) => {
  const {user} = state;

  return {
    user,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
