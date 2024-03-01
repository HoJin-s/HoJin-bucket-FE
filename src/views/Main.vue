<template>
  <NavBar />
  <MainPage />
</template>

<script>
import MainPage from "@/components/main/Mainpage.vue"
import NavBar from '@/components/main/Nav.vue'

export default {
  name: 'MainPages',
  components: {
      MainPage,
      NavBar
  },
  methods: {
  }
}
</script>

<style >

</style>