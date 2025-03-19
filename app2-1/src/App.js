import './App.css';
import React from 'react';
import { Header, Content, Footer } from './func-components';
import Calendar from './class-components';
import MsgBox from './class-props';
import MsgBox2 from './func-props';

function App() {
  return (
    <>
      <Header />
      <p style={{ textAlign: 'center' }}><Calendar /></p>
      <Content />
      <Footer />
      <MsgBox
        text="Hello, World!"
        color="green"
        bgcolor="black"
        fontSize="20px"
        border="1px solid black"
      />
      <MsgBox2
        text="How are you today?"
        color="blue"
        bgcolor="white"
        fontSize="24px"
        border="1px solid blue"
      />
    </>

  );
}

export default App;
