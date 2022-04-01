<template>
  <header class="py-6">
    <div class="container">
      <div class="flex justify-between items-center">
        <div>
          <img src="/assets/img/logo.png" alt="Logo" class="h-10" />
        </div>
        <div>
          <nav>
            <ul class="flex gap-10">
              <li v-for="(link, index) in navLinks" :key="index">
                <a href="#">{{ link }}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <a
            href="#"
            class="inline-block uppercase bg-tomato-500 text-white px-8 py-3 rounded-5px"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    navLinks: [
      "Home",
      "Insurance",
      "How It Works",
      "Agents",
      "Product",
      "Contact",
    ],
  }),
};
</script>
