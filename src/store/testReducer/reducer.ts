import { ADD_MESSAGE } from "./actionTypes";
import { initialState, initialStateType } from "./state";

const dialogReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            message: action.newMessage,
          },
        ],
        messageText: "",
      };

    default:
      return state;
  }
};

export default dialogReducer;
