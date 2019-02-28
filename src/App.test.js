import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainPage from "./pages/MainPage";
import LoginModal from "./pages/MainPage/index/LoginModal";

it(`renders App without crashing`, () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders LoginModal without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders MainPage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
