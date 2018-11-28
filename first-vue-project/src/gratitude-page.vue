<template>
  <div class="container">
    <app-nav></app-nav>
    <div v-if="verified">
      <app-progress :listCount="lists.length" :maxList="maxList"></app-progress>
      <app-new-list @itemAdded="newItem"></app-new-list>
      <app-list-grid :lists="lists" @itemDeleted="deleteItem"></app-list-grid>
      <button class=" btn btn-warning save" v-if="notSaved" @click.once="addToDB">Save</button>
      <div class="row">
        <div class="col-sm-12 text-center">
        <div class="footer"> {{ text }} </div>
      </div>
      <app-inspiration></app-inspiration>
    </div>
    </div>
    <div v-else class='text-center'>
      <p > Please verify your account!! 🤗 </p>
      <button class="btn btn-primary justify-center" @click="sendVerification">Send verification email</button>
    </div>
  </div>
</template>

<script>
  import ListGrid from './components/ListGrid.vue';
  import NewList from './components/NewList.vue';
  import Progress from './components/Progress.vue';
  import Nav from './components/Nav.vue';
  import Inspiration from './components/inspiration.vue'

  export default {
      data: function() {
        return {
          verified: firebase.auth().currentUser.emailVerified,
          notSaved: true,
          text: "Click on an item to delete it",
          lists: [
            'You are alive'
          ],
          date: new Date().toJSON(),
          maxList: 10
        };
      },
      methods: {
        newItem(lists) {
          if (this.notSaved == true || this.lists.length >= this.maxList) {
            this.lists.push(lists);
            return
          }  else {
            alert("You're done for today!! :)")
          }
        },

        addToDB(lists) {
          const db = firebase.firestore();
          const auth = firebase.auth();
          db.settings({ timestampsInSnapshots: true });
          if(confirm("Are you sure you want to save today's list?")){
            this.text = "Your list has been saved!! :)"
            this.notSaved = false
            db.collection('users').doc(auth.currentUser.uid).collection('lists').doc().set({
            lists: this.lists,
            date: this.date
          })
          }
        },
        deleteItem(cur) {
          if(this.notSaved == false){
            alert("Oops! You've already saved the list for today")
          } else{
            this.lists.splice(cur, 1);
          }
        },
        sendVerification(){
          firebase.auth().currentUser.sendEmailVerification().then(function(){
            alert("Please check your email")
          }).catch(function(err){
            alert("Opps " + err.message)
          })
        }
      },
      components: {
        "app-list-grid": ListGrid,
        "app-new-list": NewList,
        "app-progress": Progress,
        "app-nav": Nav,
        "app-inspiration": Inspiration
      }
    }
</script>
<style>
body {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.8em;
}

.footer {
    background-color:#EAE6EA;
    filter: sepia(25%);
    position: relative;
    bottom: 0;
}

.save {
  margin: 20px auto; 
  display: flex;
  align-self: flex-end;
}
</style>


