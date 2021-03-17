<template>
  <div class="simple-intro">
    <div class="card-container">
      <div class="my-pic"></div>
      <div class="my-discrption">
        <h2 class="career-title">Frontend Engineer</h2>
        <div class="my-name">
          <h3 class="cn-name">謝宛均</h3>
          <p class="en-name">Ruby Hsieh</p>
        </div>
        <div class="my-intro">
          曾任職於美妝電商公司，由內容行銷轉職前端工程師，畢業於資策會前端工程師訓練班。
          目前使用的框架是Vue.js，也接觸過React(資策會畢專)，畢業後以GCP架設網站並積極精進自我，有串接過 Youtube Api、使用 SASS 7-1 pattern 製作作品集。
        </div>
        <div class="my-skill mt-3">
          <div class="skill-info">
            <div class="skill-title mb-2">前端技能</div>
            Vue.js、Vuex、 Vue Router、Vue Cookies、Vuetify、HTML 5、CSS、SCSS、JavaScript(ES6)、jQuery、Bootstrap
          </div>
          <div class="link-btn-container">
            <router-link to="/resume" class="link-resume">
              查看更多技能
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-hint">
      <p>往下滑看更多</p>
      <p><font-awesome-icon icon="chevron-down" /></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleIntro',
}
</script>
<style scoped lang="scss">
  .simple-intro{
    margin-top: 100px;
    margin-bottom: 55px;
    width: 100%;
    .card-container{
      position: relative;
      margin: 0 auto;
      width: 70%;
      height: 100%;
      display: flex;
      .my-pic{
        width: 25%;
        min-height: 300px;
        background-image: url('/images/mypic.jpg');
        background-size: 130%;
        background-position: 50% 20%;
        background-repeat: no-repeat;
        border-radius: 5px;
      }
      .my-discrption{
        width: 65%;
        padding: 0 40px;
        .career-title{
          font-size: 28px;
          font-family: 'Roboto', sans-serif;
          color: #F4F8FC;
          margin-bottom: 20px;
        }
        .my-name{
          margin: 10px 0;
          border-left: 10px solid #10F6A1;
          color: #F4F8FC;
          display: flex;
          align-items: center;
          .cn-name{
            font-size: 16px;
            font-weight: normal;
            padding: 0 10px;
            margin: 0;
          }
          .en-name{
            font-size: 16px;
            font-weight: normal;
            font-family: 'Roboto', sans-serif;
            padding: 0;
            margin: 0;
          }
        }
        .my-intro{
          font-size: 14px;
          font-weight: lighter;
          line-height: 1.5;
          letter-spacing: 1px;
          color: #F4F8FC;
        }
        .my-skill {
          display: flex;
          flex-direction: column;
          .skill-title {
            border-left: 10px solid #10F6A1;
            padding-left: 10px;
          }
          .skill-info {
            font-size: 14px;
            line-height: 1.5;
            margin-top: 10px;
            margin-bottom: 20px;
          }
          .link-btn-container {
            align-self: flex-end;
            margin-top: 10px;
            .link-resume {
              padding: 5px 50px;
              border: 1px solid #F4F8FC;
              color: #F4F8FC;
              border-radius: 5px;
              text-align: center;
              transition: 0.3s;
              a {
                text-decoration: none;
              }
              &:hover {
                text-decoration: none;
                border: 1px solid transparent;
                color: #222730;
                background-color: #10F6A1;
              }
            }
          }

        }
      }
    }
    .scroll-hint{
      width: 100%;
      font-size: 16px;
      font-weight: bold;
      margin-top: 55px;
      text-align: center;
      color: #10F6A1;
      position: absolute;
      z-index: 15;
      p {
        margin: 0;
      }
    }
  }
@media(max-width:1024px){
  .simple-intro{
    margin-top: 100px;
    .card-container{
      width: 90%;
      .my-pic{
        height: 300px;
      }
      .my-discrption{
        .career-title{
          font-size: 24px;
        }
        .my-name{
          .cn-name{
            font-size: 18px;
            font-weight: normal;
            padding-right: 20px;
            margin: 0;
            margin-right: 10px;
            padding: 0;
          }
          .en-name{
            font-size: 18px;
            font-weight: normal;
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
          }
        }
        .my-intro{
          font-size: 14px;
        }
        .my-skill {
          align-items: center;
          .link-btn-container {
            align-self: unset;
          }
        }
      }
    }
  }
}
@media(max-width: 600px){
  .simple-intro{
    margin-top: 60px;
    .card-container{
      flex-direction: column;
      align-items: center;
      .my-pic{
        width: 80%;
        height: 300px;
        margin: 0 auto;
        margin-bottom: 20px;
      }
      .my-discrption{
        width: 100%;
        .career-title{
          font-size: 28px;
          text-align: center;
        }
        .my-name{
          .cn-name,.en-name{
            padding-left: 10px;
            font-size: 14px;
          }
        }
        .my-intro{
          font-size: 12px;
        }
      }
    }
  }
}
</style>
