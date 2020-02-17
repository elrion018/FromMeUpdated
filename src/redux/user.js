const SET_USER = 'SET_USER';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

// Action Creators
function setUser(userInfo) {
  return {
    type: SET_USER,
    userInfo,
  };
}

function setLogIn() {
  return {
    type: LOG_IN,
  };
}

function setLogOut() {
  return {
    type: LOG_OUT,
  };
}

// API Actions

// Initial State
const initialState = {
  isLoggedIn: false,
};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case LOG_IN:
      return applyLogIn(state, action);
    case SET_USER:
      return applySetUser(state, action);
    case LOG_OUT:
      return applyLogOut(state, action);
  }
}

function applySetUser(state, action) {
  const {userInfo} = action;
  return {
    ...state,
    userInfo,
  };
}

function applyLogIn(state, action) {
  return {
    ...state,
    isLoggedIn: true,
  };
}

function applyLogOut(state, action) {
  return {
    ...state,
    isLoggedIn: false,
  };
}

// Exports
const actionCreators = {
  setUser,
  setLogIn,
  setLogOut,
};

export {actionCreators};

export default reducer;
