import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "BlaBla", likesCount: 11 },
    { id: 4, message: "DaDa", likesCount: 11 },
  ],
};

test("length of posts should be incremented", () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra");
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(5);
});

test("message should be valid", () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra");
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts[4].message).toBe("it-kamasutra");
});

test("after deleting length of posts should be decremented", () => {
  // 1. test data
  let action = deletePost(1);
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(3);
});
