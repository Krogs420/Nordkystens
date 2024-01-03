<script>
  import { Router, Link, useNavigate } from "svelte-navigator";
  import toastr from "toastr";
  import { user } from "../store/user.js";

  const navigate = useNavigate();

  async function signout() {
    try {
      const response = await fetch(`http://localhost:8082/signout`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        navigate("/");
        user.set(null);
        localStorage.removeItem("user");
      } else {
        const json = await response.json();
        toastr.warning(json.message);
      }
    } catch {
      toastr.error("You were unable to sign out");
    }
  }
</script>

<main>
  <header class="bg-white mx-auto max-w-2xl text-center">
    <Router primary={false}>
      <nav
        class="flex justify-center items-center p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex gap-x-12">
          <Link to="/" class="text-2xl font-semibold leading-6 text-gray-900"
            >Forside</Link
          >
          <Link
            to="/indlaeg"
            class="text-2xl font-semibold leading-6 text-gray-900"
            >Indlæg</Link
          >
          <Link
            to="/kurser"
            class="text-2xl font-semibold leading-6 text-gray-900"
            >Kurser</Link
          >
          <Link
            to="/kontakt"
            class="text-2xl font-semibold leading-none text-gray-900"
            >Kontakt</Link
          >
          {#if $user && $user.admin === 1}
            <Link
              to="/admin"
              class="text-2xl font-semibold leading-none text-gray-900"
              >Admin</Link
            >
          {/if}
          {#if $user}
            <button on:click={signout}>
              <h1 class="text-xl font-semibold leading-none text-gray-900">
                Logud
              </h1>
            </button>
          {/if}
        </div>
      </nav>
    </Router>
  </header>
</main>