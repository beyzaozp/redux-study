import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { login } from "../stores/auth";
import {useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate ()
  const dispatch = useDispatch()

  const handleLogin = () => {
   const dumData = {
    id:"1",
    ad:"beyza",
    token:"qwe2d2434sr34GF3."
   }
   localStorage.setItem("auth", dumData)
   dispatch(login(dumData))
   navigate('/')
  };
  return (
    <div style={{ background: "yellow" }}>
      Giriş Yap
      <button onClick={handleLogin}>Giriş Yapmak için Tıkla</button>
    </div>
  );
}

export default Login;
