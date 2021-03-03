import { useState } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../store/strore';
import { addMessageActionCreator } from '../../store/testReducer/actions';
import { getDialogs, getMessages } from '../../store/testReducer/selectors';
import style from './TestComponent.module.scss'
import { MapStateToPropsType, TestComponentType } from './Types';



const TestComponent: React.FC<TestComponentType> = ({ title, dialogs, messages, addMessageActionCreator }) => {

   const [text, setText] = useState('');
   
   const onAddMessage = () => {
      addMessageActionCreator(text);
      setText('')
   }

   const allDialogs = dialogs.map(({id, name}) => <div key={id} >{name}</div>);

   const allMessages = messages.map(({ id, message }) => <div key={id}>{message}</div>);

   return (
      <div className={style.test} >
         <div>hello {title} {dialogs[0].name}</div>
         <h2>Dialogs</h2>
         {allDialogs}
         <h2>Messages</h2>
         {allMessages}
         <input placeholder='new message' value={text} onChange={(e)=>setText(e.target.value)} />
         <button onClick={onAddMessage}>add message</button>
      </div>
   )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
   dialogs: getDialogs(state),
   messages: getMessages(state)
});

const mapDispatchToProps = {
   addMessageActionCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);