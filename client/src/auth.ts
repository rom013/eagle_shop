import axios from "axios"

export default async function Authorization(){
    const jwtToken = localStorage.authorizationUser
    const authentication = {
      method: "POST",
      url: `${import.meta.env.VITE_URL_SERVER}/auth`,
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }
  
    try {
      await axios(authentication);
      return true;
    } catch (error) {
      return false;
    }
}