<template>
  <div class="h-screen w-screen">
    <container title="Overview" :full="true">
      <div class="md:flex items-center justify-between h-full gap-12">
        <button v-for="route in routesArr"
                @click.prevent="navigateTo(route.name)"
                class="md:mt-0 mt-4 p-10 w-full bg-button rounded shadow-lg hover:p-12 transition-duration-1 flex items-center justify-center">
          <unicon :name="route.meta.icon" fill="white" class="mr-2"/>
          {{route.meta.title}}
        </button>
      </div>
    </container>
  </div>
</template>

<script>
import routes from "@/router/routes";

export default {
  name: "Overview",
  computed: {
    routesArr() {
      return routes.filter(route => route.name !== 'overview' && !route.name.includes('.show'))
    }
  },
  methods: {
    navigateTo(name) {
      if (name === 'home') {
        this.$emit('transition', {name: name, transition: 'slideUp'})
      } else {
        this.$emit('transition', {name:name, transition: 'fade'})
      }
    }
  }
}
</script>

<style scoped>

</style>