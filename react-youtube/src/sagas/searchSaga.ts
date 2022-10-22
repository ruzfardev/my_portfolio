import { call, put, takeLatest, take } from 'redux-saga/effects';
import fetchVideos, { searchVideos } from '../api';
import { AxiosResponse } from 'axios';
type Params = {
  type: string;
  payload: string;
};
function* searchSaga({ payload }: Params) {
  try {
    const res: AxiosResponse = yield call(searchVideos, payload);
    yield put({ type: 'defaultVideosState/getSearchSuccess', payload: res });
  } catch (error) {
    console.log(error);
  }
}
function* watchSearchRequest() {
  yield takeLatest('defaultVideosState/getSearchRequest', searchSaga);
}
export default watchSearchRequest;
