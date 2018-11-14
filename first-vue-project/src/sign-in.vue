<template>
    <div class="container row">
        <div class="row">
            <div id="signIn" v-if="login" class="col-md-6">
                <div>
                    <form @submit="checklogin">
                        <div class="form-group">
                            <p>Login</p>
                            <label for="userID">Username</label>
                            <br>
                            <input type="text" v-model="userID" class="form-control" placeholder="Enter your username">
                            <br>
                            <label for="password">Password</label>
                            <br>
                            <input type="password" v-model="password" class="form-control" placeholder="Enter your password">
                            <br>
                        </div>
                    <button class="btn btn-light" @click="registration"><a href="#register">Register</a></button>
                    <button class="btn btn-light" type="submit">Submit</button>
                </form>
                </div>
            </div>
            <div id="register" v-else class="col-md-6">
                <div>
                    <form @submit="adduser">
                        <div class="form-group">
                            <p>Registration</p>
                            <label for="name">Name</label>
                            <br>
                            <input type="text" v-model="newUser.name" class="form-control" placeholder="Enter your name">
                            <br>
                            <label for="userID">Username</label>
                            <br>
                            <input type="text" v-model="newUser.username" class="form-control" placeholder="Enter your username">
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
                    <button class="btn btn-light" @click="loginPage"><a href="#login">Login</a></button>
                    <button class="btn btn-light" type="submit">Submit</button>
                </form>
                </div>
            </div>

            <div id="reminder" class="col-md-6">
                    <!-- <div class="wow infinite slideOutUp"  data-wow-duration="20s" > -->
                        <div class="card wow slideOutUp"  data-wow-duration="50s">
                            <div class="card-body">
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, pariatur?</p>
                            </div>
                        </div>
                        <div class="card  wow slideOutUp"  data-wow-duration="50s">
                            <div class="card-body">
                                <p class="card-text">Odio, sunt vero veniam eaque obcaecati consequatur rerum molestias earum.</p>
                            </div>
                        </div>
                        <div class="card  wow slideOutUp"  data-wow-duration="50s">
                            <div class="card-body">
                                <p class="card-text">Reprehenderit et delectus, quod modi odit minus repellat harum exercitationem?</p>
                            </div>
                        </div>
                        <div class="card  wow slideOutUp"  data-wow-duration="50s">
                            <div class="card-body">
                                <p class="card-text">Deserunt aliquid rerum velit ipsam inventore quisquam similique vel. Sunt.</p>
                            </div>
                        </div>
                        <div class="card  wow slideOutUp"  data-wow-duration="50s">
                            <div class="card-body">
                                <p class="card-text">Eligendi doloremque quidem repellendus voluptas iure modi impedit autem culpa!</p>
                            </div>
                        </div>
                        <div class="card  wow slideOutUp"  data-wow-duration="50s">
                            <div class="card-body">
                                <p class="card-text">Dolores animi nemo ex neque ipsum aspernatur maxime? Sequi, quasi.</p>
                            </div>
                        </div>
                        <div class="card  wow slideOutUp"  data-wow-duration="50s">
                            <div class="card-body">
                                <p class="card-text">Totam iste obcaecati aperiam tempore enim fugiat asperiores unde quis?</p>
                            </div>
                        </div>
                        <div class="card  wow slideOutUp"  data-wow-duration="50s">
                            <div class="card-body">
                                <p class="card-text">Odio, similique aliquid magni facilis esse qui deleniti alias nihil?</p>
                            </div>
                        </div>
                        <div class="card  wow slideOutUp"  data-wow-duration="50s">
                            <div class="card-body">
                                <p class="card-text">Officiis ab labore assumenda deleniti ad voluptatibus facere amet quaerat?</p>
                            </div>
                        </div>
                        <div class="card  wow slideOutUp"  data-wow-duration="50s">
                            <div class="card-body">
                                <p class="card-text">Molestiae delectus expedita iusto, ipsa repudiandae numquam odio. Optio, tenetur!</p>
                            </div>
                        <!-- </div> -->
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
            database: [
                {
                    username: "Alex",
                    password: 123,
                },
                {
                    username: "Grace",
                    password: 987,
                },
                {
                    username: "Vinita",
                    password: 456,
                }
            ],
            newUser:{
                name: "",
                username: "",
                regPassword: "",
                confirmedPassword: ""
            }
        }
    },
    methods: {
        registration: function(e){
            if (e){
                return this.login = false;
            }
        },
        adduser: function() {
            if(this.newUser.name != "" && this.newUser.username != "" && this.newUser.regPassword === this.newUser.confirmedPassword){
                this.$http.post('https://gratitude-app-195b6.firebaseio.com/users.json', this.newUser).then(function(data){
                    console.log(data)
                });
            }
            
        },
        
        loginPage: function(e){
            if (e){
                return this.login = true;
            }   
        },
        checklogin: function() {
            for (var i =0; i< this.database.length; i++){
                if (this.userID ==this.database[i].username && this.password == this.database[i].password){
                    console.log("sucess");
                    break;
                }
            }
            
        }
    }
}

</script>

<style>

.container {
    margin-top: 50px;

}

#signIn,
#reminder {
    width: 45%;
    background-color: #eee;
 }

#signIn {
    margin: auto 20px;
    padding: 20px; 
    height: 500px;

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

}




</style>
