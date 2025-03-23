// import logo from './logo.svg';
import './App.css';
import Font from './font';
import Text from './text';
import Button from './button';
import Table from './table';
import MarginPadding from './margin-padding';
import Alert from './alert';
// import NavBar from './navbar';
import NavBarRouter from './navbar-router';

export default function App() {
  return (
    <>
      {/* <NavBar /> */}
      <NavBarRouter />
      <Font />
      <Text />
      <Button />
      <Table />
      <MarginPadding />
      <Alert />
    </>
  );
}
