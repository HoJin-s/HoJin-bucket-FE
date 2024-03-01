<template>
    <div class="main-detail">
      <h1>환장의 커플,</h1>
      <h1>환장의 버킷리스트</h1>
  
      <div class="main-introduce">
        <p>기호와 혜진이의 버킷리스트 !!!</p>
        <p>지금 바로 만나보세요</p>
      </div>
  
      <button class="list"><router-link to="/lists">모아보기</router-link></button>
      <button class="play"> <img src="@/assets/images/play.png" height="23px"/>미리보기</button>
    </div>
    <img src="@/assets/images/whale.png" class="whale" />
  </template>
  
  <script>
  import "@/assets/css/main/main.css"
  
  export default {
      name: 'MainPage',
    }
  </script>