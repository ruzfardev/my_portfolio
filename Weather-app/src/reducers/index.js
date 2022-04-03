import { combineReducers } from 'redux';
import WeatherReducer from './weather';
import uiReducer from './uiActions';
const rootReducer = combineReducers({
  getWeatherData: WeatherReducer,
  getUIState: uiReducer,
});

export default rootReducer;
