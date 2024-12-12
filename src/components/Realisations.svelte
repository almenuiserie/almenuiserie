<script>
  const services = [
    {
      alt: "Photo représentant un service informatique",
      profile: "/images/realisation/sample.jpg",
    },
    {
      alt: "Photo représentant un service de développement web",
      profile: "/images/realisation/sample.jpg",
    },
    {
      alt: "Photo représentant un service de marketing digital",
      profile: "/images/realisation/sample.jpg",
    },
    {
      alt: "Photo représentant un service de développement mobile",
      profile: "/images/realisation/sample.jpg",
    },
    {
      alt: "Photo représentant un service de conception de sites",
      profile: "/images/realisation/sample.jpg",
    },
    {
      alt: "Photo représentant un service de montage vidéo",
      profile: "/images/realisation/sample.jpg",
    },
    {
      alt: "Photo représentant un service de maintenance informatique",
      profile: "/images/realisation/sample.jpg",
    },
    {
      alt: "Photo représentant un service d'audit informatique",
      profile: "/images/realisation/sample.jpg",
    },
    {
      alt: "Photo représentant un service de création de contenu",
      profile: "/images/realisation/sample.jpg",
    },
  ];
</script>

<div id="Realisations" class="flex flex-col items-center justify-center">
  <div class="flex flex-col items-center justify-center">
    <h1 class="font-urbanist text-center text-2xl font-semibold md:text-5xl">
      Réalisations
    </h1>
    <span
      class="text-md font-urbanist mt-4 px-2 text-center md:mt-4 md:px-5 md:text-xl"
      >Laissez part à votre immagination.</span
    >
  </div>
  <div class="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
    {#each services as service, index}
      <div class="card w-80 h-80 overflow-hidden border border-base-content/10 shadow-sm lg:w-96 lg:h-96">
        <img src={service.profile} alt={service.alt} class="h-full w-full object-cover" />
      </div>
    {/each}
  </div>
</div>