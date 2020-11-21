import React, { useEffect, useState } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../actions/authActions";

const Login = () => {
  const [logged, setLogged] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    const saveUser = () => {
      if (!isLoading) {
        if (isAuthenticated) {
          localStorage.setItem("user", JSON.stringify(user));
          dispatch(loginSuccess(user));
        }
      }
    };
    saveUser();
    // eslint-disable-next-line
  }, [isLoading, logged]);

  useEffect(() => {
    const checkLS = () => {
      let userLs = JSON.parse(localStorage.getItem("user"));
      if (userLs) {
        setLogged(true);
      }
    };
    checkLS();
  }, []);

  return <div>{logged ? <LogoutButton /> : <LoginButton />}</div>;
};

export default Login;
