import MainPages from '@/components/Mainpage.vue';
import AllBucket from '@/components/AllBucket.vue';

const routes = [
    {
        path:'',
        component: MainPages
    },
    {
        path:'/lists',
        component: AllBucket
    }
]

export default routes;