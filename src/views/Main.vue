<template>
  <NavBar @openLogin="user_open=1" @openSignup="user_open=2" />
  <LoginPage @closeLogin="user_open=0" @goSignup="user_open=2" :user_open="user_open" />
  <SignupPage @closesignup="user_open=0" @goLogin="user_open=1" :user_open="user_open" />
  <MainPage />
</template>

<script>
import MainPage from "@/components/main/Mainpage.vue"
import NavBar from '@/components/main/Nav.vue'
import LoginPage from "@/components/user/Login.vue"
import SignupPage from "@/components/user/Signup.vue"


export default {
  name: 'MainPages',
  data() {
    return {
      user_open : 0,
    }
  },
  components: {
      MainPage,
      NavBar,
      LoginPage,
      SignupPage
  },
  methods: {
  }
}
</script>
