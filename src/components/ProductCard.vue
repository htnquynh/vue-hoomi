<template>
  <div class="py-8 px-6 space-y-8 bg-white shadow-product rounded-2xl">
    <div class="w-max leading-0 mx-auto rounded-full p-3 shadow-product-icon">
      <IconWrapper :svg="item.svg" />
    </div>
    <div class="space-y-5 text-center">
      <h4 class="text-2xl font-medium">{{ item.title }}</h4>
      <p class="opacity-80">{{ item.content }}</p>
    </div>
  </div>
</template>
<script>
import IconWrapper from "./IconWrapper.vue";
export default {
  props: ["item"],
  components: {
    IconWrapper,
  },
};
</script>
