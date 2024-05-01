import React from "react";
import { AuthProvider } from "./AuthContext";
import SignIn from "./Components/SIgn In/SignIn";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./Components/Routes/PrivateRoutes";
import PublicRoutes from "./Components/Routes/PublicRoutes";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoutes>
              <SignIn />
            </PublicRoutes>
          }
        />
        <Route
          path="/Home"
          element={
            <PrivateRoutes>
              <Home />
            </PrivateRoutes>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
