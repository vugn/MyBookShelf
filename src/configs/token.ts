/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {AES, enc} from "crypto-js";

// Fungsi enkripsi token
function encryptToken(token: string) {
    // Implementasikan metode enkripsi yang sesuai di sini
    // Misalnya, menggunakan library crypto-js
    const encryptedToken = AES.encrypt(token, import.meta.env.VITE_SECRET_TOKEN_KEY!).toString();
    return encryptedToken;
  }
  
  // Fungsi dekripsi token
function decryptToken(encryptedToken: string) {
    // Implementasikan metode dekripsi yang sesuai di sini
    // Misalnya, menggunakan library crypto-js
    const decryptedBytes = AES.decrypt(encryptedToken, import.meta.env.VITE_SECRET_TOKEN_KEY!);
    const token = decryptedBytes.toString(enc.Utf8);
    return token;
  }
  
  // Fungsi untuk menyimpan token ke localStorage dengan expiry dan enkripsi
export function setToken(token: string, expirySeconds: number, user: unknown) {
    const expiryDate = new Date().getTime() + expirySeconds * 1000;
    const encryptedToken = encryptToken(token);
    const tokenData = { token: encryptedToken, expiryDate, user };
    localStorage.setItem('token', JSON.stringify(tokenData));
  }
  
  
  // Fungsi untuk mendapatkan token dari localStorage dan melakukan dekripsi
  export function getToken() {
    const tokenDataString = localStorage.getItem('token');
    if (tokenDataString) {
      const tokenData = JSON.parse(tokenDataString);
      const { token, expiryDate, } = tokenData;
  
      const currentDate = new Date().getTime();
      if (currentDate > expiryDate) {
        localStorage.removeItem('token');
        return null;
      }
  
      const decryptedToken = decryptToken(token);
      const userData = {
        expiryDate: expiryDate,
        token: decryptedToken,
      }
      return userData;
    }
  
    return null;
  }

  export function getUserData() {
    const tokenDataString = localStorage.getItem('token');
    if (tokenDataString) {
      const tokenData = JSON.parse(tokenDataString);
      const { user } = tokenData;
      const userData = {
        user: user,
      }
      return userData;
    }
  
    return null;
  }

 export const isAuthenticated = () => {
    const token = getToken()?.token;
    return token !== undefined;
  }
  