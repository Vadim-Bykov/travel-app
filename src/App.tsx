import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import store from './store/store';

const MainComponent = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/:id?' render={() => <Main />} />
        <Route path='*' exact render={() => <h1>404 NOT FOUND</h1>} />
      </Switch>
      <Footer />
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
}

export default App;
