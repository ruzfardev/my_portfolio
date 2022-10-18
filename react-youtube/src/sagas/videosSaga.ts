import { takeEvery, call, put } from 'redux-saga/effects';
import { getVideosSuccess } from '../reducers/videos';
import fetchVideos from '../api';
import { AxiosResponse } from 'axios';
function* workerSaga() {
  console.log('workerSaga');
  try {
    const payload: AxiosResponse = yield call(fetchVideos);
    yield put({ type: 'defaultVideosState/getVideosSuccess', payload });
  } catch (e) {
    yield put({ type: 'defaultVideosState/getVideosFailure', message: e });
  }
}
function* videosSaga() {
  yield takeEvery('defaultVideosState/getVideosRequest', workerSaga);
}

export default videosSaga;
