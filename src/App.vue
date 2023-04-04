<template>
  <v-transition :slideUp="slideUp" :fade="fade">
    <mobile-nav-bar @transition="(value) => transitionHandler(value)" v-if="navConditions(this.$route.name)" class="md:hidden fixed" />
    <RouterView @transition="(value) => transitionHandler(value)" />
    <nav-bar @transition="(value) => transitionHandler(value)" v-if="navConditions(this.$route.name)" class="md:flex hidden"/>
  </v-transition>
</template>

<script>
import vTransition from "@/components/transition.vue";
import navBar from "@/components/navBar.vue";
import MobileNavBar from "@/components/mobile-nav-bar.vue";

export default {
  components: {MobileNavBar, vTransition, navBar},
  data() {
    return {
      slideUp: false,
      fade: false,
    }
  },
  methods: {
    transitionHandler(value) {
      if (value.transition === 'slideUp') {
        this.slideUp = true
        setTimeout(() => {
          this.$router.push({name: value.name})
        }, 600)
        setTimeout(() => {
          this.slideUp = false
        }, 1100)
      } else if (value.transition === 'fade') {
        this.fade = true
        setTimeout(() => {
          this.$router.push({name: value.name})
        }, 300)
        setTimeout(() => {
          this.fade = false
        }, 550)
      }
    },
    navConditions(routeName) {
      if (routeName === 'home' || routeName === 'overview') {
        return false
      }
      return true
    }
  }
}
</script>

<style scoped>

</style>
