<!--个人资料-->
<template>
  <div class="container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="资料" name="first">
<!--        资料部分-->
        <div class="material">
          <div class="small_container">
<!--            资料头部-->
            <div class="material_header">
              <h4>资料</h4>
              <button @click="changeOrder">{{order?'编辑':'保存'}}</button>
            </div>
<!--            资料主体成员可修改部分-->
            <div class="material_section">
              <ul>
                <li style="height: 70px">
                  <p style="line-height: 70px">头像：</p>
                  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                  <el-avatar class="cover">修改头像</el-avatar>
                </li>
                <li>
                  <p>姓名：</p>
                  <input type="text"  style="width: 70px" v-model.trim="name" v-show="isShow">
                  <p class="info" v-show="keepShow">{{keepName}}</p>
                </li>
                <li>
                  <p>手机号：</p>
                  <input type="number" v-model.trim="number" v-show="isShow">
                  <p class="info" v-show="keepShow">{{keepNumber}}</p>
                </li>
                <li>
                  <p>性别：</p>
                  <select v-model="sex" v-show="isShow">
                    <option value="女">女</option>
                    <option value="男">男</option>
                  </select>
                  <p class="info" v-show="keepShow">{{keepSex}}</p>
                </li>
              </ul>
            </div>

<!--            资料尾部管理员可修改部分-->
            <div class="material_footer">
              <ul>
                <li><p>TEAM：</p></li>
                <li><p>编号：</p></li>
                <li><p>部门：</p></li>
                <li><p>方向：</p></li>
                <li><p>入职年份：</p></li>
                <li><p>状态：</p></li>
                <li><p>权限：</p></li>
              </ul>
            </div>
            <div class="additional">
              <div v-show="textShow">
                <p>员工请联系企业（团队）管理员添加你的成员信息</p>
                <p>或</p>
                <p><a @click="handleCreate">+创立企业（团队）</a></p>
              </div>
              <div v-show="inputShow">
                <input type="text" placeholder="请输入企业名称" v-model.trim="enterprise"><br>
                <input type="submit" value="确定" class="button" @click="handleClick()">
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="项目" name="second">

<!--        项目-->
        <div class="project">
          <div class="small_container">
            <!--            项目头部-->
            <div class="project_header">
              <h4>项目（已完成）</h4>
            </div>
            <div class="project_section">
              <ul>
                <li class="box item">
                  <a href="https://yundingshuyuan.com/">云顶书院官网2.0</a>
                  <p>2018-12-14</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'second',
      order: true,
      name: '',
      number: '',
      sex: '',
      keepName: '',
      keepNumber: '',
      keepSex: '',
      enterprise: '',
      isShow: false,
      keepShow: true,
      textShow: true,
      inputShow: false
    }
  },
  methods: {
    // 转换显示编辑和保存,输入框的显示
    changeOrder: function () {
      this.order = !this.order
      this.isShow = !this.isShow
      this.keepShow = !this.keepShow
      this.keepName = this.name
      this.keepNumber = this.number
      this.keepSex = this.sex
    },
    handleCreate: function () {
      // 点击创立企业时显示输入框
      this.textShow = !this.textShow
      this.inputShow = !this.inputShow
    },
    handleClick () {
      if (this.enterprise === '') {
        alert('请输入企业名称!')
      } else {
        alert('该企业未认证！')
      }
    }
  }
}
</script>

<style lang="scss">
  .container{
    .el-tabs__header{
      margin: 0;
      .el-tabs__nav-wrap::after{
        height: 1px;
      }
      .el-tabs__nav{
        width: 100px;
        float: none;
        margin: 0 auto;
        .el-tabs__item{
          font-size: 12px;
        }
      }
    };
    .material{
      margin-bottom: 40px
    }
    .material,.project{
      background: #fff;
      border-left: .8px solid #E4E7ED;
      border-right: .8px solid #E4E7ED;
      border-bottom: .8px solid #E4E7ED;
      .small_container{
        width: 94%;
        margin: 0 auto;
        p{
          font-size: 12px;
          line-height: 44px;
        }
        .material_header,.project_header{
          height: 50px;
          border-bottom: 1px solid #F3F3F3;
          line-height: 50px;
          overflow: hidden;
          h4{
            width: 80%;
            float: left;
          }
          button{
            float:right;
            margin: 14px
          }
        }
        .material_section{
          padding: 10px;
          border-bottom: 1px solid #F3F3F3;
        }
        .material_section,.material_footer{
          ul{
            li{
              height: 44px;
              margin-bottom: 10px;
              p{
                width: 60px;
                text-align: right;
                float: left;
              }
              input,select{
                margin:10px 0 10px 30px;
                height: 20px;
              }
              span{
                width: 70px;
                height: 70px;
                margin-left: 30px;
                background-color:black;
                opacity:0.6;
                position:absolute;
                line-height: 70px;
                font-size: 12px;
                cursor: pointer;
              }
              input::-webkit-outer-spin-button,
              input::-webkit-inner-spin-button {
                -webkit-appearance: none;
              }
              input[type="number"]{
                -moz-appearance: textfield;
              }
              .info{
                text-align: left;
                margin-left: 30px;
              }
            }
          }
        }
        .material_footer{
          padding: 10px;
          border-bottom: 1px solid #F3F3F3;
        }
        .box{
          margin-top: 30px;
          display: inline-block;
          height: 150px;
          width: 22.4%;
          border: 1px solid #E0E2F8;
          text-align: center;
          a{
            font-size: 14px;
            color: #8D9DFF;
            margin-top: 50px;
            display: block;
          }
          p{
            font-size: 12px;
          }
        }
        .item{
          margin-right: 26px;
        }
      }
      .additional{
        height: 230px;
        padding-top: 60px;
        p{
          text-align: center;
          line-height: 30px;
          color: #666666;
          a{
            color: #8D9DFF;
            cursor: pointer;
          }
        }
        div{
          width: 30%;
          margin: 0 auto;
          input{
            height: 34px;
            width: 96%;
            outline: none;
            padding-left: 10px;
            margin-bottom: 20px
          }
          .button{
            width: 100%;
            height: 40px;
            color: #fff;
            background-color: #8D9DFF;
            outline: none;
            border: 1px solid transparent;
          }
        }
      }
    }
    .project{
      height: 488px;
    }
  }
</style>
