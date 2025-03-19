// import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {
 let color = ['red', 'blue', 'green', 'yellow', 'purple'];
 let list = color.map((color) => <li>{color}</li>);
  return (
    <ul>{list}</ul>
  );
}

export default App;
