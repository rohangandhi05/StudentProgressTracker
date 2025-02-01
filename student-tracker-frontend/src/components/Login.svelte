<script>
    import { login } from '../services/authService.js';
    let username = '';
    let password = '';
    let errorMessage = '';
  
    const handleLogin = async () => {
      const success = await login(username, password);
      if (success) {
        // Redirect to dashboard after successful login
        window.location.href = '/dashboard';
      } else {
        errorMessage = 'Invalid credentials';
      }
    };
  </script>
  
  <h2>Login</h2>
  <form on:submit|preventDefault={handleLogin}>
    <input bind:value={username} placeholder="Username" />
    <input bind:value={password} type="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
  
  {#if errorMessage}
    <p>{errorMessage}</p>
  {/if}
  