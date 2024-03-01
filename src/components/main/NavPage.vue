<template>
    <nav class="navbar navbar-expand-lg" id="nav-wrap" style="background-color: rgb(255, 254, 239);">
        <div class="container-fluid">
            <div id="logo">
                <router-link to="/" ><img class="nav-link" src="@/assets/images/logo.png" width="40px;" height="45px;" /></router-link>
            </div>
            <div class="collapse navbar-collapse"  id="bucket">
                <router-link to="/" class="nav-link" >호진's 버킷리스트</router-link>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav" id="menu" >
                    <a class="nav-link" href="#">로그인</a>
                    <a class="nav-link" href="#">회원가입</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import "@/assets/css/main/navbar.css"

export default {
    name: 'NavBarPage',
    components: {

    }
  }
</script>
