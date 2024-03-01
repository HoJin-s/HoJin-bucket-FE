import MainPages from '@/views/Main.vue';
import AllBucket from '@/views/Lists.vue';
import LoginPage from '@/components/user/Login.vue';

const routes = [
    {
        path:'',
        component: MainPages
    },
    {
        path:'/lists',
        component: AllBucket
    },
    {
        path: '/login',
        component: LoginPage
    }
]

export default routes;