<template>
    <div class="row">
        <nav>
            <ol>
                <li>Home</li>
                <li @click="signOut"><router-link to="/"> Sign Out </router-link></li>
            </ol>
        </nav>
        
    </div>
</template>
<script>
export default {
    methods: {
        signOut: function() {
            firebase.auth().signOut()
        }
    }
}
</script>
<style>

</style>