<template>
  <div class="fixed w-full -bottom-11 transition-duration-1 hover:bottom-0 flex justify-between items-center gap-4 px-4">
    <button v-for="route in routesArr"
            @click.prevent="navigateTo(route.name)"
            :class="{
              'bg-white text-black': this.$route.name === route.name,
              'hover:bg-white hover:text-black': this.$route.name !== route.name
            }"
            class="flex items-center justify-center rounded-t-lg border-t border-l border-r w-full h-10 text-lg pt-10 pb-8 gap-2">
      <unicon :name="route.meta.icon"
              :fill="{'black': this.$route.name === route.name, 'white': this.$route.name !== route.name}" />
      {{ route.meta.title }}
    </button>
  </div>
</template>

<script>
import routes from "@/router/routes";
export default {
  name: "navBar",
  computed: {
    routesArr() {
      return routes.filter(route => !route.name.includes('.show'))
    }
  },
  methods: {
    navigateTo(name) {
      if (name === 'home') {
        this.$emit('transition', {name: name, transition: 'slideUp'})
      } else {
        this.$emit('transition', {name: name, transition: 'fade'})
      }
    }
  }
}
</script>

<style scoped>

</style>