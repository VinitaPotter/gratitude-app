<template>
    <div class="row">
        <nav>
            <ul>
                <li class="nav-link">Home</li>
                <li class="nav-link" @click="signOut"><router-link to="/"> Sign Out </router-link></li>
            </ul>
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
nav {
    position: relative;
    
}

ul {
    display: flex;
    text-align: center;
    list-style: none;
     justify-content: flex-end;
}

li {
    padding-top: 10px;
    padding-right: 50px;
    color: black;
}

a {
    color: black;
}


</style>