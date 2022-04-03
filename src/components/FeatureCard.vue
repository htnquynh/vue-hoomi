<template>
  <div>
    <div class="pb-8"></div>
    <div
      class="px-8 py-4 flex justify-between items-center"
      :class="`bg-[${item.backgroundColor}]`"
    >
      <IconWrapper :svg="item.svg" />
      <ButtonText>
        Learn more
        <IconWrapper :svg="ic_arrow" />
      </ButtonText>
    </div>
    <div class="p-8 space-y-6">
      <h4 class="text-2xl md:text-3xl font-medium line-clamp-2">
        {{ item.title }}
      </h4>
      <p>
        {{ item.content }}
      </p>
    </div>
  </div>
</template>

<script>
import IconWrapper from "./IconWrapper.vue";
import ButtonText from "./buttons/ButtonText.vue";
export default {
  props: ["item"],
  components: {
    IconWrapper,
    ButtonText,
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
