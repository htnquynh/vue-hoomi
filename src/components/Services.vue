<template>
  <section class="py-24">
    <div class="container">
      <div class="flex flex-col gap-8 md:flex-row">
        <div class="md:w-6/12">
          <div class="space-y-10 relative">
            <div class="space-y-8">
              <h2
                class="relative text-4xl lg:text-6xl 2xl:text-80px font-black"
              >
                Get The Right
                <span class="text-deep-blue-500">Protection</span> To Keep
                Moving <span class="text-deep-blue-500">Forward</span>

                <img
                  src="/assets/img/service-decor-1.png"
                  alt="Feature"
                  class="absolute -top-16 -left-4"
                />

                <img
                  src="/assets/img/service-decor-2.png"
                  alt="Feature"
                  class="absolute -top-8 -right-8"
                />
              </h2>
              <p>
                Adding to your family means adding to your financial needs.
                We're here to guide you as you work to secure the future of your
                loved ones.
              </p>
            </div>
            <ButtonSolid> Explore our product </ButtonSolid>
            <img
              src="/assets/img/service-decor-3.png"
              alt="Feature"
              class="absolute bottom-0 right-4"
            />
          </div>
        </div>
        <div class="md:w-6/12 relative">
          <img
            src="/assets/img/service-decor-4.png"
            alt="Feature"
            class="absolute -bottom-16 -left-16"
          />
          <img
            src="/assets/img/service-decor-5.png"
            alt="Feature"
            class="absolute z-10 -top-16 -right-16"
          />
          <div class="grid grid-cols-2 gap-8">
            <div
              v-for="item in services"
              :key="item.id"
              :class="{ 'transform translate-y-10': item.id % 2 }"
            >
              <ServiceCard :item="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonSolid from "./buttons/ButtonSolid.vue";
import ServiceCard from "./ServiceCard.vue";
export default {
  components: {
    ServiceCard,
    ButtonSolid,
  },
  data: () => ({
    services: [
      {
        id: 0,
        meta: "Savings",
        focusText: "Over $700",
        content:
          "Average annual savings for drivers who switch to Progressive and save.",
        background: "#F0F1FF",
        color: "#3B4EFF",
      },
      {
        id: 1,
        meta: "Customer",
        focusText: "25 million+",
        content:
          "Average annual savings for drivers who switch to Progressive and save.",
        background: "#FFF0EB",
        color: "#F76031",
      },
      {
        id: 2,
        meta: "Support",
        focusText: "24/7 hour",
        content:
          "Average annual savings for drivers who switch to Progressive and save.",
        background: "#FFF8E0",
        color: "#FFCE33",
      },
      {
        id: 3,
        meta: "Awards",
        focusText: "50+ winning",
        content:
          "Average annual savings for drivers who switch to Progressive and save.",
        background: "#F0F6FF",
        color: "#3485FF",
      },
    ],
  }),
};
</script>
