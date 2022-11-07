import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Main from "./pages/Main";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
