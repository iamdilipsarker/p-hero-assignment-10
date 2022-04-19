import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Blog from "./Components/Blog/Blog";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      
    </div>
  );
}

export default App;
