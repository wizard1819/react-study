import './App.css';
import './vehicle/vehicle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './vehicle/layout';
import Ford from './vehicle/test';
import Home from './vehicle/home';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='home'  element={<Home />} />
          <Route path='ford' element={<Ford />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
