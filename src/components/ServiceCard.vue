<template>
  <div :class="['rounded-2xl p-8 text-center', `bg-[${item.background}]`]">
    <p>{{ item.meta }}</p>
    <h3 :class="['pt-2 text-3xl font-medium', `text-[${item.color}]`]">
      {{ item.focusText }}
    </h3>
    <p class="pt-4 opacity-80">{{ item.content }}</p>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>
