import { ADD_TODO } from "./actions";

import { takeEvery } from "@redux-saga/core/effects";

export function* addTodo(){
    yield takeEvery(ADD_TODO, function* () {
        // We can perform async operations here
    });
}

export default function*(){
    yield* addTodo
}