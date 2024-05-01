import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuth } from "../../AuthContext";

function Home() {
  const navToRedirect = useNavigate();

  const { token, logout } = useAuth();

  const logOut = () => {
    logout();
  };

  return (
    <>
      <div id="home">
        <h1 id="text-1">Welcome to Home</h1>
        <button onClick={logOut} id="Logout-button">
          Logout
        </button>
      </div>
    </>
  );
}

export default Home;
