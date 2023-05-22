import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './assets/scss/style.scss'
import HomePage from "./pages/home/HomePage";

function App() {
  return (
   <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </Router>
   </div>
  )
}

export default App
