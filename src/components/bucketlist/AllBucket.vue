<template>
    <div class="title">
        <h1>버킷리스트 모아보기</h1>
    </div>
    <div class="wrap">       
        <div class="list-right">
            <div class="category">
                <button>카테고리</button>
            </div>
            <div class="bucket-list">
                <div v-for="i in buckets.buckets.length" :key="i">
                    <input type="checkbox" v-model="checked">
                    {{ buckets["buckets"][i - 1]["title"] }}
                </div>
            </div>
        </div>
        <div class="list-left">
            <div class="calender">
               캘린더
            </div>
            <div class="comming">
                <h3>다가오는 일정</h3>
                <li></li>
            </div>
        </div>
    </div>
    
</template>  

<script>
import {mapState} from 'vuex'
import "@/assets/css/bucketlist/allbucket.css"

export default {
    name: 'BucketLists',
    data() {
        return {
        }
    },
    computed : {
        ...mapState(['buckets'])
    },
    created() {
        this.$store.dispatch('buckets/getBucketList');
    }
    
  }
</script>