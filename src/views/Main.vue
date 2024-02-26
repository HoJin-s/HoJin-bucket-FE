<template>
  <div class="main-detail">
    <h1>환장의 커플,</h1>
    <h1>환장의 버킷리스트</h1>

    <div style="margin: 25px 0px 25px 0px;">
      <p>기호와 혜진이의 버킷리스트 !!!</p>
      <p>지금 바로 만나보세요</p>
    </div>

    <router-link to="/lists">모아보기</router-link>
    <button> <img src="@/assets/play.png" height="23px"/>미리보기</button>
  </div>
  <img src="@/assets/whale.png" class="whale" />
</template>

<script>
export default {
    name: 'MainPage',
  }
</script>

<style>

.main-detail {
  width : 47%;
  float : left;

  margin : 10% 5% 10% 5%; 
  text-align: center;
}

.main-detail button {
  width : 35%;
  height : 25%;
  border : none;
}

.main-detail h1 {
  font-weight: bold;
  background: linear-gradient(to right top, #0013e0, #d701ba);
  color: transparent;
  -webkit-background-clip: text;
}

.main-detail p {
  margin-bottom: 0.5rem;
}

.whale {
  width : 43%;
  float: right;
}



</style>