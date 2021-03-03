import { ADD_MESSAGE } from "./actionTypes";

type addMessageActionCreatorType = {
   type: typeof ADD_MESSAGE
   newMessage: string
};
 
export const addMessageActionCreator = (newMessage: string): addMessageActionCreatorType => {
   return { type: ADD_MESSAGE, newMessage };
};