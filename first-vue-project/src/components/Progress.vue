<template>
    <div>
        <h3>Things you are grateful for </h3>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="70"
  aria-valuemin="0" aria-valuemax="100" :style="{width: (listCount/maxList) *100 + '%'}">{{ listCount }} / {{ maxList }} 
            </div>
        </div>
    </div>
</template>
<script>
export default {
        props: ['listCount', 'maxList']
}
</script>

