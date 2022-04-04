import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchWeeklyData, makeApiCall } from '../api/api';
import * as actions from '../actions/index';
import { Types } from '../types';

// worker saga
function* getWeather(country) {
  try {
    const result = yield call(makeApiCall, country);
    ///
    const { lon, lat } = result.coord;
    const weeklyResult = yield call(fetchWeeklyData, { lat, lon });
    yield put(
      actions.getWeatherSuccess({
        weather: result.weather,
        name: result.name,
        sys: result.sys,
        main: result.main,
        wind_speed: result.wind.speed,
        lat: result.coord.lat,
        lon: result.coord.lon,
        daily: weeklyResult.daily,
      })
    );
  } catch (error) {
    yield put(actions.getWeatherFail(error));
  }
}

// watcher saga
export function* watchGetRequest() {
  yield takeLatest(Types.GET_WEATHER_REQUEST, getWeather);
}
