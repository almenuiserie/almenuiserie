<script>
  const services = [
    {
      name: "Chassis",
      icon: "/images/icons/windows.svg",
      description:
        "Installation et remplacement de châssis en bois, PVC ou aluminium, alliant esthétisme et performance énergétique pour vos fenêtres et portes-fenêtres.",
    },
    {
      name: "Charpentes",
      icon: "/images/icons/toitures.svg",
      description:
        "Construction, rénovation et isolation de toitures, assurant une protection durable et une efficacité énergétique optimale pour votre habitation.",
    },
    {
      name: "Escaliers",
      icon: "/images/icons/escaliers.svg",
      description:
        "Conception et fabrication sur mesure d'escaliers en bois ou métal, adaptés à votre intérieur et à vos préférences esthétiques.",
    },
    {
      name: "Menuiserie générale",
      icon: "/images/icons/menuisiers.svg",
      description:
        "Réalisation de divers travaux de menuiserie, incluant la fabrication de meubles sur mesure, l'aménagement intérieur et extérieur, avec une attention particulière aux détails et à la qualité des matériaux.",
    },
  ];
</script>

<div
  id="services"
  class="mt-10 flex flex-col items-center justify-center md:mt-20"
>
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-center font-urbanist text-2xl font-semibold md:text-5xl">
      Nos Services
    </h1>
    <span
      class="text-md font-urbanist mt-2 px-2 text-center md:mt-4 md:px-5 md:text-xl"
      >Réalisez vos projets sur mesure sans contraintes.</span
    >
  </div>
  <div class="container mt-10 grid gap-10 p-4 md:grid-cols-2 xl:grid-cols-3">
    {#each services as item, index}
      <div
        class="card max-w-2xl shadow-sm transition duration-300 hover:-translate-y-1"
      >
        <div class="card-body">
          <div
            class="h-16 w-16 rounded-full bg-gradient-to-t from-base-300/20 to-base-content/10"
          >
            <img class="p-4" src={item.icon} alt={item.name} />
          </div>
          <h2 class="font-urbanist card-title text-3xl font-black">
            {item.name}
          </h2>
          <p class="text-md font-urbanist font-medium opacity-60">
            {item.description}
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>