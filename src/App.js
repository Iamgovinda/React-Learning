// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {Todos} from "./components/Todos";
import {Todo} from "./components/Todo";
import {Footer} from "./components/Footer";
function App() {
  return (
    <>
    <Header title="My Todos List" />
    <Todos/>
    <Todo/>
    <Footer/>
    </>
  );
}

export default App;
