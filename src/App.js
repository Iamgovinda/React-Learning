// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {Todos} from "./components/Todos";
import {Todo} from "./components/Todo";
import {Footer} from "./components/Footer";
function App() {
  const  onDelete = (todo)=>{
    console.log("I am onDelete Function of ",todo);
  }
  {

  }
  let todos = [
    {
        sno:1,
        title: "Go to the market",
        desc : "you need to go to the market to do the job done1"
    },
    {
        sno:2,
        title: "Go to the pasal",
        desc : "you need to go to the market to do the job done2"
    },
    {
        sno:3,
        title: "Go to the tarkari bazar",
        desc : "you need to go to the market to do the job done3"
    }
]
  return (
    <>
    <Header title="My Todos List" searchBar = {false} />
    <Todos todos = {todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
