import userActionTypes from './user.actionTypes';

export const setCurrentUser = user => {
  return dispatch => {
    return dispatch({
      type: userActionTypes.SET_CURRENT_USER,
      payload: user
    });
  };
};
