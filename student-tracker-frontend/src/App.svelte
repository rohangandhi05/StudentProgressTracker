<script>
	import { Router, Route, Link } from 'svelte-routing';
	import Home from './components/Home.svelte';
	import Login from './components/Login.svelte';
	import Dashboard from './components/Dashboard.svelte';
	import Admin from './components/Admin.svelte';
  </script>
  
  <main>
	<nav>
	  <Link to="/">Home</Link>
	  <Link to="/login">Login</Link>
	  <Link to="/dashboard">Dashboard</Link>
	  <Link to="/admin">Admin</Link>
	</nav>
  
	<Router>
	  <Route path="/" component={Home} />
	  <Route path="/login" component={Login} />
	  <Route path="/dashboard" component={Dashboard} />
	  <Route path="/admin" component={Admin} />
	</Router>
  </main>