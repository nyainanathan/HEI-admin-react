const Template = () => {
    return (
        <div id="slideshow-container" class="relative w-full max-w-4xl mx-auto h-96 overflow-hidden rounded-lg shadow-lg">

  <div class="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 opacity-100 flex items-center justify-center p-8" style="background-image: url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3');">
    <div class="text-center text-white p-6 rounded-md bg-black bg-opacity-50">
      <h2 class="text-3xl font-bold mb-2">Découvrez de nouveaux horizons</h2>
      <p>Un voyage inoubliable vous attend.</p>
    </div>
  </div>

  <div class="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 opacity-0 flex items-center justify-center p-8" style="background-image: url('https://images.unsplash.com/photo-1579547625121-61921c2718ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3');">
    <div class="text-center text-white p-6 rounded-md bg-black bg-opacity-50">
      <h2 class="text-3xl font-bold mb-2">L'aventure en pleine nature</h2>
      <p>Respirez l'air frais des montagnes.</p>
    </div>
  </div>

  <div class="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 opacity-0 flex items-center justify-center p-8" style="background-image: url('https://images.unsplash.com/photo-1629853965564-946e5306385d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3');">
    <div class="text-center text-white p-6 rounded-md bg-black bg-opacity-50">
      <h2 class="text-3xl font-bold mb-2">Les lumières de la ville</h2>
      <p>Explorez le rythme trépidant.</p>
    </div>
  </div>

  <button id="prev-slide" class="absolute top-1/2 left-4 -translate-y-1/2 text-white text-3xl font-bold p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all">
    &lsaquo;
  </button>
  <button id="next-slide" class="absolute top-1/2 right-4 -translate-y-1/2 text-white text-3xl font-bold p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all">
    &rsaquo;
  </button>
</div>
    )
}