import {put, takeEvery, call} from 'redux-saga/effects';
import actions from './actions';

const user_id = localStorage.getItem('user_id');
const token_api = localStorage.getItem('token_api');

const requestContactBook = (option) => {
  return fetch(
    `https://api.sumra.net/contacts-book/v1${option.url}`,
    {
      headers: {
        'user-id': user_id,
        'Authorization': `Bearer ${token_api}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
      ...option.option,
    }
  )
  .then(response => response.json())
  .catch((e) => {
    console.log('Error: ',e);
    return []
  });
};

const requestPostContactBook = (option) => {
  return fetch(
    `https://api.sumra.net/contacts-book/v1${option.url}`,
    {
      headers: {
        'user-id': user_id,
        'Authorization': `Bearer ${token_api}`,
      },
      ...option.option,
    }
  )
  .then(response => response.json())
  .catch((e) => {
    console.log(e.response);
    return []
  });
};

function* getContactBookWorker(option) {
  const json = yield call(requestContactBook, option);
  console.log([] === [], json);
  if (json.data !== undefined) {
    yield put(
      actions.getAllUsers(json.data)
    );
  }

  yield put(actions.getAllData(json));
}

function* getPaginationUsersWorker(option) {
  const json = yield call(requestContactBook, option);
  if (json.data !== undefined) {
    yield put(
      actions.setUsersPagination(
        json.data
      )
    );
  }
}

function* getContactInfoUsersWorker(option) {
  const json = yield call(requestContactBook, option);
  yield put(actions.setOneUser(json.data));
}

function* PostFetchContactBookWorker(option) {
  const json = yield call(requestPostContactBook, option);
  yield put(actions.runPreloader(false));
  yield put(actions.getUsers(`/contacts`));

  if (json.type === "success") {
    yield put(actions
      .getMassage(json.message)
    );
  }
}

function* PostAddUserWorker(option) {
  const json = yield call(requestContactBook, option);
  yield put(actions.runPreloader(false));
  if (json.type === "success") {
    window.history.go(-1);
    yield put(actions
      .getMassage(`${json.data.display_name} was added to the contact book`));
  }
}

function* PutAddUserWorker(option) {
  const json = yield call(requestContactBook, option);
  yield put(actions.runPreloader(false));
  if (json.type === "success") {
    window.history.go(-1);
    yield put(actions
      .getMassage(`${json.data.display_name} was added to the contact book`));
  }
}

function* MergeUsersWorker(option) {
  const json = yield call(requestContactBook, option);
  yield put(actions.runPreloader(false));

  // if (json.type === "success") {
  //   yield put(actions
  //     .getMassage(`${json.data.display_name} was added to the contact book`));
  // }
}

function* ReverseUsersWorker(option) {
  const json = yield call(requestContactBook, option);
  yield put(actions.runPreloader(false));

  // if (json.type === "success") {
  //   yield put(actions
  //     .getMassage(`${json.data.display_name} was added to the contact book`));
  // }
}

function* getContactFavouriteWorker(option) {
  const json = yield call(requestContactBook, option);
  // console.log([json.data]);
  localStorage.setItem('person', JSON.stringify([json.data]));
  // yield put(actions.getUsers(`/contacts`));
  yield put(actions.setOneUser(json.data));
}

function* getContactGroupsWorker(option) {
  const json = yield call(requestContactBook, option);

  // yield put(
  //   actions.getAllGroups(
  //     json.data.filter((person) => person.display_name !== null)
  //   )
  // );
}

function* PostFetchContactGroupsWorker(option) {
  const json = yield call(requestContactBook, option);
  yield put(actions.getGroups());
  yield put(actions.runPreloader(false));
  if (json.type === "success") {
    yield put(actions
      .getMassage(`You have created a ${json.data.name} group`));
  }
}

function* putFetchContactGroupsWorker(option) {
  yield put(actions.runPreloader(false));
  yield call(requestContactBook, option);
  yield put(actions.getGroups());
}

function* removeGroupWorker(option) {
  const json = yield call(requestContactBook, option);
  yield put(actions.getGroups());
  yield put(actions.runPreloader(false));
  if (json.data.type === "success") {
    yield put(actions
      .getMassage(json.data.message)
    );
  }
}

function* removeUserWorker(option) {
  yield put(actions.runPreloader(false));
  const json = yield call(requestContactBook, option);
  yield put(actions.runPreloader(false));
  // yield put(actions.getUsers(`/contacts`));
  if (json.data.type === "success") {
    yield put(actions
      .getMassage(json.data.message)
    );
  }
}

function* removeUsersWorker(option) {
  yield put(actions.runPreloader(false));
  const json = yield call(requestContactBook, option);
  yield put(actions.runPreloader(false));
  yield put(actions.getUsers(`/contacts`));
  if (json.data.type === "success") {
    yield put(actions
      .getMassage(json.data.message)
    );
  }
}

function* addContactsGroupWorker(option) {
  const json = yield call(requestContactBook, option);
  if (json.data.message.includes("successfully")) {
    yield put(actions
      .getMassage(json.data.message)
    );
  }
}

export function* contactBookWatcher() {
  yield takeEvery('GET_USERS', getContactBookWorker);
  yield takeEvery('GET_INFO_USERS', getContactInfoUsersWorker);
  yield takeEvery('GET_GROUPS', getContactGroupsWorker);
  yield takeEvery('GET_FAVOURITE', getContactFavouriteWorker);
  yield takeEvery('POST_USERS', PostFetchContactBookWorker);
  yield takeEvery('POST_GROUPS', PostFetchContactGroupsWorker);
  yield takeEvery('PUT_GROUPS', putFetchContactGroupsWorker);
  yield takeEvery('DELETE_GROUP', removeGroupWorker);
  yield takeEvery('DELETE_USER', removeUserWorker);
  yield takeEvery('DELETE_USERS', removeUsersWorker);
  yield takeEvery('POST_USER', PostAddUserWorker);
  yield takeEvery('PUT_USER', PutAddUserWorker);
  yield takeEvery('GET_PAGINATION_USERS', getPaginationUsersWorker);
  yield takeEvery('MERGE_CONTACTS', MergeUsersWorker);
  yield takeEvery('REVERSE_CONTACTS', ReverseUsersWorker);
  yield takeEvery('ADD_CONTACTS_GROUPS', addContactsGroupWorker);
}
