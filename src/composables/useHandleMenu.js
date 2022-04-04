import { ref } from "vue";

const useHandleMenu = () => {
  const isOpen = ref(false);

  const onToggleMenu = () => {
    isOpen.value = !isOpen.value;
  };

  return { isOpen, onToggleMenu };
};

export default useHandleMenu;
