<template>
  <div>
    <!--  注册页面主体-->
    <section>
      <!--插入团队logo-->
      <img src="../../img/logo.png">
      <div class="rigister">
        <div class="rigister_header">
          <p>注册</p>
        </div>
        <!--注册框-->
        <div class="rigister_section">
          <input type="text" placeholder="  请输入用户名" v-model.trim="userName" >
          <input type="password" placeholder="  请输入新密码(6-12位)" v-model.trim="firstPassword"><br>
          <input type="password" placeholder="  请确认新密码" v-model.trim="secondPassword"><br>
          <input type="submit" value="注册" class="button" @click="checkUser">
          <p>已有账号 <a href="/login">去登录</a></p>
        </div>
      </div>
      <!--尾部版权-->
      <footer>Copyright © 2019 1TEAM</footer>
    </section>
  </div>
</template>

<script>
export default {
  // 定义初始数据
  data () {
    return {
      userName: '',
      firstPassword: [],
      secondPassword: []
    }
  },
  methods: {
    // 判断密码是否为6-12位，是则保留数据登录成功，不是则弹出提示框
    checkUser: function () {
      if (this.firstPassword.length >= 6 && this.firstPassword.length <= 12 && this.secondPassword.length >= 6 && this.secondPassword.length <= 12) {
        if (this.firstPassword === this.secondPassword) {
          alert('注册成功!返回登录页面！')
          this.$router.push({ path: '/login' })
        } else {
          alert('两次密码必须一致！')
        }
      } else {
        alert('请输入用户名及6-12位密码！')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  section{
    img{
      width: 90px;
      margin: 70px auto 40px auto
    }
    .rigister{
      width: 410px;
      height: 320px;
      background-color: #fff;
      margin: 0 auto;
      border: 1px solid #E4E7ED;
      .rigister_header{
        height: 70px;
        line-height: 70px;
        text-align: center;
        font-size: 14px;
        color: #8D9DFF;
      }
      .rigister_section{
        text-align: center;
        height: 150px;
        input{
          height: 34px;
          outline: none;
          padding-left: 10px;
          margin-bottom: 10px;
          width: 76%;
        }
        .button{
          width: 80%;
          height: 38px;
          color: #fff;
          background-color: #8D9DFF;
          border: 1px solid transparent;
        }
        p{
          font-size: 12px;
          line-height: 40px;
          a{
            color: #8D9DFF;
          }
        }
      }
    }
    footer{
      font-size: 10px;
      color: #666666;
      text-align: center;
      margin-top: 80px;
    }
  }
</style>
