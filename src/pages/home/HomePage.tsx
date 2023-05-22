import React, { useEffect } from "react";
import "../../assets/scss/homestyle.scss";
import Button from "../../elements/Button";
import { getToken } from "../../configs/token";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  
  const handleRemoveUser = () => {
    localStorage.removeItem("token");
    console.log(getToken());
  };

  const isAuthenticated = () => {
    const token = getToken()?.token;
    return token !== undefined;
  }

  useEffect(() => {
    if(!isAuthenticated()) {
      navigate('/login', {replace: true})
    }
  })

  return (
    <>
      <Button onClick={handleRemoveUser}>Hapus User</Button>
    </>
  );
};

export default HomePage;
