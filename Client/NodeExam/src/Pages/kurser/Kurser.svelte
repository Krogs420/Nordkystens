<script>
  import { Router, useNavigate } from "svelte-navigator";
  import toastr, * as Toastr from "toastr";
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
              src="Forsidebillede1.jpg"
              alt="Image of a foot"
            />
          </div>
          <div class="p-8 flex flex-col justify-between">
            <h2 class="text-4xl leading-tight font-extrabold text-gray-900">
              Om mig
            </h2>
            <p class="mt-4 text-gray-600 text-lg flex-grow">
              Mit navn er Jacob, og jeg er din erfarne fodterapeut her hos
              Nordkystens Fodterapi. Min lidenskab ligger i at skræddersy indlæg
              og facilitere kurser, der ikke kun lindrer dine aktuelle
              fodproblemer, men også styrker dig til at forstå og pleje dine
              fødder på lang sigt. Med et fokus på uddannelse tror jeg på, at
              viden er nøglen til vedvarende fodkomfort, og det er min mission
              at dele denne viden med dig.
            </p>
          </div>
        </div>
      </div>

      <div class="mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="h-full w-full object-cover md:w-48"
              src="Forsidebillede1.jpg"
              alt="Image of a foot"
            />
          </div>
          <div class="p-8">
            <h2
              class="block mt-1 text-4xl leading-tight font-extrabold text-gray-900"
            >
              Indlæg
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
          </div>
        </div>
      </div>
      <div class="mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="h-full w-full object-cover md:w-48"
              src="Forsidebillede1.jpg"
              alt="Image of a foot"
            />
          </div>
          <div class="p-8">
            <h2
              class="block mt-1 text-4xl leading-tight font-extrabold text-gray-900"
            >
              Kurser
            </h2>
            <p class="mt-2 text-gray-600 text-lg">
              Vores kurser er en unik mulighed for at træde ind i verden af
              specialiserede indlæg under kyndig vejledning fra os. Vi tror på,
              at forståelsen af, hvordan man skaber skræddersyede indlæg, er
              afgørende for langvarig fodkomfort. Gennem vores kurser får du
              ikke kun indsigt i grundlæggende fodplejeprincipper, men også en
              dybdegående forståelse af processen med at designe og fremstille
              indlæg. Lad os sammen udforske vejen til at mestre kunsten at
              skabe indlæg, der ikke kun støtter dine fødder, men også beriger
              din daglige bevægelse. Velkommen til Nordkystens Fodterapi - hvor
              uddannelse bliver fundamentet for sund og behagelig fodpleje.
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>
</Router>
