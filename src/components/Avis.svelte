<script>
  const Avis = [
    {
      name: "Noa Stepien",
      id: "1",
      position: "Particuliers",
      quote:
        "Très sympathique et très compétent je recommande.",
      image: "images/icons/noastepien.png",
    },
    {
      name: "Sabine Rome",
      id: "2",
      position: "Particuliers",
      quote:
        "Patron hyper disponible et professionnel. Réponds aux urgences même s'il est tard, le top !",
      image:"images/icons/sabinerome.png",
    },
    {
      name: "Zakaria Baaza",
      id: "3",
      position: "Particuliers",
      quote: "Ma porte de garage a été installée dans les 15 jours ! Le rapport qualité-prix est excellent, encore merci.",
      image:"images/icons/zakariabaaza.png",
    },
  ];
</script>

<div
  id="Avis"
  class="my-20 flex flex-col items-center justify-center md:my-32"
>
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-center font-urbanist text-2xl font-semibold md:text-5xl">
      Avis
    </h1>
    <span class="text-md mt-2 px-2 font-urbanist md:mt-4 md:px-5 md:text-xl">
      Ce qu'en pensent nos clients ?
    </span>
  </div>

  <div class="py-6 lg:py-10 flex flex-col max-w-7xl">
    <div
      class="carousel mx-2 lg:mx-4 max-w-full h-96 rounded-xl border border-base-content/10"
    >
      {#each Avis as item, index}
        <div
          id={item.id}
          class="carousel-item w-full flex items-center justify-center"
        >
          <figure class="mx-2 lg:mx-4 mt-6 lg:mt-10 max-w-full">
            <blockquote
              class="text-center font-urbanist font-bold leading-8 text-md lg:text-3xl lg:px-10"
            >
              <p>“{item.quote}”</p>
            </blockquote>
            <div class="mt-6 lg:mt-10 flex flex-col items-center">
              <img
                class="mx-auto h-12 lg:h-14 w-12 lg:w-14 rounded-full"
                src={item.image}
                alt={item.name}
              />
              <div class="mt-2 lg:mt-4 flex flex-col items-center">
                <div class="text-sm lg:text-base">{item.name}</div>
                <div class="text-xs lg:text-sm text-base-content/50">
                  {item.position}
                </div>
              </div>
            </div>
          </figure>
        </div>
      {/each}
    </div>
    <div class="flex justify-center w-full py-2 gap-2">
      <a href="#1" class="btn btn-xs">1</a>
      <a href="#2" class="btn btn-xs">2</a>
      <a href="#3" class="btn btn-xs">3</a>
    </div>
  </div>
</div>
