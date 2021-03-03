type dialogType = {
  id: number
  name: string
}

type messageType = {
  id: number
  message: string
}

export const initialState = {
  dialogs: [
    { id: 1, name: "Vadim" },
    { id: 2, name: "Tanya" },
    { id: 3, name: "Eva" },
    { id: 4, name: "Slavik" },
  ] as Array<dialogType>,
  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Hi!" },
    { id: 4, message: "Yoo" },
  ] as Array<messageType>,
  messageText: null as null | string
};

export type initialStateType = typeof initialState;