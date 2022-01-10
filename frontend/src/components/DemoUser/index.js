import React from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import './DemoUser.css'

const DemoUser = () => {
  const dispatch = useDispatch();

  const demoLogin = () => {
    dispatch(
      login({
        credential: "demo@user.io",
        password: "password",
      })
    );
  };

  return (
    <button className="demo-user" onClick={demoLogin}>
      Demo User
    </button>
  );
};

export default DemoUser;
