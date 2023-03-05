import {
  GET_ANSWERS,
  ANSWER_ERROR,
  ADD_ANSWER,
  DELETE_ANSWER,
} from "./answers.types";

const initialState = {
  answers: [
    {
      content: "My answer is blablabla",
      user_id: "1",
      gravatar: "hi",
      id: "2",
      created_at: "2020-12-05",
      username: "suer kamo",
    },
  ],
  loading: true,
  error: {},
};

export default function answers(state = initialState, action) {
  switch (action.type) {
    case GET_ANSWERS:
      return {
        ...state,
        answers: action.payload,
        loading: false,
      };
    case ADD_ANSWER:
      return {
        ...state,
        answers: [...state.answers, action.payload],
        loading: false,
      };
    case DELETE_ANSWER:
      return {
        ...state,
        answers: state.answers.filter((answer) => answer.id !== action.payload),
        loading: false,
      };
    case ANSWER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
