import axios from "axios";

import { all, call, put, takeEvery } from "redux-saga/effects";

function* buyMobile() {
  yield put({ type: "BUY_MOBILE_SUCCESS" });
}

function* sellMobile() {
  yield put({ type: "SELL_MOBILE_SUCCESS" });
}

function* getAllUsers() {
  try {
    let users = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put({ type: "GET_ALL_USERS_SUCCESS", data: users.data });
  } catch (error) {
    yield put({ type: "GET_ALL_USERS_FAILED", message: error.message });
  }
}

function* getSingleUser({ id }) {
  try {
    let users = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    yield put({ type: "GET_SINGLE_USER_SUCCESS", data: users.data });
  } catch (error) {
    yield put({ type: "GET_SINGLE_USER_FAILED", message: error.message });
  }
}

function* addUser({ payload }) {
  try {
    let users = yield call(
      axios.post,
      "https://jsonplaceholder.typicode.com/users",
      payload
    );
    yield put({ type: "ADD_USER_SUCCESS", data: users.data });
  } catch (error) {
    yield put({ type: "ADD_USER_FAILED", message: error.message });
  }
}

function* editUser({ payload, id }) {
  try {
    let users = yield call(
      axios.put,
      "https://jsonplaceholder.typicode.com/users/" + id,
      payload
    );
    yield put({ type: "EDIT_USER_SUCCESS", data: users.data });
  } catch (error) {
    yield put({ type: "EDIT_USER_FAILED", message: error.message });
  }
}

function* deleteUser({ id }) {
  try {
    let users = yield call(
      axios.delete,
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    yield put({ type: "DELETE_USER_SUCCESS", data: id });
  } catch (error) {
    yield put({ type: "DELETE_USER_FAILED", message: error.message });
  }
}

export function* watchUser() {
  yield all([
    takeEvery("BUY_MOBILE", buyMobile),
    takeEvery("SELL_MOBILE", sellMobile),
    takeEvery("GET_ALL_USERS", getAllUsers),
    takeEvery("GET_SINGLE_USER", getSingleUser),
    takeEvery("ADD_USER", addUser),
    takeEvery("EDIT_USER", editUser),
    takeEvery("DELETE_USER", deleteUser)
  ]);
}
