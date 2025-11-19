import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../my-project/src/pages/Login";
import Signup from "../../my-project/src/pages/Signup";
import Home from "../../my-project/src/pages/Home";
import Navbar1 from "./component/Navbar";
import Footer from "../../my-project/src/pages/Footer";
import NotFound from "../../my-project/src/pages/NotFound";
import ForgotPassword from "../../my-project/src/pages/ForgetPassword";
import ResetPassword from "../../my-project/src/pages/ResetPassword";
import "./App.css";
function App() {
    return (
        <Router>
            <Navbar1 />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/ForgotPassword" element={<ForgotPassword />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;