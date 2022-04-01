<template>
  <section class="py-24">
    <div class="container">
      <div class="flex">
        <div class="w-6/12">
          <div class="space-y-16">
            <div class="space-y-8">
              <h2 class="text-80px font-black">
                Get The Right
                <span class="text-deep-blue-500">Protection</span> To Keep
                Moving <span class="text-deep-blue-500">Forward</span>
              </h2>
              <p>
                Adding to your family means adding to your financial needs.
                We're here to guide you as you work to secure the future of your
                loved ones.
              </p>
            </div>
            <a
              href="#"
              class="inline-block uppercase bg-tomato-500 text-white px-8 py-3 rounded-5px"
            >
              Explore our product
            </a>
          </div>
        </div>
        <div class="w-6/12">
          <div class="grid grid-cols-2 gap-8">
            <div
              v-for="item in services"
              :key="item.id"
              :class="{ 'transform translate-y-10': item.id % 2 }"
            >
              <div :class="['p-8 text-center', `bg-[${item.background}]`]">
                <p>{{ item.meta }}</p>
                <h3
                  :class="['pt-2 text-3xl font-medium', `text-[${item.color}]`]"
                >
                  {{ item.focusText }}
                </h3>
                <p class="pt-4 opacity-80">{{ item.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
