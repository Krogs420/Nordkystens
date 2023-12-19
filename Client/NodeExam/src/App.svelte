<script>
  import Home from "./Pages/home/Home.svelte";
  import { Route, Router } from "svelte-navigator";
  import Contact from "./Pages/contact/Contact.svelte";
  import Kurser from "./Pages/kurser/Kurser.svelte";
  import SignIn from "./Pages/signIn/SignIn.svelte";
  import Navbar from "./components/Navbar.svelte";
  import SignUp from "./Pages/signUp/SignUp.svelte";
  import Users from "./Pages/users/Users.svelte";
  import TailwindCss from './lib/TailwindCSS.svelte';
</script>

<TailwindCss/>

<main>
  <Router>
   <div id="content">
      <Navbar />
    </div>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/kontakt">
      <Contact />
    </Route>
    <Route path="/users">
      <Users />
    </Route>
    <Route path="/signin">
      <SignIn />
    </Route>
    <Route path="/signup">
      <SignUp />
    </Route>
    <Route path="/kurser">
      <Kurser />
    </Route>
    
  </Router>
  <div class="background-image" />
</main>

<style>
  
  #content {
    display: flex;
    min-width: 100%;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    margin-top: -10px;
    padding: 10px;
    font-size: 26px;
    display: inline;
    padding-right: 30px;
  }

  main {
    width: 60vw;
  }
</style>
