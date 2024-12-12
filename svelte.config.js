import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: "build", // Dossier de sortie pour les fichiers HTML
      assets: "build", // Dossier de sortie pour les fichiers statiques
      fallback: null, // Pas de fallback pour un site statique
    }),
    paths: {
      base: "", // Déploiement à la racine du domaine Netlify
    },
  },
  preprocess: vitePreprocess(),
};

export default config;