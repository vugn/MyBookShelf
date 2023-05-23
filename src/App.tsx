import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import './assets/scss/style.scss'
import OrangeVector from "./assets/images/vectors/OrangeVector.svg";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";

function App() {

  return (
   <div className="app" style={{ 
    backgroundImage: `url(${OrangeVector})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    top: 0,
    minWidth: '100%',
    minHeight: '100%',
    position: 'absolute',
   }}>
      <Router>
        <Routes>
          <Route path="/myshelf" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/> } />
          <Route path="/" element={<LoginPage/> } />
        </Routes>
      </Router>
   </div>
  )
}

export default App
