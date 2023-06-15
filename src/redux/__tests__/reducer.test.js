jest.mock("../initial-state", () => {
    return{
        initial_state: {
            todos: [],
        },
    };
});

import reducer from "../reducer";

describe("Reducer", () => {

    test("should add a todo item", () => {
        global.window = {
            localStorage: {
                setItem: jest.fn(),
            },
        };

        const initialState = {
            todos: [],
        };

        const action = {
            type: "ADD_TODO", 
            payload: {
                title: "Read a book",
            },
        };

        const newState = reducer(initialState, action);

        expect(newState.todos[0].title).toEqual("Read a book");
    });
});