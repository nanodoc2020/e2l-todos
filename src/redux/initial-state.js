export const initialState = JSON.parse(window.localStorage.getItem("e2l-todos")) || {
    todos: [
      {
        id: 0, 
        title: "buy milk", 
        completed: false, 
        important: false,
      },
      {
        id: 1, 
        title: "dishes", 
        completed: true, 
        important: false,
      }, 
      {
        id: 2, 
        title: "laundry", 
        completed: false, 
        important: true,
      }, 
      {
        id: 3, 
        title: "pay bills", 
        completed: true, 
        important: true,
      }, 
      {
        id: 4, 
        title: "workout", 
        completed: true, 
        important: true,
      }
    ],
};