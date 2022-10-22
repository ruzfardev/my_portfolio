import { takeEvery, take, call, put, takeLatest } from 'redux-saga/effects';
import fetchVideos from '../api';
import { AxiosResponse } from 'axios';
type Params = {
  type: string;
  term: string;
};
function* workerSaga(action: Params) {
  try {
    console.log(action);
    const payload: AxiosResponse = yield call(fetchVideos);
    yield put({ type: 'defaultVideosState/getVideosSuccess', payload });
  } catch (e) {
    yield put({ type: 'defaultVideosState/getVideosFailure', message: e });
  }
}
function* videosSaga() {
  yield takeLatest('defaultVideosState/getVideosRequest', workerSaga);
}

export default videosSaga;
