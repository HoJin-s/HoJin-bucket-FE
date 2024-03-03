<template>
    <div class="back-color">
        <div class="signup-wrap" v-if="user_open == 2">
            <button @click="$emit('closesignup')" class="close-button">X</button>
            <div class="signup">
                <div class="signup-info">
                    <h1>회원가입</h1>
                </div>
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
                <form>
                    <button class="signup-button">회원가입</button>
                </form>
                <div>
                    <button @click="$emit('goLogin')" class="go-login">로그인 페이지로 →</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import "@/assets/css/user/signup.css"

export default {
    name: 'SignupPage',
    props : {
        user_open: Number,
    },
}
</script>