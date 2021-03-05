import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import TestComponent from './components/TestComponent/TestComponent';
import store from './store/store';

const MainComponent = () => {
  return (
    <div className='App' >
      <Header />
      <Main />
      {/* <TestComponentJS title='JS' /> */}
      {/* <TestComponent title='TSX' /> */}
      <Footer/>
    </div>
  );
};

const MainComponentWithRouter = withRouter(MainComponent);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MainComponentWithRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
