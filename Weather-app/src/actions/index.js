import { Types } from '../types';

export const getWeatherRequest = (country) => ({
  type: Types.GET_WEATHER_REQUEST,
  country,
});

export const getWeatherSuccess = (payload) => ({
  type: Types.GET_WEATHER_SUCCESS,
  payload,
});

export const getWeatherFail = (error) => ({
  type: Types.GET_WEATHER_FAIL,
  error,
});
