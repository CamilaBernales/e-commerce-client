import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { logOutSucess } from "../../actions/authActions";
import { useDispatch } from "react-redux";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const dispatch = useDispatch();
  const logoutuser = () => {
    dispatch(logOutSucess());
  };
  return (
    <button
      onClick={() => {
        logoutuser();
        logout({ returnTo: window.location.origin });
      }}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
