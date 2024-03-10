<template>
  <div class="wrap">
    <div class="title">
      <h1>버킷리스트 모아보기</h1>
    </div>

    <div class="list-right">
      <div class="category">
        <div class="category-top">
          <button><img src="@/assets/images/category/restaurant.png" /></button>
          <button><img src="@/assets/images/category/cafe.png" /></button>
          <button><img src="@/assets/images/category/experience.png" /></button>
          <button><img src="@/assets/images/category/activity.png" /></button>
          <button><img src="@/assets/images/category/trip.png" /></button>
        </div>
        <hr />
        <div class="category-bottom">
          <button><img src="@/assets/images/category/shopping.png" /></button>
          <button><img src="@/assets/images/category/exercise.png" /></button>
          <button><img src="@/assets/images/category/game.png" /></button>
          <button><img src="@/assets/images/category/movie.png" /></button>
          <button><img src="@/assets/images/category/etc.png" /></button>
        </div>
      </div>
      <div class="bucket-list">
        <div v-for="(bucket, i) in buckets" :key="i">
          <input :id="'check' + i" type="checkbox" v-model="bucket.checked" />
          <label :for="'check' + i"
            ><span>{{ bucket.title }}</span>
            <p>리뷰 : {{ bucket.reviews }}</p></label
          >
        </div>
      </div>
    </div>
    <div class="list-left">
      <div class="calender">
        {{ selectDate }}
        <v-container>
          <v-row
            justify="space-around"
            v-model="selectDate"
            @input="updateDate"
          >
            <v-date-picker></v-date-picker>
          </v-row>
        </v-container>
      </div>
      <div class="comming">
        <h3>다가오는 일정</h3>
        <li></li>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import "@/assets/css/bucketlist/allbucket.css";

export default {
  name: "BucketLists",
  computed: {
    ...mapState("lists", ["buckets"]),
    ...mapState("lists", ["selectDate"]),
  },
  methods: {
    ...mapActions("lists", ["getBucketList"]),
    ...mapActions("lists", ["setDate"]),

    updateDate(date) {
      this.setDate(date);
    },
  },
  mounted() {
    this.getBucketList();
  },
};
</script>
