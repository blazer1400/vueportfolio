<template>
  <div class="w-full bg-gray-900 fixed top-0 left-0 z-10">
    <button class="ml-4" @click.prevent="showMenu = !showMenu">
      <img src="src/assets/bars.svg" class="w-20" />
    </button>
    <div class="w-full bg-gray-900" v-if="showMenu">
      <div v-for="route in routesArr" @click.prevent="navigateTo(route.name)" class="flex items-center p-4 text-xl hover:bg-gray-800 border-b border-button">
        <unicon :name="route.meta.icon" fill="white" class="mr-4" />
        {{ route.meta.title }}
      </div>
    </div>
  </div>
</template>

<script>
import routes from "@/router/routes";
export default {
  name: "mobile-nav-bar",
  data() {
    return {
      showMenu: false
    }
  },
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
      this.showMenu = false
    }
  }
}
</script>

<style scoped>

</style>