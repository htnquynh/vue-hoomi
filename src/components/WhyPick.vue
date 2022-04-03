<template>
  <section class="py-24 bg-[#ECEDFC]">
    <div class="container">
      <div class="flex flex-col items-center gap-8 md:flex-row">
        <div class="md:w-6/12 md:order-2 relative">
          <img
            src="/assets/img/why-pick-illustration.png"
            alt="Why pick illustration"
            class="transform scale-125 origin-bottom md:translate-x-8"
          />

          <img
            src="/assets/img/why-pick-decor-3.png"
            alt="Feature"
            class="absolute -top-16 -right-8"
          />

          <img
            src="/assets/img/why-pick-decor-6.png"
            alt="Feature"
            class="absolute bottom-8 -left-8"
          />
        </div>
        <div class="md:w-6/12 md:order-1">
          <h2 class="text-4xl lg:text-6xl 2xl:text-80px font-black relative">
            Why Pick <span class="text-deep-blue-500">Hoomi</span> For Your
            Insurance <span class="text-deep-blue-500">Needs?</span>

            <img
              src="/assets/img/why-pick-decor-1.png"
              alt="Feature"
              class="absolute -top-16 -left-8"
            />
            <img
              src="/assets/img/why-pick-decor-2.png"
              alt="Feature"
              class="absolute -top-8 -right-4"
            />
            <img
              src="/assets/img/why-pick-decor-4.png"
              alt="Feature"
              class="absolute -bottom-4 right-16"
            />
          </h2>
          <p class="pt-6 text-lg md:text-xl opacity-80">
            Adding to your family means adding to your financial needs. We're
            here to guide you as you work to secure the future of your loved
            ones.
          </p>
          <div class="pt-12 relative">
            <ButtonSolid>Learn More</ButtonSolid>
            <img
              src="/assets/img/why-pick-decor-5.png"
              alt="Feature"
              class="absolute bottom-2 right-32"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonSolid from "./buttons/ButtonSolid.vue";
export default {
  components: {
    ButtonSolid,
  },
};
</script>
