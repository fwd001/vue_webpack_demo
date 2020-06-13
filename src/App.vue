<template>
  <div class="App">
    <router-link to="/bar">bar2</router-link>
    <router-link to="/foo">foo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
        msg: "有追求的",
    };
  }
};
</script>
<style lang="less">

</style>