import {
  GET_POSTS,
  GET_POST,
  GET_TAG_POSTS,
  POST_ERROR,
  DELETE_POST,
  ADD_POST,
  GET_POSTS_BY_USER_TAGS,
} from "./posts.types";

const initialState = {
  posts: [
    {
      loading: false,
      created_at: "",
      answer_count: 0,
      comment_count: 0,
      id: "1",
      tags: [{ tag_name: "client" }, { tag_name: "server" }],
      gravatar: "",
      user_id: "1",
      username: "user",
      title:
        "What are your thoughts on Google Analytics vs other analytics platforms?",
      content:
        "Recently heard about Heap which seems pretty cool, but I’m not sure if it would really be valuable, or simply another tool that I need to check. We are not at the point of using HubSpot/Marketo yet so Heap’s free ",
      views: 0,
    },
  ],
  post: {
    loading: false,
    created_at: "",
    answer_count: 0,
    comment_count: 0,
    id: "1",
    content:
      "Recently heard about Heap which seems pretty cool, but I’m not sure if it would really be valuable, or simply another tool that I need to check. We are not at the point of using HubSpot/Marketo yet so Heap’s free ",

    tags: [{ tag_name: "client" }, { tag_name: "server" }],
    gravatar: "",
    user_id: "1",
    username: "user",
    title:
      "What are your thoughts on Google Analytics vs other analytics platforms?",
  }, // null
  loading: false, // TODO: default true
  error: {},
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_BY_USER_TAGS:
    case GET_TAG_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
