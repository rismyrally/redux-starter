import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

// const unsubscribe =
store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(actions.bugAdded({ description: "Bug 1" }));
store.dispatch(actions.bugAdded({ description: "Bug 2" }));
store.dispatch(actions.bugAdded({ description: "Bug 3" }));
store.dispatch(actions.bugResolved({ id: 1 }));
store.dispatch(actions.bugRemoved({ id: 2 }));

// unsubscribe();

console.log(store.getState());

/* CUSTOM STORE */
// import store from "./customStore";
// import * as actions from "./actions";

// store.subscribe(() => {
//   console.log("Store changed!");
// });

// store.dispatch(actions.bugAdded("Bug 1"));

// console.log(store.getState());
