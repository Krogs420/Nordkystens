<script>
  import { Router, useNavigate } from "svelte-navigator";
  import "../../../node_modules/toastr/build/toastr.css";

  const navigate = useNavigate();
</script>

<Router primary={false}>
  <body class="bg-gray-50">
    <div class="container mx-auto px-6 py-10">
      <h1 class="text-4xl font-bold text-center text-gray-800">
        Kurser
      </h1>
      <div class="mt-6">
        <p class="text-gray-700 text-lg">
          Velkommen til Nordkystens Fodterapi, hvor vores passion ligger i at
          fremme sundhed gennem specialiserede indlæg og kurser. Vi er
          dedikerede til at skabe en unik oplevelse, der ikke kun adresserer
          dine fodproblemer, men også uddanner og styrker dig til at tage aktiv
          del i din fodpleje. Hos os handler det ikke kun om behandling, men
          også om at dele viden og skabe bæredygtige resultater.
        </p>
      </div>
      <div class="mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="h-full w-full object-cover md:w-48"
              src="spinning.jpg"
              alt="Image of a foot"
            />
          </div>
          <div class="p-8">
            <h2
              class="block mt-1 text-4xl leading-tight font-extrabold text-gray-900"
            >
              Kursus type A
            </h2>
            <p class="mt-2 text-gray-600 text-lg">
              Vores skræddersyede indlæg er mere end blot en støtte til dine
              fødder - de er nøglen til personlig komfort og bevægelsesfrihed.
              Hos Nordkystens Fodterapi tror vi på, at hvert skridt skal være en
              behagelig oplevelse, og vores specialdesignede indlæg er skabt til
              at tilpasse sig præcist til dine unikke fodstrukturer. Uanset om
              du lider af smertefulde tilstande eller bare ønsker at forbedre
              din daglige komfort, er vores indlæg designet til at støtte din
              krop og sætte dig i stand til at bevæge dig frit og ubesværet.
            </p>
            <p class="mt-2 text-gray-600 text-lg">Pris:</p>
            <button class="mt-4 w-full md:w-auto bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Book tid
            </button>
          </div>
        </div>
      </div>
      

      <div class="mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="h-full w-full object-cover md:w-48"
              src="spinning.jpg"
              alt="Image of a foot"
            />
          </div>
          <div class="p-8">
            <h2
              class="block mt-1 text-4xl leading-tight font-extrabold text-gray-900"
            >
            Kursus type B
            </h2>
            <p class="mt-2 text-gray-600 text-lg">
              Vores skræddersyede indlæg er mere end blot en støtte til dine
              fødder - de er nøglen til personlig komfort og bevægelsesfrihed.
              Hos Nordkystens Fodterapi tror vi på, at hvert skridt skal være en
              behagelig oplevelse, og vores specialdesignede indlæg er skabt til
              at tilpasse sig præcist til dine unikke fodstrukturer. Uanset om
              du lider af smertefulde tilstande eller bare ønsker at forbedre
              din daglige komfort, er vores indlæg designet til at støtte din
              krop og sætte dig i stand til at bevæge dig frit og ubesværet.
            </p>
            <p class="mt-2 text-gray-600 text-lg">Pris:</p>
            <button class="mt-4 w-full md:w-auto bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Book tid
            </button>
          </div>
        </div>
      </div>
    </div>
  </body>
</Router>
