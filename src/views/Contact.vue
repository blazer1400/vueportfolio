<template>
  <container title="Contact" :full="true">
    <div class="space-y-2 mt-4 h-full md:text-lg md:text-left text-center text-2xl">
      <div>
        <p>Email: s.broersma@kpnplanet.nl</p>
        <a href="mailto:s.broersma@kpnplanet.nl" class="hover:underline text-blue-600">E-mail me</a>
      </div>
      <div>
        <p>Phone: 06 42830747</p>
        <a href="tel:0642830747" class="block md:hidden hover:underline text-blue-600">Call me</a>
      </div>
      <div class="flex items-center justify-center w-48 md:w-max md:justify-between md:m-0 gap-8 m-auto">
        <a class="hover:bg-gray-700/20 rounded-xl" target="_blank" href="https://www.linkedin.com/in/stanbroersma/">
          <img src="@/assets/logos/linkedin.png" class="w-20"/>
        </a>
        <a class="hover:bg-gray-700/20 rounded-xl" target="_blank" href="https://github.com/blazer1400">
          <img src="@/assets/logos/github.png" class="w-20" />
        </a>
      </div>
    </div>
  </container>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

</style>