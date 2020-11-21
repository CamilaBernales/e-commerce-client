import React, { useEffect, useState } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../actions/authActions";
import { useSelector } from "react-redux";

const Login = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.isLogged);

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
  }, [isLoading]);


  return <div>{auth ? <LogoutButton /> : <LoginButton />}</div>;
};

export default Login;
