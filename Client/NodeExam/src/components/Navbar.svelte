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
            to="/indlæg"
            class="text-2xl font-semibold leading-6 text-gray-900">Indlæg</Link
          >
          <Link
            to="/kurser"
            class="text-2xl font-semibold leading-6 text-gray-900">Kurser</Link
          >
          <Link
            to="/kontakt"
            class="text-2xl font-semibold leading-none text-gray-900"
            >Kontakt</Link
          >
          {#if $user}
            <button on:click={signout}>
              <h1
                class="text-xl font-semibold leading-none text-gray-900"
                >Logud
            </h1>
            </button>
          {/if}
        </div>
      </nav>
    </Router>
  </header>
</main>

<!-- 
 {#if !$user}
        <Link to="/">Forside</Link>
        <Link to="/indlæg">Indlæg</Link>
        <Link to="/kurser">Kurser</Link>
        <Link to="/signin">Log ind</Link>
        <Link to="/signup">Opret</Link>
      {:else if !$user.admin}
        <Link to="/">Forside</Link>
        <Link to="/indlæg">Indlæg</Link>
        <Link to="/kurser">Kurser</Link>
        <Link to="/kontakt">Kontakt</Link>
        <button on:click={signout}>Log ud</button>
      {:else if $user.admin}
        <Link to="/">Forside</Link>
        <Link to="/indlæg">Indlæg</Link>
        <Link to="/kurser">Kurser</Link>
        <Link to="/kontakt">Kontakt</Link>
        <button class="ignore-css" id="signout" on:click={signout}
          >Log ud</button>
      {/if}


<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(51, 51, 51, 0.96);
    border-radius: 10px;
    height: 50px;
    color: #fff;
    padding: 10px;
  }

  .nav-link {
    color: rgb(0, 255, 42) !important;
    text-decoration: none;
    margin-right: 20px;
    font-size: 25px;
  }

  button {
    display: block;
    width: 15%;
    padding: 10px;
    margin: 0;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
    font-size: 26px;
    color: rgb(255, 255, 255);
    background: #2188c3;
  }

  button:hover {
    background-color: lightskyblue;
    color: #ffffff;
  }
</style>
 -->
