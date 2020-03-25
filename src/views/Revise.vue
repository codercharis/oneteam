<template>
  <div>
    <!--  主体-->
    <section>
      <img src="../../img/logo.png">
      <div class="revise">
        <div class="revise_header">
          <p>修改密码</p>
        </div>
        <div class="revise_section">
          <input type="text" placeholder="  请输入用户名" v-model.trim="userName" >
          <input type="password" placeholder="  请输入原密码" v-model.trim="oldPassword"><br>
          <input type="password" placeholder="  请输入新密码(6-12位)" v-model.trim="firstPassword"><br>
          <input type="password" placeholder="  请确认新密码" v-model.trim="secondPassword"><br>
          <input type="submit" value="确认修改" class="button" @click="checkUser">
        </div>
      </div>
      <footer>Copyright © 2019 1TEAM</footer>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      oldPassword: [],
      firstPassword: [],
      secondPassword: []
    }
  },
  methods: {
    checkUser: function () {
      if (this.firstPassword.length >= 6 && this.firstPassword.length <= 12 && this.secondPassword.length >= 6 && this.secondPassword.length <= 12 && this.oldPassword.length >= 6 && this.oldPassword.length <= 12) {
        if (this.oldPassword !== this.firstPassword && this.firstPassword === this.secondPassword) {
          alert('修改成功!返回登录页面！')
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
    .revise{
      width: 410px;
      height: 330px;
      background-color: #fff;
      margin: 0 auto;
      border: 1px solid #E4E7ED;
      .revise_header{
        height: 70px;
        line-height: 70px;
        text-align: center;
        font-size: 14px;
        color: #8D9DFF;
      }
      .revise_section{
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
      }
    }
    footer{
      font-size: 10px;
      color: #666666;
      text-align: center;
      margin-top: 70px;
    }
  }
</style>
