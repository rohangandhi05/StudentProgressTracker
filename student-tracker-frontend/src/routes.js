import { writable } from 'svelte/store';

export const routes = writable([
  { name: 'Home', path: '/', component: 'Home' },
  { name: 'Login', path: '/login', component: 'Login' },
  { name: 'Dashboard', path: '/dashboard', component: 'Dashboard' },
  { name: 'Admin', path: '/admin', component: 'Admin' },
]);
