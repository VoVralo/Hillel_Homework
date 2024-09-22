import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_HOTELS, setHotels } from './actions';

function* fetchHotelsSaga() {
  const response = yield call(axios.get, 'http://localhost:5000/hotels');
  yield put(setHotels(response.data));
}

export function* watchFetchHotels() {
  yield takeLatest(FETCH_HOTELS, fetchHotelsSaga);
}
