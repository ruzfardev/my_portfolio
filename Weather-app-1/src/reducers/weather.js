import { Types } from '../types';

const INITIAL_STATE = {};

export default function weatherData(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_WEATHER_SUCCESS: {
      return {
        ...state,
        data: action.payload,
      };
    }

    default:
      return {
        state,
      };
  }
}
