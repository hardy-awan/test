import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/home/Navbar'
import Content from './components/home/Content'

function App() {
  return (
    <Fragment>
      <Navbar />
      <Content />
    </Fragment>

  );
}

export default App;
