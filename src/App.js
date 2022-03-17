import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Stays from "./pages/Stays";
import Stay from "./pages/Stay";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Stays />} />
          <Route path="/stay/:cityName/:stayId" element={<Stay />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
