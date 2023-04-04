<template>
  <div class="w-screen h-screen" :class="{'fade': fade}">
    <slot></slot>
  </div>
  <div class="fixed background w-screen h-screen z-10" :class="{'slideUp': slideUp}">
  </div>
</template>

<script>
export default {
  name: "transition",
  props: {
    slideUp: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .background {
    background: linear-gradient(#010e38, #011656);
  }

  .slideUp {
    animation-name: slideUp;
    animation-duration: 1s;
    animation-delay: 0.1s;
  }

  .fade {
    animation-name: fadeAni;
    animation-duration: 0.5s;
    animation-delay: 0.1s;
  }
@keyframes slideUp {
  0% {
    top: 105vh;
  }
  40% {
    top: 0;
  }
  60% {
    top: 0;
  }
  100% {
    top: 105vh;
  }
}
@keyframes fadeAni {
  0% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>