<!--导航栏-->
<template>
  <div>
    <nav>
  <!--    导航左部分-->
        <div class="nav_left">
          <ul class="mytext">
            <li><img src="../../img/logo.png"></li>
            <router-link to="/home/work" tag="li" active-class="myActive"><span><b>工作</b></span></router-link>
            <router-link to="/home/member" tag="li" active-class="myActive"><span><b>成员</b></span></router-link>
            <router-link to="/home/calendar" tag="li" active-class="myActive"><span><b>日历</b></span></router-link>
          </ul>
        </div>
  <!--    导航右部分-->
        <div class="nav_right">
          <ul class="mytext">
            <router-link to="/home/news" tag="li" active-class="myActive" class="news"><i class="iconfont icon-xiaoxi"></i>
              <div class="nav_list">
                <div>
                  <h4>我的消息</h4>
                  <span @click="clear" v-show="isShow">清空</span>
                </div>
                <ul>
                  <li v-for="(data,index) in datalist" :key="index" class="mylist">
                    <p @click="handleClick()">{{data}}</p>
                    <span @click="del(index)">❌</span>
                  </li>
                </ul>
                <p v-show="isShow">查看全部</p>
              </div>
            </router-link>
            <router-link to="/home/profile" tag="li" active-class="myActive" class="demo-type">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </router-link>
          </ul>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      datalist: ['日程：1月24日到大数据学院9层开会11111111111', '日程：1月24日到大数据学院9层开会', '日程：1月24日到大数据学院9层开会', '日程：1月24日到大数据学院9层开会'],
      isShow: true
    }
  },
  methods: {
    clear: function () {
      var select = confirm('你确定要清空吗')
      if (select === true) {
        this.datalist = []
        this.isShow = !this.isShow
      }
    },
    del (index) {
      this.datalist.splice(index, 1)
    },
    handleClick () {
      this.$store.state.activename = 'first'
    }
  }
}
</script>

<style lang="scss" scoped>
  div{
    max-width: 100%;
    background: #fff;
    nav{
      max-width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      height: 50px;
      .nav_left{
        width: 34%;
        float: left;
        li{
          line-height: 46px;
          color: #999999
        }
      }
      .nav_right{
        width: 10%;
        float: right;
        li{
          line-height: 50px;
        }
      }
      .nav_left{
        .myActive{
          color: #8D9DFF;
          border-bottom: 1px solid #8D9DFF;
          span{
            display: block;
            width: 50px;
            border-bottom: 2.6px solid #8D9DFF;
            margin: 0 auto
          }
        }
      }
      .mytext{
        list-style: none;
        display: flex;
        li{
          flex: 1;
          text-align: center;
          font-size: 14px;
          cursor: pointer;
          img{
            padding: 14px 0;
            width: 80px;
          }
        }
        li:hover{
          background: #F2F3FE;
        }
      }
      .icon-xiaoxi{
        color: #C6C6C6;
        position: relative;
      }
      .news:hover .icon-xiaoxi{
        color: #8D9DFF;
      }
      .news:hover .nav_list{
        display: block
      }
      .nav_list{
        width: 24%;
        border: 1px solid #E4E7ED;
        color: #000;
        z-index: 9999;
        position: absolute;
        overflow: hidden;
        right: 7.8%;
        top: 50px;
        display: none;
        div{
          height: 40px;
          border-bottom: 1px solid #E4E7ED;
          h4{
            float: left;
            margin-left: 10px;
          }
          span{
            float: right;
            margin-right: 10px;
          }
          h4,span{
            line-height: 40px;
          }
        }
        ul{
          .mylist{
            font-size: 12px;
            width: 88%;
            text-align: left;
            margin: 0 auto;
            border-bottom: 1px solid #E4E7ED;
            overflow: hidden;
            span{
              color: #8D9DFF;
              float: right;
            }
            p{
              width: 84%;
              white-space:nowrap;
              overflow: hidden;
              text-overflow:ellipsis;
              float: left;
            }
          }
          .mylist:hover{
            background: #fff;
          }
          p:hover{
            color: #8D9DFF;
          }
        }
      }
      .el-avatar{
        width: 36px;
        height: 36px;
        vertical-align: middle;
      }
    }
  }
</style>
