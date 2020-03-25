<template>
  <div>
    <!-- 登录页面主体-->
    <section>
      <!--插入团队logo-->
      <img src="../../img/logo.png">
      <!--登录框-->
      <div class="login">
        <div class="login_header">
          <p>登录</p>
        </div>
        <div class="login_section">
            <input type="text" required id="name" placeholder="  请输入用户名" style="margin-bottom: 10px;" v-model.trim="userName"><br>
          <div>
            <input :type="icon?'text':'password'" required id="password" placeholder="  请输入密码" v-model.trim="userPassword" class="password"><br>
            <i :class="icon?'icon-yanjing':'icon-yanjing1'" class="iconfont" @click="icon = !icon"></i>
          </div>
            <div  class="small_box">
              <span style="float: left;line-height: 30px;"><a href="/revise" style="color: red">修改密码</a></span>
              <span style="float: right;line-height: 30px;"><a href="" style="color: red" @click="handleClick()">忘记密码</a></span>
            </div>
            <input type="submit" value="登录" class="button" @click="checkUser">
            <p>没有账号 <a href="/rigister">去注册</a></p>
        </div>
      </div>
      <!--尾部版权-->
      <footer>Copyright © 2019 1TEAM</footer>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      userPassword: '',
      isLoading: false,
      changeType: 'text',
      icon: false
    }
  },
  methods: {
    // 检查密码是否正确并作出相应处理，正确则跳转到工作页面，错误则弹出提示框
    checkUser: function () {
      if (this.userName === '123' && this.userPassword === '1') {
        this.$router.push({ path: '/skip' })
      } else {
        alert('手机号或密码错误！')
      }
    },
    // 忘记密码时弹出提示框
    handleClick () {
      alert('请您联系管理员或相关人员查询！')
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
    .login{
      width: 410px;
      height: 270px;
      background-color: #fff;
      margin: 0 auto;
      border: 1px solid #E4E7ED;
      .login_header{
        height: 70px;
        line-height: 70px;
        text-align: center;
        font-size: 14px;
        color: #8D9DFF;
      }
      .login_section{
        text-align: center;
        height: 150px;
        input{
          height: 34px;
          width: 76%;
          outline: none;
          padding-left: 10px;
        }
        div{
          height: 38px;
          position: relative;
          .icon-yanjing,.icon-yanjing1{
            position: relative;
            top: -28px;
            right:-140px;
            font-size: 20px;
            cursor: pointer;
          }
          .icon-yanjing1{
            font-size: 30px;
            top: -34px;
          }
        }
        .small_box{
          height: 30px;
          width: 80%;
          margin: 0 auto;
          overflow: hidden;
          span{
            font-size: 12px;
          }
        }
        .button{
          width: 80%;
          height: 40px;
          color: #fff;
          background-color: #8D9DFF;
          outline: none;
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
      margin-top: 130px;
    }
  }
</style>
