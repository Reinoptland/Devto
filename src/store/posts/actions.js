import api from "../../api";

export function createPostSuccess(post) {
  return {
    type: "CREATE_POST_SUCCESS",
    payload: post
  };
}

export function createPost(title, content) {
  return function thunk(dispatch, getState) {
    const jwt = getState().auth.jwt;
    api("/posts", {
      method: "POST",
      body: {
        title: title,
        content: content
      },
      jwt: jwt
    })
      .then(data => {
        console.log(data);
        const action = createPostSuccess(data);
        dispatch(action);
      })
      .catch(error => console.log(error));
  };
}
