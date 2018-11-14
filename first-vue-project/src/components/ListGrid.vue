<template>
    <div class="row">
        <app-list v-for="(list, cur) in lists" :key="cur" @click.native="deleteItem(cur)">{{ list }}</app-list>
    </div>
</template>

<script>
import List from './List.vue';

export default {
    props: ['lists'],
    components: {
        "app-list": List
    },
    methods: {
        deleteItem(cur){
            this.$emit('itemDeleted', cur);
        }
    }
}
</script>
<style>

</style>
