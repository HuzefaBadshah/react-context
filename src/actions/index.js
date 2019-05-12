import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

const fetchUsersAndPosts = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // const uniqIds = _.uniq(_.map(getState().posts, 'userId'));
  // uniqIds.forEach((id) => dispatch(fetchUser(id)));
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};
const fetchPosts = () => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// const fetchUser = (id) => {
//     return  (dispatch) => {
//         _fetchUser(id, dispatch);
//     }
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder(`/users/${id}`);
//     dispatch({type: 'FETCH_USER', payload: response.data});
// });

const fetchUser = id => {
  return async dispatch => {
    const response = await jsonPlaceholder(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};

export { fetchPosts, fetchUser, fetchUsersAndPosts };
