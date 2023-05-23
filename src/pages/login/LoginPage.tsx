import React, { useEffect, useState } from "react";
import "../../assets/scss/dashboard.scss";
import "../../assets/scss/login.scss";
import MyBookShelfLogo from "../../assets/images/MyBookShelfLogo.png";
import PasswordEyeIcon from "../../assets/images/icons/ic_eyeoff.svg";
import Button from "../../elements/Button";
import {  isAuthenticated, setToken } from "../../configs/token";
import { useNavigate } from "react-router-dom";
import login from "../../configs/axios/auth/login";


const LoginPage: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonClick, setIsButtonClick] = useState(false);
  const [isPasswordShowed, setIsPasswordShowed] = useState(false);
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePasswordShowChange = () => {
    setIsPasswordShowed(!isPasswordShowed);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = () => {
    setIsButtonClick(true);
    if (!isButtonClick) {
      login.login(username, password)
        .then((response) => {
          const { token, ...userData } = response.data;
          setToken(token, 1209600, userData);
          setIsButtonClick(false);
          setLogged(true)
        })
        .catch((error: unknown) => {
          console.log(error);
          console.error("Login Failed");
          setIsButtonClick(false);
        });
    }
  };


  useEffect(() => {
    if(isAuthenticated()) {
      navigate('/dashboard', {replace: true})
    }
  },[logged, navigate])

  return (
    <>
      <div className="form-container">
        <img
          className="form-logo"
          src={MyBookShelfLogo}
          alt=""
          srcSet=""
          width={150}
        />
        <h2>Welcome Back !</h2>
        <h3>Sign in to continue to your Digital Library</h3>

        <div className="auth-container">
          <p className="email">Email</p>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleInputChange}
          />
          <div className="password-container">
            <p className="password">Password</p>
            <input
              type={isPasswordShowed ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={handleInputChange}
            />
            <img
              onClick={handlePasswordShowChange}
              src={PasswordEyeIcon}
              alt=""
              srcSet=""
            />
          </div>
        </div>

        <div className="form-accesibility">
          <div className="rememberme-container">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              value="lsRememberMe"
              id="rememberMe"
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <p className="forgot-btn">Forgot password?</p>
        </div>

        <div className="login-btn-container">
          <Button
            className="btn"
            isBlock
            isPrimary
            isGlowHover
            isLarge
            isLoading={isButtonClick ? "true" : "false"}
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>

        <div className="register-container">
          <p>
            New User? <span>Register here</span>
          </p>
          <p className="guest-btn">Use as Guest</p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
