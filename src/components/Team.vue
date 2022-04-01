<template>
  <section class="py-16">
    <div class="container">
      <div class="space-y-24">
        <div>
          <h2 class="mx-auto text-center text-6xl font-black max-w-3xl">
            Our <span class="text-deep-blue-500">Financial Agents</span> Are
            Ready To Help You
          </h2>
        </div>
        <div class="grid grid-cols-3 gap-8">
          <div
            v-for="person in team"
            :key="person.id"
            class="rounded-2xl shadow-team"
          >
            <div class="pt-6"></div>
            <img :src="person.img" alt="Team" class="mx-auto w-2/3" />
            <div class="py-6 px-8 flex items-center justify-between">
              <p class="text-3xl font-bold">{{ person.name }}</p>
              <a
                href="#"
                class="flex items-center gap-2 text-tomato-500 uppercase font-medium"
              >
                Contact
                <svg
                  class="inline-block"
                  height="14"
                  viewBox="0 0 23 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928932C15.9526 0.538408 15.3195 0.538408 14.9289 0.928932C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM0 9H22V7H0V9Z"
                    fill="#F76031"
                  />
                </svg>
              </a>
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
