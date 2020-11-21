import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/login/Login";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./actions/authActions";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    const saveState = () => {
      let userLs = JSON.parse(localStorage.getItem("user"));
      if (userLs) {
        dispatch(loginSuccess(userLs));
      }
    };
    saveState();
        // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
