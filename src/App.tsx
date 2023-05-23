import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import './assets/scss/style.scss'

import MyShelfPage from "./pages/home/MyShelfPage";
import LoginPage from "./pages/login/LoginPage";
import DetailPage from "./pages/detail/DetailPage";
import Background from "./parts/Background";

function App() {

  return (
  <Background>
      <Router>
        <Routes>
          <Route path="/myshelf" element={<MyShelfPage/>} />
          <Route path="/myshelf/:id" element={<DetailPage/>} />
          <Route path="/login" element={<LoginPage/> } />
          <Route path="/" element={<LoginPage/> } />
        </Routes>
      </Router>
   </Background>
  )
}

export default App
