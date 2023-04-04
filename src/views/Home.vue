<template>
  <div class="w-screen h-screen background flex items-center justify-center">
    <div>
      <p class="md:text-6xl text-5xl text-center mb-60">Portfolio Stan Broersma</p>
      <v-button class="pl-4 m-auto" @click.prevent="open()">
        Open
        <unicon name="angle-down" fill="white"/>
      </v-button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  methods: {
    open() {
      this.$emit('transition', {name: 'overview', transition: 'slideUp'})
    }
  }
}
</script>

<style scoped>
.background {
  background: url("/src/assets/background.jpg");
  background-size: cover;
}
</style>