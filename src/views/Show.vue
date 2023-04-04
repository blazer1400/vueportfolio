<template>
  <div class="p-4">
    <v-button @click="this.$router.push({name: 'work'})" class="pr-4">
      <unicon name="angle-left" fill="white" />
      Back</v-button>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 h-[85%]">
    <div class="p-10">
      <p class=" text-3xl">{{ site.name }}</p>
      <p class="mt-10 text-lg">{{ site.description }}</p>
      <a :href="site.src" target="_blank" class="md:hidden block mt-6 mx-auto w-max rounded p-2 text-blue-500 hover:text-blue-600 hover:underline">Open site</a>
    </div>
    <div class="w-full h-full col-span-2 hidden md:block">
      <loadable-content :loading="loading">
        <iframe :src="site.src" @load="loadHandler" class="w-full h-full"></iframe>
        <a target="_blank" :href="site.src" class="hover:underline">Open site</a>
      </loadable-content>
    </div>
    <div class="col-span-3 md:flex items-center md:mx-16 mx-auto" :class="site.used > 3 ? 'justify-between': 'justify-center gap-40'">
      <div v-for="item in site.used" class="w-max bg-gray-700/20 mt-10 rounded-xl p-2">
        <img :src="`/src/assets/logos/${item}`" class="w-40" />
      </div>
    </div>
  </div>
</template>

<script>
import sitesJson from '@/assets/sites.json'
import LoadableContent from "@/components/loadable-content.vue";

export default {
  name: "Show",
  components: {LoadableContent},
  setup() {
    const sites = sitesJson
    return {
      sites
    }
  },
  data() {
    return {
      site: {},
      loading: true,
      eventCount: 0
    }
  },
  mounted() {
    this.fetchSite()
  },
  methods: {
    fetchSite() {
      this.site = this.sites.sites.find(site => site.id === this.$route.params.id)
    },
    loadHandler() {
      this.eventCount++
      if (this.eventCount >= 2) {
        this.eventCount = 0
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>

</style>