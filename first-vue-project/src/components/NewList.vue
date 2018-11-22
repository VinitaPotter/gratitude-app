<template>
    <div class="row">
        <form>   
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-ms-6 col-md-offset-3 form-group">
                <label>What are you grateful for? </label>
                <textarea class ="form-control" row="3" v-model="list"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-ms-6 col-md-offset-3 form-group">
                <button class="btn btn-light" @click.prevent="createNew">Add item</button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    data: function() {
        return {
            list: ""
        };
    },
    methods: {
        createNew() {
            this.$emit('itemAdded', this.list);
            this.list = ' ';
        }
    }
}
</script>
<style>

</style>