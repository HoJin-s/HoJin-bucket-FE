<template>
  <div class="back-color">
    <div class="login-wrap">
      <button @click="loginState" class="close-button">X</button>
      <div class="login">
        <div class="login-info">
          <h1>로그인</h1>
        </div>
        <div class="login-user">
          <p>닉네임</p>
          <input />
          <p>비밀번호</p>
          <input />
        </div>
        <form>
          <button class="login-button">로그인</button>
        </form>
        <div>
          <button @click="signupState" class="go-signup">
            회원가입 페이지로 →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/user/login.css";
import { mapState, mapMutations } from "vuex";

export default {
  name: "LoginPage",
  computed: {
    ...mapState("nav", ["clickSignup"]),
    ...mapState("nav", ["clickLogin"]),
  },
  methods: {
    ...mapMutations("nav", ["changeSignup"]),
    ...mapMutations("nav", ["changeLogin"]),

    signupState() {
      this.changeSignup({ state: true });
      this.changeLogin({ state: false });
    },
    loginState() {
      this.changeLogin({ state: false });
    },
  },
};
</script>
