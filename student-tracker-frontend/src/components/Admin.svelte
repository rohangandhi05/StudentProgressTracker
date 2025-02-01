<script>
    import { isAuthenticated } from '../services/authService';
    import { navigate } from 'svelte-routing';
  
    // Check if the user is authenticated
    if (!isAuthenticated()) {
      // Redirect to the login page if not authenticated
      navigate('/login');
    }
  </script>
  
  <h2>Admin Panel</h2>
  <p>Manage students and staff here.</p>