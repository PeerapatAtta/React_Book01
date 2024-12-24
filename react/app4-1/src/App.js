
import './App.css';
import RefsArray from './refs-array';
import RefsClass from './refs-class';
import Cart from './state-class';
import MessageBox from './state-func';
import React, { createContext } from 'react';
import { userContext } from './context';
import Header from './context-header';
import Content from './context-content';
import Header2 from './context-header2';
import Content2 from './context-content2';



export default function App() {
  let [user, setUser] = React.useState('');
  return (
    // <userContext.Provider value={'Tom Jerry'}>
    <userContext.Provider value={[user, setUser]}>
      <Header />
      <Header2 />
      <RefsClass />
      <RefsArray />
      <Cart />
      <MessageBox />
      <Content />
      <Content2 />
    </userContext.Provider>

  );
}


