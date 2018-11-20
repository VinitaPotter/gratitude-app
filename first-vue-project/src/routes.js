import signIn from './sign-in.vue';
import page from './gratitude-page.vue';

export default [
    {
        path: "/", 
        name: "login",
        component: signIn
},
    {
        path: "/home", 
        component: page,
        name: "home",
        // meta: {
            // requiresAuth: true
        // }
}
]