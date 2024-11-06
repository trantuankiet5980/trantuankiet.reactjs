import { all } from 'redux-saga/effects';
import notesSaga from './notesSaga';

export default function* rootSaga() {
  yield all([notesSaga()]);
}
