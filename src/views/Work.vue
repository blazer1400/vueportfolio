<template>
  <container title="My work">
    <div :class="`grid lg:grid-cols-${sites.length < 4 ? sites.length : '4'} md:grid-cols-2 grid-cols-1 mt-4 gap-4`">
      <div v-for="site in sites"
           @click.prevent="this.$router.push({name: 'work.show', params: {id: site.id}})"
           class="border border-button bg-button shadow-lg rounded-xl w-max max-w-[270px] m-auto pb-8 overflow-hidden cursor-pointer hover:shadow-gray-900  `">
        <img class="w-full" :src="`src/assets/sites/${site.img}`" />
        <div class="m-2">
          <p class="hover:underline text-xl text-center">{{ site.name }}</p>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import sitesJson from '@/assets/sites.json'

export default {
  name: "Work",
  setup() {
    const sites = sitesJson
    return sites
  }

}
</script>

<style scoped>

</style>