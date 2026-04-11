import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetail from "./components/mainRouting/BlogDetail";
import Home from "./components/mainRouting/Home";
import Layout from "./components/mainRouting/Layout";
import LetsTalk from "./components/mainRouting/LetsTalk";
import Perspective from "./components/mainRouting/Perspective";
import ScrollToHash from "./components/subComponent/ScrolltoHash";


const App = () => {
  return (
    <BrowserRouter>
    <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/lets-talk" element={<LetsTalk />} />
          <Route path="/perspective" element={<Perspective />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
