<script>
    import { onMount } from "svelte";
    import { login } from "../services/authService.js";
    import { goto } from "$app/navigation";
  
    let username = "";
    let password = "";
    let rememberMe = false;
    let errorMessage = "";
  
    const handleLogin = async () => {
      const success = await login(username, password);
      if (success) {
        goto("/dashboard"); // Redirect to dashboard after successful login
      } else {
        errorMessage = "Invalid ID or Password";
      }
    };
  </script>
  
  <style>
    body {
      background-color: #c7eafc; /* Light blue background */
      font-family: Arial, sans-serif;
    }
  
    .login-container {
      width: 350px;
      background: white;
      padding: 20px;
      margin: 10% auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      text-align: center;
    }
  
    .logo {
      font-size: 24px;
      font-weight: bold;
      color: #0056a2;
    }
  
    input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  
    .checkbox-container {
      display: flex;
      align-items: center;
    }
  
    button {
      width: 100%;
      background: #0056a2;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    .error {
      color: red;
      font-size: 14px;
    }
  
    .language-dropdown {
      margin-top: 10px;
    }
  </style>
  
  <div class="login-container">
    <div class="logo">Class Navi <br /> KUMON</div>
  
    <input type="text" bind:value={username} placeholder="ID" required />
    <input type="password" bind:value={password} placeholder="Password" required />
  
    <div class="checkbox-container">
      <input type="checkbox" bind:checked={rememberMe} />
      <label>Remember me on this device</label>
    </div>
  
    {#if errorMessage}
      <p class="error">{errorMessage}</p>
    {/if}
  
    <button on:click={handleLogin}>Login</button>
  
    <select class="language-dropdown">
      <option>English</option>
      <option>Spanish</option>
      <option>French</option>
    </select>
  </div>
  