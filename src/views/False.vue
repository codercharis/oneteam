<!--404页面-->
<template>
  <div class="container" style="width: 1000px">
    <h1 class="title">404</h1>
    <p class="detail">Sorry, that page can&#39;t be found.</p>
    <a href="/login" class="order">Go to homepage></a>
  </div>
</template>

<script>
export default {
  /* 隐藏头部导航 */
  beforeMount () {
    this.$store.state.isLoginNavbar = false
  }
}
</script>

<style lang="scss" scoped>
  .container{
    h1{
      margin-top: 60px;
    }
    p{
      line-height: 40px;
    }
  }
</style>
