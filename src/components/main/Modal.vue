<template>
  <div class="modal-btn">
    <div class="close-modal" @click="closeHam"><button>X</button></div>
    <div class="move-page">
      <button>혜진's</button>
      <button>기호's</button>
      <button>모아보기</button>
      <button>버킷 추가</button>
    </div>
    <div class="logout">
      <button>로그아웃</button>
    </div>
  </div>
</template>

<script>
import "@/assets/css/main/modal.css";
import { mapState, mapMutations } from "vuex";

export default {
  name: "modalHam",
  computed: {
    ...mapState("nav", ["clickHam"]),
  },
  methods: {
    ...mapMutations("nav", ["changeHam"]),

    closeHam() {
      this.changeHam({ state: false });
    },
  },
};
</script>
