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
          原是行銷美編、網站編輯，在因緣際會下接觸到前端技術並產⽣興趣，
          進而加入六⾓學院⾃學，過程中加深了我對這份專業的熱誠，
          也讓我下定決⼼到資策會精進自我、邁向⼯程師之路，
          於2020年11月20日畢業於資策會前端工程師訓練班。
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
      min-width: 697px;
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
          padding-bottom: 5px;
          color: #F4F8FC;
          display: flex;
          align-items: center;
          .cn-name{
            font-size: 24px;
            font-weight: normal;
            padding-right: 20px;
          }
          .en-name{
            font-size: 24px;
            font-weight: normal;
            font-family: 'Roboto', sans-serif;
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
</style>
