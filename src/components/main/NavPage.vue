<template>
  <nav class="navbar navbar-expand-lg" id="nav-wrap">
    <div class="container-fluid">
      <div id="logo">
        <router-link to="/"
          ><img
            class="nav-link"
            src="@/assets/images/logo.png"
            width="40px;"
            height="45px;"
        /></router-link>
      </div>
      <div class="collapse navbar-collapse" id="bucket">
        <router-link to="/" class="nav-link">호진's 버킷리스트</router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav" id="menu">
          <a v-if="!isLogin" class="nav-link" @click="loginState">로그인</a>
          <a v-if="!isLogin" class="nav-link" @click="signupState">회원가입</a>
        </div>
        <div class="navbar-nav" id="is-login">
          <a v-if="isLogin" class="nav-link" @click="openHam"
            ><img src="@/assets/images/hamnav.png"
          /></a>
        </div>
      </div>
      <modalHam v-if="clickHam" />
    </div>
  </nav>
  <LoginPage v-if="clickLogin" />
  <SignupPage v-if="clickSignup" />
</template>

<script>
import "@/assets/css/main/navbar.css";
import LoginPage from "@/components/user/Login.vue";
import SignupPage from "@/components/user/Signup.vue";
import modalHam from "@/components/main/Modal.vue";

import { mapState, mapMutations } from "vuex";

export default {
  name: "NavBarPage",
  components: {
    LoginPage,
    SignupPage,
    modalHam,
  },
  computed: {
    ...mapState("nav", ["clickSignup"]),
    ...mapState("nav", ["clickLogin"]),
    ...mapState("nav", ["isLogin"]),
    ...mapState("nav", ["clickHam"]),
  },
  methods: {
    ...mapMutations("nav", ["changeSignup"]),
    ...mapMutations("nav", ["changeLogin"]),
    ...mapMutations("nav", ["changeHam"]),

    signupState() {
      this.changeSignup({ state: true });
    },
    loginState() {
      this.changeLogin({ state: true });
    },
    openHam() {
      this.changeHam({ state: true });
    },
  },
};
</script>
