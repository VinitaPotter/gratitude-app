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
                            <label for="confirmation">Password</label>
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
                        <div v-colors v-for="(quote, cur) in quotes" :key="cur" class="card wow slideOutUp"  data-wow-duration="50s">
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
            quotes: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, pariatur?',
                    'Odio, sunt vero veniam eaque obcaecati consequatur rerum molestias earum',
                    'Reprehenderit et delectus, quod modi odit minus repellat harum exercitationem?',
                    'Deserunt aliquid rerum velit ipsam inventore quisquam similique vel. Sunt.',
                    'Eligendi doloremque quidem repellendus voluptas iure modi impedit autem culpa!',
                    'Totam iste obcaecati aperiam tempore enim fugiat asperiores unde quis?',
                    'Odio, similique aliquid magni facilis esse qui deleniti alias nihil?',
                    'Officiis ab labore assumenda deleniti ad voluptatibus facere amet quaerat?',
                    'Molestiae delectus expedita iusto, ipsa repudiandae numquam odio. Optio, tenetur!'
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
            firebase.auth().createUserWithEmailAndPassword(this.newUser.email, this.newUser.regPassword).then(function(user) {
                console.log(user)
                const db = firebase.firestore();
                const auth = firebase.auth();
                db.settings({ timestampsInSnapshots: true });
                db.collection('users').doc(auth.currentUser.uid).set({
                    name: self.newUser.name,
                    email: self.newUser.email,
                    date: self.newUser.joining 
                })
                })
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
        firebase.auth().onAuthStateChanged(firebaseUser => {
            this.authUser = firebaseUser;
                self.checklogin(this.authUser);
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
    height: 50px;
    color: #383838;

}

.btn > a {
    color: #383838;
}

.bth > a:hover {
    text-decoration: none;
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
