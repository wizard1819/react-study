import './App.css';
import './vehicle/vehicle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './vehicle/layout';
import Ford from './vehicle/test';
import Home from './vehicle/home';
import Page from './apps/newpage';
import Nopage from './apps/nopage';
import Todo from './apps/todo';
import Color from './apps/colors';
import Componentone from './components/componentone';
import Componenttwo from './components/componenttwo';
import FormsScreen from './components/forms';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='form' element={<Ford />} />
          <Route path='page1' element={<Page />} />
          <Route path='todo' element={<Todo />} />
          <Route path='col' element={<Color />} />
          <Route path='c1' element={<Componentone />} />
          <Route path='c2' element={<Componenttwo/>} />
          <Route path='forms' element={<FormsScreen/>} />
          <Route path='*' element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
