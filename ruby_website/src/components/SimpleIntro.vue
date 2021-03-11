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
          由行銷轉職前端工程師，畢業於資策會前端工程師訓練班。
          畢業後致力於學習Vue框架技術、使用GCP架設網站、研究Google Api、學習SCSS設計模式等等來製作作品集。
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
    margin-top: 160px;
    margin-bottom: 55px;
    width: 100%;
    .card-container{
      position: relative;
      margin: 0 auto;
      width: 70%;
      // min-width: 697px;
      height: 100%;
      display: flex;
      .my-pic{
        width: 35%;
        height: 400px;
        background-image: url('/images/mypic.jpg');
        background-size: 130%;
        background-position: 50% 30%;
        background-repeat: no-repeat;
        border-radius: 5px;
      }
      .my-discrption{
        width: 65%;
        padding: 0 40px;
        .career-title{
          font-size: 32px;
          font-family: 'Roboto', sans-serif;
          color: #F4F8FC;
        }
        .my-name{
          margin: 20px 0;
          border-bottom: 2px solid #F4F8FC;
          color: #F4F8FC;
          display: flex;
          align-items: center;
          padding-bottom: 10px;
          .cn-name{
            font-size: 24px;
            font-weight: normal;
            padding-right: 20px;
            margin: 0;
          }
          .en-name{
            font-size: 24px;
            font-weight: normal;
            font-family: 'Roboto', sans-serif;
            padding: 0;
            margin: 0;
          }
        }
        .my-intro{
          font-size: 16px;
          font-weight: lighter;
          line-height: 36px;
          letter-spacing: 1px;
          color: #F4F8FC;
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
      }
    }
  }
}
@media(max-width: 600px){
  .simple-intro{
    margin-top: 60px;
    .card-container{
      // flex-wrap: wrap;
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
          justify-content: center;
          border-bottom: 1px solid #F4F8FC;
          .cn-name,.en-name{
            font-size: 20px;
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
