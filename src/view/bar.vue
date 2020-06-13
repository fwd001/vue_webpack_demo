<template>
    <div class="bar">
        bar123123
        <img :src="imgsrc" alt="图片">
        <img src="../assets/logo.png" alt="图片">
    </div>
</template>

<script>
import imgsrc from '../assets/logo.png'

export default {
    name: 'bar',
    data() {
        return{
            imgsrc
        }
    },
    created() {
        console.log('NODE_ENV:::', NODE_ENV)
        console.log('process.env.NODE_ENV:::', process.env.NODE_ENV)
    }
}
</script>

<style lang="less">
    .bar {
        background-color: #ccc;
        background-image: url('../assets/logo.png');
        background-repeat: no-repeat;
        height: 400px
    }
</style>