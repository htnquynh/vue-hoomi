<template>
  <div>
    <div class="pt-6"></div>
    <div class="mx-8 md:mx-14 2xl:mx-28">
      <div class="aspect-350/290">
        <img :src="person.img" alt="Team" class="" />
      </div>
    </div>
    <div class="py-6 px-8 flex items-center justify-between">
      <p class="text-3xl md:text-4xl 2xl:text-5xl font-bold">
        {{ person.name }}
      </p>
      <ButtonText>
        Contact
        <IconWrapper :svg="ic_arrow" />
      </ButtonText>
    </div>
  </div>
</template>
<script>
import ButtonText from "./buttons/ButtonText.vue";
import IconWrapper from "./IconWrapper.vue";
export default {
  props: ["person"],
  components: {
    ButtonText,
    IconWrapper,
  },
  data: () => ({
    ic_arrow: `<svg
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
                </svg>`,
  }),
};
</script>
