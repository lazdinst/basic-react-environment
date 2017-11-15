import * as constants from '../constants/app';

/** ============================================================
 * Define Initial State
 * ========================================================== */
const initialState = {};

/** ============================================================
 * Define Reducer
 * ========================================================== */
export default (state = initialState, action) => {
  switch (action.type) {
  case constants.BLANK_ACTION:
    return {
      ...state,
      data: action.data,
    };
  default:
    return state;
  }
};