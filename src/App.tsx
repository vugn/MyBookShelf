import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './assets/scss/style.scss'
import OrangeVector from "./assets/images/vectors/OrangeVector.svg";
import OrangeVectorGlow from "./assets/images/vectors/OrangeVectorGlow.svg";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
   <div className="app" style={{ 
    backgroundImage: `url(${OrangeVector})`,
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
   }}>
    <div className="glow-bg" style={{ 
    backgroundImage: `url(${OrangeVectorGlow})`,
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
   }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </Router>
      </div>
   </div>
  )
}

export default App
