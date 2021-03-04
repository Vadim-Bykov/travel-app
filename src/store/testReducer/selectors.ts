import { AppStateType } from "../store";

export const getDialogs = (state: AppStateType) => state.testPage.dialogs;

export const getMessages= (state: AppStateType) => state.testPage.messages;