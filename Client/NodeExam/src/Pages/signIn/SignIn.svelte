<script>
  import { useNavigate } from "svelte-navigator";
  import * as Toastr from "toastr";
  import { user } from "../../store/user.js";
  import "../../../node_modules/toastr/build/toastr.css";

  const navigate = useNavigate();

  let mail = "";
  let password = "";

  async function handleSubmit() {
    const url = "http://localhost:8082/signin";
    const body = {
      mail: mail,
      password: password,
      admin: 1
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        user.set(data.data);
        console.log("Hello there?!?!", ($user));
        localStorage.setItem("user", JSON.stringify($user));
        Toastr.success("You are now signed in");
        navigate("/");
      } else {
        Toastr.warning("Unable to sign in");
      }
    } catch {
      Toastr.warning("Unable to sign in");
    }
  }

  let showPassword = false;

  const togglePasswordVisibility = () => {
    showPassword = !showPassword;
  };
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
    <h1 class="text-3xl font-bold text-center text-gray-900">Sign In</h1>
    <form action="/login" on:submit|preventDefault={handleSubmit} class="space-y-4">
      <div>
        <label for="mail" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="mail" id="mail" bind:value={mail} required placeholder="Email" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500" />
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          bind:value={password}
          required
          placeholder="Password"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
        />
      </div>

      <button type="submit" class="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700">Sign In</button>
    </form>
  </div>
</div>

