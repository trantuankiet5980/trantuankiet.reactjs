import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchNotesStart, fetchNotesSuccess, fetchNotesFailure } from '../reducers/notesReducer';

function* fetchNotesSaga() {
  try {
    const response = yield call(fetch, 'https://64571b781a4c152cf97b4a06.mockapi.io/kiet');
    const data = yield response.json();
    yield put(fetchNotesSuccess(data));  // Đảm bảo dữ liệu được trả về đúng định dạng JSON
  } catch (error) {
    yield put(fetchNotesFailure(error.toString()));
  }
}

export default function* notesSaga() {
  yield takeEvery(fetchNotesStart.type, fetchNotesSaga);
}
