
import './App.css';
import RefsArray from './refs-array';
import RefsClass from './refs-class';
import Cart from './state-class';
import MessageBox from './state-func';

function App() {
  return (
    <>
      <RefsClass />
      <RefsArray />
      <Cart />
      <MessageBox />
    </>
  );
}

export default App;
