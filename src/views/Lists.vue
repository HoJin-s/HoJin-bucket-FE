<template>
    <NavBarPage />
    <BucketLists />
</template>

<script>
import BucketLists from "@/components/bucketlist/AllBucket.vue"
import NavBarPage from "@/components/main/NavPage.vue"

export default {
    name: 'AllBucket',
    components: {
        BucketLists,
        NavBarPage
    },
  }
</script>