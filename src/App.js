import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./actions/authActions";
import Header from "./components/layout/Header";
import Routes from "./components/routes/Routes";
import { BrowserRouter } from "react-router-dom";
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
    <BrowserRouter>
    <div className="App">
      <Header />
    </div>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
