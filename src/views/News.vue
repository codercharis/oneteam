<template>
  <div class="container">
    <el-tabs v-model="this.$store.state.activename">
      <el-tab-pane label="最近" name="first">
        <!--      最近部分-->
        <div class="recently">
          <div class="small_container">
            <!--            最近头部-->
            <div class="recently_header">
              <h4>最近</h4>
            </div>
<!--            最近主体-->
            <div class="recently_section">
              <ul>
                <!--最近部分加载十条-->
<!--                <li>-->
<!--                  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>-->
<!--                  <div>-->
<!--                    <span>jetris</span><span>18-12-12</span><span>17:12</span><span>任务</span><br><b>任务的标题啊</b>-->
<!--                  </div>-->
<!--                </li>-->
                <li v-for="data in datalist.slice(0,10)" style="line-height: 40px" :key="data">
                  {{data}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="日程" name="second">
        <!--      日程-->
        <div class="schedule">
          <div class="small_container">
            <!--            日程头部-->
            <div class="schedule_header">
              <h4>日程</h4>
            </div>
<!--            日程主题-->
            <div class="schedule_section">
              <ul>
                <!--日程部分加载五条-->
<!--                <li>-->
<!--                  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>-->
<!--                  <div>-->
<!--                    <span>jetris</span><span>18-12-12</span><span>17:12</span><span>任务</span><br><b>任务的标题啊</b>-->
<!--                  </div>-->
<!--                </li>-->
                <li v-for="data in scheduleList.slice(0,5*scheduleNumber)" style="line-height: 40px" :key="data">
                  {{data}}
                </li>
              </ul>
            </div>
            <!--            日程尾部加载更多部分-->
            <div class="schedule_footer">
              <p v-if="scheduleShow"><span @click="scheduleClick()">加载更多</span></p>
              <p v-else><span>已经加载完了</span></p>
            </div>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="任务" name="third">
<!--        任务部分-->
        <div class="mission">
          <div class="small_container">
            <!--            任务头部-->
            <div class="mission_header">
              <h4>任务</h4>
            </div>
<!--            任务主题-->
            <div class="mission_section">
              <ul>
<!--                <li>-->
<!--                  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>-->
<!--                  <div>-->
<!--                    <span>jetris</span><span>18-12-12</span><span>17:12</span><span>任务</span><br><b>任务的标题啊</b>-->
<!--                  </div>-->
<!--                </li>-->
                <!--任务部分加载五条-->
                <li v-for="data in missionList.slice(0,5*missionNumber)" style="line-height: 40px" :key="data">
                  {{data}}
                </li>
              </ul>
            </div>
            <!--            任务尾部加载更多部分-->
            <div class="mission_footer">
              <p v-if="missionShow"><span @click="missionClick()">加载更多</span></p>
              <p v-else><span>已经加载完了</span></p>
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
      /* datalist 中存入数据在li列表展示 */
      datalist: ['1', '任务', '任务', '日程', '任务', '日程', '日程', '日程', '日程', '日程', '日程', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
      scheduleNumber: 1,
      missionNumber: 1,
      scheduleShow: true,
      missionShow: true
    }
  },
  computed: {
    /* 日程部分用过滤器在数据中过滤出日程 */
    scheduleList: function () {
      return this.datalist.filter(function (n) {
        return n.indexOf('日程') > -1
      })
    },
    /* 任务部分用过滤器在数据中过滤出任务 */
    missionList: function () {
      return this.datalist.filter(function (n) {
        return n.indexOf('任务') > -1
      })
    }
  },
  methods: {
    /* 每次点击加载更多显示5条,全部显示后'加载更多'消失,'已经加载完了'显示 */
    scheduleClick () {
      this.scheduleNumber++
      if (this.scheduleList.length === this.scheduleList.slice(0, 5 * this.scheduleNumber).length) {
        this.scheduleShow = false
      }
    },
    /* 每次点击加载更多显示5条,全部显示后'加载更多'消失,'已经加载完了'显示 */
    missionClick () {
      this.missionNumber++
      if (this.missionList.length === this.missionList.slice(0, 5 * this.missionNumber).length) {
        this.missionShow = false
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
    }
    .recently,.schedule,.mission{
      background: #fff;
      border-left: .8px solid #E4E7ED;
      border-right: .8px solid #E4E7ED;
      border-bottom: .8px solid #E4E7ED;
      margin-bottom: 30px;
      min-height: 490px;
      .small_container{
        width: 94%;
        margin: 0 auto;
        p{
          font-size: 12px;
          line-height: 44px;
        }
        .recently_header,.schedule_header,.mission_header{
          height: 50px;
          border-bottom: 1px solid #F3F3F3;
          line-height: 50px;
        }
        .recently_section,.schedule_section,.mission_section{
          overflow: hidden;
          padding: 10px;
          min-height: 374px;
          li{
            width: 300px;
            height: 70px;
            span{
              font-size: 12px;
              line-height: 26px;
            }
            b{
              font-size: 14px;
            }
            .el-avatar{
              width: 50px;
              height: 50px;
              float: left;
              margin-right: 20px;
            }
          }
        }
        .schedule_footer,.mission_footer{
          p{
            text-align: center;
            span{
              color: #999999;
              font-size: 12px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
