import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
  bugAssignedToUser,
  getBugsByUser,
  loadBugs,
  addBug,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

store.dispatch(addBug({ description: "a" }));

// const unsubscribe =
// store.subscribe(() => {
//   console.log("Store changed!", store.getState());
// });

// store.dispatch({
//   type: "error",
//   payload: { message: "An error occurred." },
// });

// store.dispatch((dispatch, getState) => {
//   // Call an API
//   // When the promise is resolved => dispatch()
//   dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
//   console.log(getState());
//   // If the promise is rejected => dispatch()
// });

// store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));
// store.dispatch(projectAdded({ name: "Project 1" }));
// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(bugRemoved({ id: 2 }));

// unsubscribe();

// const unresolvedBugs = getUnresolvedBugs(store.getState());
// const bugs = getBugsByUser(1)(store.getState());

// console.log(bugs);
// console.log(store.getState());
