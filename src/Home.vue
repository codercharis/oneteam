<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/Navbar'
export default {
  components: {
    navbar
  },
  beforeMount () {
    this.$store.state.isLoginNavbar = false
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
</style>
