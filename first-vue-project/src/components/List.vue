<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div v-colors class="panel panel-default">
            <div class="panel-body list">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style>
    .panel-body { 
        
        font-size: 18px;
        color: #484848;
    }

    .list {
        cursor: pointer;
    }

    .list:hover {
        background-color: pink;
    }
</style>
