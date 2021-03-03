import { type } from 'os';
export type OwnTestComponentType = {
   title: string
}

type DialogType = {
   id: number
   name: string
}

type MessageType = {
   id: number
   message: string
}

export type MapStateToPropsType = {
   dialogs: Array<DialogType>
   messages: Array<MessageType>
}

export type MapDispatchToPropsType = {
   addMessageActionCreator: (message: string) => void
}

export type TestComponentType = OwnTestComponentType & MapStateToPropsType & MapDispatchToPropsType;