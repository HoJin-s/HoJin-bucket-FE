<template>
  <div class="back-color">
    <div class="signup-wrap">
      <button @click="signupState" class="close-button">X</button>
      <div class="signup">
        <div class="signup-info">
          <h1>회원가입</h1>
        </div>
        <form @submit.prevent="submitSignup">
          <div class="signup-user">
            <p>이메일</p>
            <input />
            <p>닉네임</p>
            <input />
            <p>비밀번호</p>
            <input />
            <p>비밀번호 확인</p>
            <input />
          </div>
          <button class="signup-button">회원가입</button>
        </form>
        <div>
          <button @click="loginState" class="go-login">
            로그인 페이지로 →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/user/signup.css";
import { mapState, mapMutations } from "vuex";

export default {
  name: "SignupPage",
  computed: {
    ...mapState("nav", ["clickSignup"]),
    ...mapState("nav", ["clickLogin"]),
  },
  methods: {
    ...mapMutations("nav", ["changeSignup"]),
    ...mapMutations("nav", ["changeLogin"]),

    signupState() {
      this.changeSignup({ state: false });
    },
    loginState() {
      this.changeLogin({ state: true });
      this.changeSignup({ state: false });
    },
  },
};
</script>
