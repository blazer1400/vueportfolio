<template>
  <div class="md:p-28 py-28 px-10 h-full w-full">
    <p class="text-3xl">{{ title }}</p>
    <div :class="{
      'w-full h-full': full
    }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "container",
  props: {
    title: {
      default: null,
      type: String
    },
    full: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style scoped>

</style>