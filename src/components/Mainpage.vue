<template>
    <NavBar />
    <MainPage />
</template>

<script>
import MainPage from "@/views/Main.vue"
import NavBar from '@/views/Nav.vue'

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
body {
    background-color: rgb(255, 254, 239);
}
</style>