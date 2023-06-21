import './App.scss';
import Header from './Component/Header/Header'
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
