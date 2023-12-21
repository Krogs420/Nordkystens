<script>
    import { onMount } from 'svelte';
    let kursusAPris = '';
  
    async function gemPris() {
      const url = '/gem-kursus-pris';
      const body = { kursusType: 'A', pris: kursusAPris };
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
  
        if (response.ok) {
          // Håndter succes
        } else {
          // Håndter fejl
        }
      } catch (error) {
        console.error('Fejl ved indsendelse:', error);
      }
    }
  </script>

<body class="bg-gray-50">
  <div class="container mx-auto px-6 py-10">
    <h1 class="text-4xl font-bold text-center py-10 text-gray-800">
      Nordkystens Fodterapi
    </h1>

    <div class="mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="flex flex-col items-center">
          <div class="p-8 w-full text-center">
            <h2 class="text-4xl font-extrabold text-gray-900 mb-6">Kursus priser</h2>
            <div class="text-gray-600 text-lg">
              <div class="flex justify-center items-center mb-4">
                <span>Kursus type A:</span>
                <input 
                  type="text" 
                  placeholder="Pris" 
                  class="ml-2 border border-gray-300 rounded-md shadow-sm p-2 w-32"
                />
                <p> kr.</p>
              </div>
              <div class="flex justify-center items-center mb-4">
                <span>Kursus type B:</span>
                <input 
                  type="text" 
                  placeholder="Pris" 
                  class="ml-2 border border-gray-300 rounded-md shadow-sm p-2 w-32"
                />
                <p> kr.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div class="mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="flex flex-col items-center">
          <div class="p-8 w-full text-center">
            <h2 class="text-4xl font-extrabold text-gray-900 mb-6">Indlæg priser</h2>
            <div class="text-gray-600 text-lg">
              <div class="flex justify-center items-center mb-4">
                <span>Indlæg type A:</span>
                <input 
                  type="text" 
                  placeholder="Pris" 
                  class="ml-2 border border-gray-300 rounded-md shadow-sm p-2 w-32"
                />
                <p> kr.</p>
              </div>
              <div class="flex justify-center items-center mb-4">
                <span>Indlæg type B:</span>
                <input 
                  type="text" 
                  placeholder="Pris" 
                  class="ml-2 border border-gray-300 rounded-md shadow-sm p-2 w-32"
                />
                <p> kr.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
</body>
