import { getBuckets } from "@/api/api.js"

export default {
    namespaced:true,
    state() {
        return {
            buckets: [],
        }
    },
    
    mutations:{ // 동기
        loadBuckets(state, data) {
            state.buckets=data;
        },
    },

    actions:{   // 비동기
        async getBucketList(context) {
         try {
            const result = await getBuckets();
            context.commit('loadBuckets', result.data.bucketlist_list);
         } catch (error) {
            console.log(error);
         }
        }    
    }
}

