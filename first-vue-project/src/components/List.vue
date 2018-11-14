<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel-body list">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

// <script>
//     export default {
//         props: ['lists']
//     }
// </script>
<style>
    .panel-body { 
        font-family: 'Patrick Hand SC', cursive;
        font-size: 24 px;
        color: blue;
    }

    .list {
        cursor: pointer;
    }

    .list:hover {
        background-color: pink;
    }
</style>
