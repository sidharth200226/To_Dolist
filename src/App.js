// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Editlist } from './components/ToDo/todolist';




function App() {

  return (
    <div className="App">
      
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Editlist />} />
          </Routes>
        </BrowserRouter>
    
    </div>
  );

}

export default App;
