<template>
    <div class="container row">
        <div class="row">
            <div id="signIn" v-if="login" class="col-md-12 col-sm-12 col-12">
                <div>
                    <form>
                        <div class="form-group">
                            <h1 class="display-4 mb-3">Login</h1>
                            <label for="userID">Username</label>
                            <br>
                            <input type="text" v-model="userID" class="form-control" placeholder="Enter your username">
                            <br>
                            <label for="password">Password</label>
                            <br>
                            <input type="password" v-model="password" class="form-control" placeholder="Enter your password"> 
                            <br>
                        </div>
                    <button class="btn btn-light" @click.prevent="registration">Register</button>
                    <button class="btn btn-light" type="submit" @click.prevent="checklogin"><router-link to="/home"> Submit </router-link></button>
                </form>
                </div>
            </div>
            <div id="register" v-else class="col-md-12 col-sm-12 col-12">
                <div>
                    <form>
                        <div class="form-group">
                            <h1>Registration</h1>
                            <label for="name">Name</label>
                            <br>
                            <input type="text" v-model="newUser.name" class="form-control" placeholder="Enter your name">
                            <br>
                            <label for="email">Email</label>
                            <br>
                            <input type="email" v-model="newUser.email" class="form-control" placeholder="Enter your email id">
                            <br>
                            <label for="password">Password</label>
                            <br>
                            <input type="password" v-model="newUser.regPassword" class="form-control" placeholder="Enter your password">
                            <br>
                            <label for="confirmation">Confirm Password</label>
                            <br>
                            <input type="password" v-model="newUser.confirmedPassword" class="form-control" placeholder="Confirm your password">
                            <br>
                        </div>
                    <button class="btn btn-light" @click="loginPage">Login</button>
                    <button class="btn btn-light" type="submit" @click.prevent="adduser">Submit</button>
                </form>
                </div>
            </div>
            <div id="reminder" class="col-md-6 col-sm-12">
                        <div v-for="(quote, cur) in quotes" :key="cur">
                            <div v-colors class="card wow slideOutUp infinite"  data-wow-duration="50s">
                                <div class="card-body">
                                <p class="card-text">{{ quote }}</p>
                            </div>
                            </div>
                            
                        </div>
                        
                </div>
            </div>
        </div>
</template>
<script>
export default {
    data(){
        return{
            login: true,
            userID: "",
            password: "",
            newUser:{
                name: "",
                email: "",
                regPassword: "",
                confirmedPassword: "",
                joining: new Date().toJSON() 
            },
            authUser: null,
            quotes: [`“At times, our own light goes out and is rekindled by a spark from another person. Each of us has cause to think with             deep gratitude of those who have lighted the flame within us.” – Albert Schweitze`,
                    `“Gratitude is the fairest blossom which springs from the soul.” – Henry Ward Beecher`,
                    `“Gratitude is a powerful catalyst for happiness. It’s the spark that lights a fire of joy in your soul.” – Amy Collette`,
                    `“Thankfulness is the beginning of gratitude. Gratitude is the completion of thankfulness. Thankfulness may consist merely of words. Gratitude is shown in acts.” – Henri Frederic Amiel`,
                    `“Happiness cannot be traveled to owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace, and gratitude.” – Denis Waitley`,
                    `“In ordinary life, we hardly realize that we receive a great deal more than we give, and that it is only with gratitude that life becomes rich.” – Dietrich Bonhoeffer`,
                    `“Gratitude is not only the greatest of virtues but the parent of all others.” – Marcus Tullius Cicero`,
                    `“Gratitude is when memory is stored in the heart and not in the mind.” – Lionel Hampton`,
                    `“Two kinds of gratitude: The sudden kind we feel for what we take; the larger kind we feel for what we give.” – Edwin Arlington Robinson`,
                    `“Gratitude helps you to grow and expand; gratitude brings joy and laughter into your life and into the lives of all those around you.” – Eileen Caddy`,
            ]
        }
    },
    methods: {
        registration: function(e){
            if (e){
                return this.login = false;
            }
        },
        adduser: function(e) {
            let self = this
            if (self.newUser.confirmedPassword == self.newUser.regPassword){
                firebase.auth().createUserWithEmailAndPassword(this.newUser.email, this.newUser.regPassword).then(function(user) {
                const db = firebase.firestore();
                const auth = firebase.auth();
                db.settings({ timestampsInSnapshots: true });
                db.collection('users').doc(auth.currentUser.uid).set({
                    name: self.newUser.name,
                    email: self.newUser.email,
                    date: self.newUser.joining 
                })
                })
            } else {
                alert("The passwords you entered do not match, please try again!")
            }
            
        },
        
        loginPage: function(e){
            if (e){
                return this.login = true;
            }   
        },

        checklogin: function(e) {
            firebase.auth().signInWithEmailAndPassword(this.userID, this.password).then(function(user){
                alert(`Successfully loggedin ${user.user.email}! :)`)
                }).catch(function(err){
                    alert(`Oops!! ${err.message}`)
            })
        },

        signOut: function() {
            firebase.auth().signOut()
        }
    },

    created() {
        let self = this
        let auth = firebase.auth()
        auth.onAuthStateChanged(firebaseUser => {
            if(auth.currentUser == firebaseUser){
                this.$router.push('/home')
            }
        })
    }

    
}

</script>

<style>
 h1,
 label {
     color: #383838;
 }

.container {
    margin-top: 50px;

}

#signIn,
#register,
#reminder {
    background-color: #EAE6EA;
    width: 45%;
    filter: sepia(25%);
    
 }

 #register {
     padding-bottom: 50px;
 }

#signIn {
    margin: auto 20px;
    padding: 20px; 
    height: 500px;
    background-image: url(https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8b5d177ad38580e039c7f403c0554ea6&auto=format&fit=crop&w=967&q=80);
    filter: sepia(25%);
    background-position: center;

}

#reminder {
    margin-left: 20px;
    padding: 20px;
    height: 500px;
    overflow: hidden;
    margin-bottom: 0;
}

.card {
    background-color: #999;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 70px;
}
.card-body {
    height: 100px;
    color: #383838;
    display: grid;
    place-items: center;

}

.btn > a {
    color: #383838;
}

.bth > a:hover {
    text-decoration: none;
    cursor: pointer;
}

body {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
}

@media screen and (max-width: 767px) {
    #signIn,
    #reminder {
    width: 92%;

    }
    
    #reminder {
        display: none;
    }
}





</style>
