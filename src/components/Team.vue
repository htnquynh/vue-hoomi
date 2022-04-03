<template>
  <section class="py-24">
    <div class="container">
      <div class="space-y-12 md:space-16 lg:space-y-24">
        <div class="relative">
          <img
            src="/assets/img/team-decor-3.png"
            alt="Feature"
            class="absolute -z-1 -bottom-4 left-8"
          />
          <img
            src="/assets/img/team-decor-4.png"
            alt="Feature"
            class="absolute -z-1 -top-12 right-8"
          />
          <h2
            class="mx-auto text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-80px font-black max-w-3xl"
          >
            Our <span class="text-deep-blue-500">Financial Agents</span> Are
            Ready To Help You
          </h2>
        </div>
        <div
          class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div
            v-for="person in team"
            :key="person.id"
            class="rounded-2xl shadow-team"
          >
            <TeamCard :person="person" />
          </div>

          <img
            src="/assets/img/team-decor-1.png"
            alt="Feature"
            class="absolute -z-1 -top-12 -left-14"
          />
          <img
            src="/assets/img/team-decor-2.png"
            alt="Feature"
            class="absolute -z-1 -bottom-8 -right-4"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TeamCard from "./TeamCard.vue";
export default {
  components: {
    TeamCard,
  },
  data: () => ({
    team: [
      {
        id: 0,
        name: "Olivia",
        img: "/assets/img/team-1.png",
      },
      {
        id: 1,
        name: "Liam",
        img: "/assets/img/team-2.png",
      },
      {
        id: 2,
        name: "Riley",
        img: "/assets/img/team-3.png",
      },
    ],
  }),
};
</script>
