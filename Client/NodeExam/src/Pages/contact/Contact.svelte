<script>
  import { Router, useNavigate } from "svelte-navigator";
  import toastr, * as Toastr from "toastr";
  import "../../../node_modules/toastr/build/toastr.css";

  const navigate = useNavigate();

  let name = "";
  let mail = "";
  let message = "";

  async function sendMail() {
    const url = "http://localhost:8082/mail";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, mail, message }),
        credentials: "include",
      });
      navigate("/kontakt");
      Toastr.success("Your mail has been sent");
    } catch {
      toastr.warning("Something went wrong!");
    }
  }
</script>

<Router primary={false}>
  <div class="isolate bg-white px-24 py-6 sm:py-10 lg:px-8">
    <!--  <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
      <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div> -->
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Kontakt
      </h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">
        Aute magna irure deserunt veniam aliqua magna enim voluptate.
      </p>
    </div>
    <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            for="first-name"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Fornavn</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            for="last-name"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Efternavn</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="email"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Email</label
          >
          <div class="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="phone-number"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Mobil nummer</label
          >
          <div class="relative mt-2.5">
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              autocomplete="tel"
              class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Besked</label
          >
          <div class="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows="4"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
        <div class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center"></div>
        </div>
      </div>
      <div class="mt-10">
        <button
          type="submit"
          class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Send besked</button
        >
      </div>
    </form>
  </div>
  <!--   <div>
    <div>
      <h1>Kontakt os</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        condimentum mollis ipsum eu pharetra. Nam facilisis ex et nisl ultrices
        iaculis in sit amet ipsum. Sed viverra posuere aliquet. Sed augue arcu,
        ullamcorper quis tellus nec, cursus laoreet sapien. Nullam lobortis ac
        quam nec pellentesque. Fusce sed augue tortor. Quisque posuere, ante id
        vestibulum dapibus, felis tortor vulputate libero, in porta lectus
        mauris vel lorem. Quisque risus sem, rhoncus nec massa quis, fringilla
        rhoncus sem. Maecenas maximus tincidunt eros, et tempor eros
        sollicitudin nec. Praesent id euismod nisi. Nam efficitur accumsan odio,
        et tristique nisl ullamcorper ut. Proin dapibus orci purus, at venenatis
        elit elementum porta. Maecenas sed risus tincidunt, tincidunt nunc a,
        gravida erat. Aliquam erat volutpat. Ut ligula sapien, luctus varius
        diam id, vestibulum porttitor metus. Sed id laoreet orci, id viverra
        orci.
      </p>
    </div>
    <div class="container">
      <form
        on:submit|preventDefault={sendMail}
        id="contact_form"
        method="POST"
        action="/contact"
      >
        <input type="name" bind:value={name} placeholder="Your Name. . ." />
        <input type="email" bind:value={mail} placeholder="Your Email. . ." />
        <textarea bind:value={message} placeholder="Your Message. . ." />
        <button class="button-color" type="submit">Send Besked</button>
      </form>
    </div>
  </div> -->
</Router>
