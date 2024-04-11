import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/HomePage";
import PublicNavbar from "./components/PublicNavbar";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";
import PrivateNavbar from "./components/PrivateNavbar";
function App() {
  const userData = useSelector((state) => state?.auth?.user);
  return (
    <>
      <BrowserRouter>
        {/* Navbar */}
        {userData ? <PrivateNavbar /> : <PublicNavbar />}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
