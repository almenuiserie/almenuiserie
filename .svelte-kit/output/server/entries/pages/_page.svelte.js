import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import "theme-change";
const Accueil = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="Accueil" class="hero py-10 flex justify-center" data-svelte-h="svelte-6w9vrm"><div class="hero-content flex-col lg:flex-row-reverse"><img src="/images/logo/flagalmenuiserie.svg" alt="Logo AL Menuiserie sur fond en bois" class="max-w-xs rounded-b-box rounded-t-[14rem] shadow-2xl outline outline-base-content/5 md:max-w-md"> <div class="text-center lg:text-start"><span class="badge badge-outline badge-lg">Menuiserie générale</span> <h1 class="font-urbanist text-3xl font-black uppercase md:text-7xl">Menuiserie générale
        <span class="text-base-content/30">pour votre confort</span></h1> <p class="py-6 font-urbanist lg:max-w-lg">AL Menuiserie vous accompagne dans la réalisation de vos travaux de menuiserie. Chassîs, toitures, escaliers, terrasse, vous pouvez compter sur nôtre équipe pour mener à bien vos projets !</p> <div class="flex gap-2 max-lg:justify-center"><a href="#contactus" class="btn btn-neutral md:btn-lg rounded-full font-urbanist shadow-md">Contacter</a></div></div></div></div>`;
});
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const services = [
    {
      name: "Chassis",
      icon: "/images/icons/windows.svg",
      description: "Unlock the full potential of your online presence with our comprehensive digital marketing solutions. In today's hyper-connected world, standing out in the digital landscape is essential for success."
    },
    {
      name: "Toitures",
      icon: "/images/icons/toitures.svg",
      description: "Embark on a digital journey with a captivating online presence crafted by our expert website development team. In today's digital era, your website serves as the cornerstone of your brand."
    },
    {
      name: "Escaliers",
      icon: "/images/icons/escaliers.svg",
      description: "Elevate your brand's online presence and engage with your audience like never before with our expert social media management services. In today's fast-paced digital landscape."
    },
    {
      name: "Menuiserie générale",
      icon: "/images/icons/menuisiers.svg",
      description: "Empower your business and connect with your audience on-the-go with our custom app development services. In today's mobile-centric world, having a tailored mobile application is essential."
    }
  ];
  return `<div id="services" class="mt-10 flex flex-col items-center justify-center md:mt-20"><div class="flex flex-col items-center justify-center" data-svelte-h="svelte-14elz5a"><h1 class="text-center font-urbanist text-2xl font-semibold md:text-5xl">Nos Services</h1> <span class="text-md font-urbanist mt-2 px-2 text-center md:mt-4 md:px-5 md:text-xl">Réalisez vos projets sur mesure sans contraintes.</span></div> <div class="container mt-10 grid gap-10 p-4 md:grid-cols-2 xl:grid-cols-3">${each(services, (item, index) => {
    return `<div class="card max-w-2xl shadow-sm transition duration-300 hover:-translate-y-1"><div class="card-body"><div class="h-16 w-16 rounded-full bg-gradient-to-t from-base-300/20 to-base-content/10"><img class="p-4"${add_attribute("src", item.icon, 0)}${add_attribute("alt", item.name, 0)}></div> <h2 class="font-urbanist card-title text-3xl font-black">${escape(item.name)}</h2> <p class="text-md font-urbanist font-medium opacity-60">${escape(item.description)} </p></div> </div>`;
  })}</div></div>`;
});
const ThemeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button class="swap swap-rotate btn btn-ghost btn-circle" data-toggle-theme="dark" data-act-class="swap-active" data-svelte-h="svelte-1n7fd10"> <svg class="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path></svg>  <svg class="swap-on fill-current w-6 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path></svg></button>`;
});
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const navigation = [
    { name: "Accueil", href: "#Accueil" },
    { name: "Services", href: "#services" },
    {
      name: "Réalisations",
      href: "#Realisations"
    },
    { name: "Avis", href: "#Avis" },
    { name: "Contact", href: "#Contact" }
  ];
  let active = "Accueil";
  return `<div class="sticky top-0 z-50 flex justify-center py-4"><div class="navbar max-w-xs rounded-full bg-base-100/90 py-0 shadow-2xl outline outline-base-content/5 backdrop-blur md:max-w-4xl"><div class="navbar-start"><div class="dropdown"><div tabindex="0" role="button" class="btn btn-circle btn-ghost lg:hidden" data-svelte-h="svelte-6df9cx"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></div> <ul class="menu dropdown-content menu-md z-[1] mt-3 w-52 gap-2 rounded-box bg-base-100 p-2 shadow">${each(navigation, (item) => {
    return `<li><a${add_attribute("href", item.href, 0)} class="font-urbanist">${escape(item.name)}</a> </li>`;
  })}</ul></div> <a href="/" class="btn btn-ghost rounded-full font-urbanist text-lg font-semibold" data-svelte-h="svelte-15sa0sa">AL Menuiserie</a></div> <div class="navbar-center ml-10 hidden lg:flex">${each(navigation, (item) => {
    return `<nav class="menu menu-horizontal px-1"><a${add_attribute("href", item.href, 0)}${add_attribute("class", `btn btn-ghost rounded-full font-urbanist text-sm font-light ${active === item.name ? "bg-base-300" : ""}`, 0)}>${escape(item.name)}</a> </nav>`;
  })}</div> <div class="navbar-end h-10">${validate_component(ThemeToggle, "ThemeToggle").$$render($$result, {}, {}, {})}</div></div></div>`;
});
const Realisations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const services = [
    {
      alt: "Photo représentant un service informatique",
      profile: "/images/realisations/chassis.svg"
    },
    {
      alt: "Photo représentant un service de développement web",
      profile: "/images/realisations/meubles.svg"
    },
    {
      alt: "Photo représentant un service de marketing digital",
      profile: "/images/realisations/toitures.svg"
    },
    {
      alt: "Photo représentant un service de développement mobile",
      profile: "/images/realisations/dressings.svg"
    },
    {
      alt: "Photo représentant un service de conception de sites",
      profile: "/images/realisations/garages.svg"
    },
    {
      alt: "Photo représentant un service de montage vidéo",
      profile: "/images/realisations/parquets.svg"
    },
    {
      alt: "Photo représentant un service de maintenance informatique",
      profile: "/images/realisations/terrasses.svg"
    },
    {
      alt: "Photo représentant un service d'audit informatique",
      profile: "/images/realisations/carports.svg"
    },
    {
      alt: "Photo représentant un service de création de contenu",
      profile: "/images/realisations/escaliers.svg"
    }
  ];
  return `<div id="Realisations" class="flex flex-col items-center justify-center"><div class="flex flex-col items-center justify-center" data-svelte-h="svelte-fnys4r"><h1 class="font-urbanist text-center text-2xl font-semibold md:text-5xl">Réalisations</h1> <span class="text-md font-urbanist mt-4 px-2 text-center md:mt-4 md:px-5 md:text-xl">Laissez part à votre immagination.</span></div> <div class="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">${each(services, (service, index) => {
    return `<div class="card w-80 h-80 overflow-hidden border border-base-content/10 shadow-sm lg:w-96 lg:h-96"><img${add_attribute("src", service.profile, 0)}${add_attribute("alt", service.alt, 0)} class="h-full w-full object-cover"> </div>`;
  })}</div></div>`;
});
const LogoClouds = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex w-full items-center justify-center py-10" data-svelte-h="svelte-16dgrua"><div><h2 class="text-base-400 mb-12 text-center font-urbanist text-lg font-semibold leading-8">Ils nous ont fait confiance</h2> <div class="wrap flex flex-wrap justify-center gap-10 xl:gap-32"><img class="w-32 grayscale" src="/images/logo/google.svg" alt="google"> <img class="w-32 grayscale" src="/images/logo/microsoft.svg" alt="google"> <img class="w-32 grayscale" src="/images/logo/spotify.svg" alt="google"> <img class="w-32 grayscale" src="/images/logo/netflix.svg" alt="google"></div></div></div>`;
});
const Avis_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const Avis = [
    {
      name: "Noa Stepien",
      id: "1",
      position: "Particuliers",
      quote: "Très sympathique et très compétent je recommande.",
      image: "images/icons/noastepien.png"
    },
    {
      name: "Sabine Rome",
      id: "2",
      position: "Particuliers",
      quote: "Patron hyper disponible et professionnel. Réponds aux urgences même s'il est tard, le top !",
      image: "images/icons/sabinerome.png"
    },
    {
      name: "Zakaria Baaza",
      id: "3",
      position: "Particuliers",
      quote: "Ma porte de garage a été installée dans les 15 jours ! Le rapport qualité-prix est excellent, encore merci.",
      image: "images/icons/zakariabaaza.png"
    }
  ];
  return `<div id="Avis" class="my-20 flex flex-col items-center justify-center md:my-32"><div class="flex flex-col items-center justify-center" data-svelte-h="svelte-1cch5z0"><h1 class="text-center font-urbanist text-2xl font-semibold md:text-5xl">Avis</h1> <span class="text-md mt-2 px-2 font-urbanist md:mt-4 md:px-5 md:text-xl">Ce qu&#39;en pensent nos clients ?</span></div> <div class="py-6 lg:py-10 flex flex-col max-w-7xl"><div class="carousel mx-2 lg:mx-4 max-w-full h-96 rounded-xl border border-base-content/10">${each(Avis, (item, index) => {
    return `<div${add_attribute("id", item.id, 0)} class="carousel-item w-full flex items-center justify-center"><figure class="mx-2 lg:mx-4 mt-6 lg:mt-10 max-w-full"><blockquote class="text-center font-urbanist font-bold leading-8 text-md lg:text-3xl lg:px-10"><p>“${escape(item.quote)}”</p></blockquote> <div class="mt-6 lg:mt-10 flex flex-col items-center"><img class="mx-auto h-12 lg:h-14 w-12 lg:w-14 rounded-full"${add_attribute("src", item.image, 0)}${add_attribute("alt", item.name, 0)}> <div class="mt-2 lg:mt-4 flex flex-col items-center"><div class="text-sm lg:text-base">${escape(item.name)}</div> <div class="text-xs lg:text-sm text-base-content/50">${escape(item.position)} </div></div> </div></figure> </div>`;
  })}</div> <div class="flex justify-center w-full py-2 gap-2" data-svelte-h="svelte-rzpp9r"><a href="#1" class="btn btn-xs">1</a> <a href="#2" class="btn btn-xs">2</a> <a href="#3" class="btn btn-xs">3</a></div></div></div>`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="Contact" class="mt-20" data-svelte-h="svelte-1u9m99n"><div class="flex w-full flex-col justify-center"><h1 class="text-center font-urbanist text-2xl font-semibold md:text-5xl">Nous contacter</h1> <span class="text-md mt-2 px-2 text-center font-urbanist md:mt-4 md:px-5 md:text-xl">Complétez notre formulaire et nous vous recontacterons avec des réponses</span></div> <div class="container mx-auto px-6 py-10"><div class="lg:-mx-6 lg:flex lg:items-center"><div class="lg:mx-0 lg:mt-0 lg:flex lg:w-1/2 lg:flex-col lg:items-center"><div class="mt-6 space-y-8 md:mt-8"><p class="-mx-2 flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="text-base-400 mx-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> <span class="mx-2 w-72 truncate font-urbanist text-base-content">Rue de la gare 3 7, 6250 Aiseau</span></p> <p class="-mx-2 flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="text-base-400 mx-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> <span class="mx-2 w-72 truncate font-urbanist text-base-content">+32 (0)489.34.16.98</span></p> <p class="-mx-2 flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="text-base-400 mx-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> <span class="mx-2 w-72 truncate font-urbanist text-base-content">contact@almenuiserie.be</span></p></div> <div class="mt-6 w-80 md:mt-8"><h3 class="text-base-400">Suivez-nous</h3> <div class="-mx-1.5 mt-4 flex"><a class="btn mx-1.5 rounded-full bg-base-100" href="https://www.facebook.com/profile.php?id=100076294563997" aria-label="facebook"><svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor"></path></svg></a></div></div></div> <div class="card mt-8 lg:mx-6 lg:w-1/2"><div class="card-body mx-auto w-full overflow-hidden rounded-lg px-8 py-10 shadow-xl outline outline-base-content/5 lg:max-w-xl"><h1 class="card-title">Faites-nous connaître vos besoins</h1> <form class="mt-6"><div class="flex-1"><label for="full-name" class="mb-2 block text-sm">Nom complet</label> <input id="name" autocomplete="name" type="text" placeholder="Votre nom complet" class="input input-bordered w-full"></div> <div class="mt-6 flex-1"><label for="email" class="mb-2 block text-sm">Adresse email</label> <input id="email" autocomplete="email" type="email" placeholder="abcd@example.com" class="input input-bordered w-full"></div> <div class="mt-6 w-full"><label for="message" class="mb-2 block text-sm">Votre message</label> <textarea id="message" autocomplete="message" class="textarea textarea-bordered w-full" placeholder="Message"></textarea></div> <button class="btn btn-neutral mt-6 w-full transform px-6 py-3 text-sm font-medium capitalize duration-300">Envoyer</button></form></div></div></div></div> <div class="flex items-center justify-center py-10 font-urbanist text-sm lg:text-lg"><h1>© 2024 NSMobile. Tous droits réservés.</h1></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="p-2 md:px-10">${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})} ${validate_component(Accueil, "Accueil").$$render($$result, {}, {}, {})} ${validate_component(Services, "Services").$$render($$result, {}, {}, {})} ${validate_component(Realisations, "Realisations").$$render($$result, {}, {}, {})} ${validate_component(LogoClouds, "LogoClouds").$$render($$result, {}, {}, {})} ${validate_component(Avis_1, "Avis").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
