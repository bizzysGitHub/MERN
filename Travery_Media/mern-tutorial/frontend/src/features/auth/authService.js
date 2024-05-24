import axios from 'axios';

// because our backend has a different port name than local host 3000
// we have to add proxy to our package.json on our front side
// so that the localhost of front end when the API_URL is called the hits the backend port
// i think 😉

const API_URL = '/api/user';

/**
 * so this function starts by taking in the userData as a parameter
 * then using axios we get the user information from the server repsonse
 * remember we created the backend first and the /api/users endpoint will grab
 * the users from the mongo db and return the user and I THINK the TOKEN
 * Axios will return the information in a data object and then we check if the response
 * variable has a data property and if so save the user info to the local storage
 */


const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

 return response.data;
  
};

const login = async (userData) => {
    const response = await axios.post(API_URL + '/login', userData);
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
  
   return response.data;
    
  };

const logout = async () => {
    localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout
};
export default authService;
