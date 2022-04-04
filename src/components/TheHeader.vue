<script setup>
import { onMounted, ref } from "vue";

import ButtonSolid from "./buttons/ButtonSolid.vue";
import useHandleMenu from "../composables/useHandleMenu";

const { isOpen, onToggleMenu } = useHandleMenu();
console.log("Is open: ", isOpen);

const navLinks = [
  "Home",
  "Insurance",
  "How It Works",
  "Agents",
  "Product",
  "Contact",
];
</script>

<template>
  <header class="bg-[#ECEEFF] py-6">
    <div class="container">
      <div class="flex justify-between items-center">
        <div>
          <img src="/assets/img/logo.png" alt="Logo" class="h-10" />
        </div>
        <div class="hidden lg:block">
          <nav>
            <ul class="flex gap-10">
              <li v-for="(link, index) in navLinks" :key="index">
                <a href="#">{{ link }}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="hidden lg:block">
          <ButtonSolid>Sign Up</ButtonSolid>
        </div>

        <div class="lg:hidden relative">
          <button class="p-2" @click="onToggleMenu">
            <svg
              id="menu"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div
      :class="[isOpen ? 'ease-in-out' : 'translate-x-64 ease-in']"
      class="transform transition-transform duration-500 lg:hidden fixed z-50 w-64 h-screen right-0 top-0 bg-white shadow-feature"
    >
      <div class="space-y-4 py-8 px-8">
        <div class="text-right">
          <button
            @click="onToggleMenu"
            class="inline-block bg-[#FFF8E1] p-2 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav>
          <ul class="space-y-4">
            <li v-for="(link, index) in navLinks" :key="index">
              <a href="#">{{ link }}</a>
            </li>
          </ul>
        </nav>
        <div class="">
          <ButtonSolid>Sign Up</ButtonSolid>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.menu-close {
  display: block;
  max-width: 0px;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
}

.menu-close.show {
  max-width: 100%;
  transition: max-height 0.5s ease-in-out;
}
</style>
