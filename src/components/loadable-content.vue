<template>
  <div :class="{'hidden': !loading}" class="flex items-center justify-center h-full w-full">
    <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" class="w-20" />
  </div>
  <div :class="{'hidden': loading}" class="h-full w-full">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "loadable-content",
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>