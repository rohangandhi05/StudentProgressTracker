// authService.js
export const login = async (username, password) => {
    const response = await fetch('http://your-backend-api-url/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem('authToken', data.token);
      return true;
    }
    return false;
  };
  
  export const isAuthenticated = () => {
    return !!localStorage.getItem('authToken');
  };
  