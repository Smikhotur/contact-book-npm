import {all, fork} from 'redux-saga/effects';
import {contactBookWatcher} from '../store/contactBook/saga'

export default function* rootSaga() {
  yield all([
    contactBookWatcher(),
  ]);
}