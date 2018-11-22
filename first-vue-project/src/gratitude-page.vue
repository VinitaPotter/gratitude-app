<template>
  <div class="container">
    <app-nav></app-nav>
    <app-progress :listCount="lists.length" :maxList="maxList"></app-progress>
    <app-new-list @itemAdded="newItem"></app-new-list>
    <app-list-grid :lists="lists" @itemDeleted="deleteItem"></app-list-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="footer">Click on an item to delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
  import ListGrid from './components/ListGrid.vue';
  import NewList from './components/NewList.vue';
  import Progress from './components/Progress.vue';
  import Nav from './components/Nav.vue';

  export default {
      data: function() {
        return {
          lists: [
            'You are alive'
          ],
          maxList: 10
        };
      },
      methods: {
        newItem(lists) {
          if (this.lists.length >= this.maxList) {
            alert("You're done for today!! :) ")
          }
          this.lists.push(lists);
        },
        deleteItem(cur) {
          this.lists.splice(cur, 1);
        },
      },
      components: {
        "app-list-grid": ListGrid,
        "app-new-list": NewList,
        "app-progress": Progress,
        "app-nav": Nav
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
</style>


