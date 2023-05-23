import {AES, enc} from "crypto-js";

// Fungsi enkripsi token
function encryptToken(token: string) {
    // Implementasikan metode enkripsi yang sesuai di sini
    // Misalnya, menggunakan library crypto-js
    const encryptedToken = AES.encrypt(token, 'secret_key').toString();
    return encryptedToken;
  }
  
  // Fungsi dekripsi token
function decryptToken(encryptedToken: string) {
    // Implementasikan metode dekripsi yang sesuai di sini
    // Misalnya, menggunakan library crypto-js
    const decryptedBytes = AES.decrypt(encryptedToken, 'secret_key');
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
      const { token, expiryDate, user } = tokenData;
  
      const currentDate = new Date().getTime();
      if (currentDate > expiryDate) {
        localStorage.removeItem('token');
        return null;
      }
  
      const decryptedToken = decryptToken(token);
      const userData = {
        token: decryptedToken,
        expiryDate: expiryDate,
        user: user
      }
      return userData;
    }
  
    return null;
  }

 export const isAuthenticated = () => {
    const token = getToken()?.token;
    return token !== undefined;
  }
  