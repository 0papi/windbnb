import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StaysProvider } from "./context/StaysContext";

import Stays from "./pages/Stays";
import Stay from "./pages/Stay";

function App() {
  return (
    <>
      <StaysProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Stays />} />
            <Route path="/stay/:cityName/:stayId" element={<Stay />} />
          </Routes>
        </Router>
        <ToastContainer />
      </StaysProvider>
    </>
  );
}

export default App;
