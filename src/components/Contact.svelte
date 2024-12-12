<script>
</script>

<section id="Contact" class="mt-20">
  <div class="flex w-full flex-col justify-center">
    <h1 class="text-center font-urbanist text-2xl font-semibold md:text-5xl">
      Nous contacter
    </h1>
    <span
      class="text-md mt-2 px-2 text-center font-urbanist md:mt-4 md:px-5 md:text-xl"
    >
    Complétez notre formulaire et nous vous recontacterons avec des réponses
    </span>
  </div>
  <div class="container mx-auto px-6 py-10">
    <div class="lg:-mx-6 lg:flex lg:items-center">
      <div class="lg:mx-0 lg:mt-0 lg:flex lg:w-1/2 lg:flex-col lg:items-center">
        <div class="mt-6 space-y-8 md:mt-8">
          <p class="-mx-2 flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-base-400 mx-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-Width="2"
            >
              <path
                stroke-Linecap="round"
                stroke-Linejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-Linecap="round"
                stroke-Linejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <span class="mx-2 w-72 truncate font-urbanist text-base-content">
              Rue de la gare 3 7, 6250 Aiseau
            </span>
          </p>

          <p class="-mx-2 flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-base-400 mx-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-Width="2"
            >
              <path
                stroke-Linecap="round"
                stroke-Linejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>

            <span class="mx-2 w-72 truncate font-urbanist text-base-content">
              +32 (0)489.34.16.98
            </span>
          </p>

          <p class="-mx-2 flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-base-400 mx-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-Width="2"
            >
              <path
                stroke-Linecap="round"
                stroke-Linejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>

            <span class="mx-2 w-72 truncate font-urbanist text-base-content">
              contact@almenuiserie.be
            </span>
          </p>
        </div>

        <div class="mt-6 w-80 md:mt-8">
          <h3 class="text-base-400">Suivez-nous</h3>

          <div class="-mx-1.5 mt-4 flex">
            <a
              class="btn mx-1.5 rounded-full bg-base-100"
              href="https://www.facebook.com/profile.php?id=100076294563997"
              aria-label="facebook"
            >
              <svg
                class="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="card mt-8 lg:mx-6 lg:w-1/2">
        <div
          class="card-body mx-auto w-full overflow-hidden rounded-lg px-8 py-10 shadow-xl outline outline-base-content/5 lg:max-w-xl"
        >
          <h1 class="card-title">Faites-nous connaître vos besoins</h1>

          <form class="mt-6">
            <div class="flex-1">
              <label for="full-name" class="mb-2 block text-sm"> Nom complet </label>
              <input
                id="name"
                autoComplete="name"
                type="text"
                placeholder="Votre nom complet"
                class="input input-bordered w-full"
              />
            </div>

            <div class="mt-6 flex-1">
              <label for="email" class="mb-2 block text-sm"> Adresse email </label>
              <input
                id="email"
                autoComplete="email"
                type="email"
                placeholder="abcd@example.com"
                class="input input-bordered w-full"
              />
            </div>

            <div class="mt-6 w-full">
              <label for="message" class="mb-2 block text-sm"> Votre message </label>
              <textarea
                id="message"
                autoComplete="message"
                class="textarea textarea-bordered w-full"
                placeholder="Message"
              ></textarea>
            </div>

            <button
              class="btn btn-neutral mt-6 w-full transform px-6 py-3 text-sm font-medium capitalize duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex items-center justify-center py-10 font-urbanist text-sm lg:text-lg"
  >
    <h1>© 2024 NSMobile. Tous droits réservés.</h1>
  </div>
</section>
