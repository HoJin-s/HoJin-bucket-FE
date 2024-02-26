<template>
    <div class="title">
        <h1>버킷리스트 모아보기</h1>
    </div>
    <div class="wrap">       
        <div class="list-right">
            <div class="category">
                <button>카테고리</button>
            </div>
            <div class="bucket-list" v-for="i in buckets.buckets.length" :key="i">
                {{ buckets["buckets"][i - 1]["title"] }}
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

<style>
.wrap {
    width : 65%;
    margin : auto;
}

.title {
    width : 65%;
    margin : auto;
}

.title h1 {
    font-weight: bold;
    background: linear-gradient(to right top, #0013e0, #d701ba);
    color: transparent;
    -webkit-background-clip: text;
}

.list-right {
    width : 60%;
    height : 30%;
    float: left;
}

.list-left {
    width : 38%;
    float: right;
}

.category {
    background-color: rgb(236, 236, 236);
    height: 80px; 
}

.bucket-list {
    background-color: rgb(236, 236, 236);
    margin-top: 3%;
    height: 460px; 
}

.calender {
    background-color: rgb(236, 236, 236);
    height: 300px; 
}

.comming {
    background-color: rgb(236, 236, 236);
    margin-top: 3%;
    height: 250px; 

}

</style>