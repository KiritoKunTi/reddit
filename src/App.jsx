import React from "react";
import { AuthContextProvider } from "./context/AuthContext";
import Header from "./components/Header";

function App() {
  return (
    <AuthContextProvider>
      <Header />
    </AuthContextProvider>
  );
}

export default App;
