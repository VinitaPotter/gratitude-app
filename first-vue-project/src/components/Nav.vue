<template>
    <div class="row">
        <p> Hello {{ user }}!! ☺ </p>
        <nav>
            <ul>
                <li class="nav-link"><router-link to="/home"> Home </router-link></li>
                <li class="nav-link" @click="signOut"><router-link to="/"> Sign Out </router-link></li>
            </ul>
        </nav>
        
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            user: firebase.auth().currentUser.email.slice(0, firebase.auth().currentUser.email.indexOf("@"))
        }
    },

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

a:hover {
    text-decoration: none;
}

</style>