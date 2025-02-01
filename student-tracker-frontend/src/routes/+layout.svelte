<script>
    import { page } from "$app/stores";
    import { navigate } from "svelte-routing";
  
    $: if (!$page.data.user && $page.url.pathname !== "/login") {
      navigate("/login");
    }
  </script>
  