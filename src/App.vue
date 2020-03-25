<template>
  <div>
    <LoginNavbar v-show="$store.state.isLoginNavbar"></LoginNavbar>
    <router-view></router-view>
  </div>
</template>

<script>
import LoginNavbar from './components/LoginNavbar'
export default {
  components: {
    LoginNavbar
  }
}
</script>

<style lang="scss">
  html,body{
    background: #F9F8FD;
  }
  div,body,ul,li,h1,h2,h3,h4,h5,h6,input,form,a,p,textarea,figure{
    margin: 0;
    padding: 0;
  };
  ol,ul,li{
    list-style:none;
  };
  a{
    text-decoration: none;
  };
  img{
    max-width: 100%;
    display:block;
  }
  .container{
    max-width: 1200px;
    margin: 0 auto;
  }
  .button{
    outline: none;
    cursor: pointer;
  }
</style>
