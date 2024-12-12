<script>
  import Accueil from "../components/Accueil.svelte";
  import Services from '../components/Services.svelte';
  import NavBar from "../components/NavBar.svelte";
  import Realisations from "../components/Realisations.svelte";
  import LogoClouds from '../components/LogoClouds.svelte';
  import Avis from '../components/Avis.svelte';
  import Contact from "../components/Contact.svelte";
</script>

<main class="p-2 md:px-10">
  <NavBar />
  <Accueil />
  <Services />
  <Realisations />
  <LogoClouds />
  <Avis />
  <Contact />
</main>
