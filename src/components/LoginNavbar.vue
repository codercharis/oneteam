<template>
  <!--  导航-->
  <div class="nav">
    <nav>
      <img src="../../img/logo.png">
      <ul>
        <router-link tag="li" class="nav_list" to="/login"><a href="" style="margin-right:6px">登录</a></router-link>
        <li>|</li>
        <router-link tag="li" class="nav_list" to="/rigister"><a href="" style="margin-left:6px">注册</a></router-link>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
  .nav{
    max-width: 100%;
    background: #fff;
    nav{
      max-width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      height: 50px;
      img{
        float: left;
        padding: 14px 0;
        width: 80px;
      }
      ul{
        float: right;
        li{
          float: left;
          line-height: 50px;
          font-size: 14px;
          a{
            color: #666666;
          }
        }
        .nav_list :hover{
          font-size: 18px;
          color: #8D9DFF;
          transition: .5s;
        }
      }
    }
  }
</style>
