<!--跳转页面-->
<template>
  <!--密码正确时显示-->
  <div>
    <p>登录成功，<span id="myspan">{{number}}</span>秒后自动跳转到主页面...</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      /* 设置时间为3s */
      number: 3
    }
  },
  mounted () {
    // 设置倒计时5s后跳转到工作页面
    const clock = window.setInterval(() => {
      this.number--
      if (this.number < 1) {
        window.clearInterval(clock)
        this.$router.replace({ path: '/home/work', query: { userName: '123' } })
      }
    }, 1000)
  },
  beforeMount () {
    /* 去掉默认头部导航 */
    this.$store.state.isLoginNavbar = false
  }
}
</script>

<style lang="scss" scoped>
  div{
    p{
      font-size: 20px;
      margin: 50px 0 50px 30px;
      #myspan{
        color: red;
        font-size: 26px;
      }
    }
  }
</style>
