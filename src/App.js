import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Blog from "./Components/Blog/Blog";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/About/About";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        ></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
