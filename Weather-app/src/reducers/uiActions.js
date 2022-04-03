import { Types } from '../types';

const UI_STATE = {
  loading: false,
  error: null,
};
export default function uiReducer(state = UI_STATE, action) {
  switch (action.type) {
    case Types.GET_WEATHER_REQUEST:
      return {
        loading: true,
      };
    case Types.GET_WEATHER_SUCCESS:
      return {
        loading: false,
      };
    case Types.GET_WEATHER_FAIL:
      return {
        error: action.error,
      };
    default:
      return {
        state,
      };
  }
}
