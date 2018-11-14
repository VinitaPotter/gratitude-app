<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import gratitudePage from './gratitude-page.vue';
import signIn from './sign-in.vue';

  export default {
      components: {
        "gratitude-page": gratitudePage,
        "sign-in": signIn
      }
    }
</script>


