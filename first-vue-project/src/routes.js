import signIn from './sign-in.vue';
import page from './gratitude-page.vue';

export default [
    {path: "/", component: signIn},
    {path: "/home", component: page}
]