
import './App.css';
import React from 'react';
import { Header, Content, Footer } from './func-components';
import Calendar from './class-components';

function App() {
  return (
    <>
      <Header />
      <p style={{textAlign: 'center'}}><Calendar/></p>
      <Content />
      <Footer />
    </>
  );
}

export default App;
