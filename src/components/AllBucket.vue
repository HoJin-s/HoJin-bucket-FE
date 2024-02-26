<template>
    <NavBarPage />
    <BucketLists />
</template>

<script>
import BucketLists from "@/views/Lists.vue"
import NavBarPage from "@/views/NavPage.vue"

export default {
    name: 'AllBucket',
    components: {
        BucketLists,
        NavBarPage
    },
  }
</script>