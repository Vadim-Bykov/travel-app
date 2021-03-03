import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';
import './App.css';
import TestComponent from './components/TestComponent/TestComponent';
import { TestComponentJS } from './components/TestComponentJS';
import store from './store/strore';

const MainComponent = () => {
  return (
    <div className='App' >
       <TestComponent title='TSX' />
        <TestComponentJS title='JS' />
    </div>
  );
};

const MainComponentWithRoter = withRouter(MainComponent);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MainComponentWithRoter />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
