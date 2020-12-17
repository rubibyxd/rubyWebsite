<template>
  <div class="simple-intro">
    <img src="/images/nobg-red.png" alt="" class="nobg-img">
    <div class="card-container">
      <div class="my-pic"></div>
      <div class="my-discrption">
        <h2 class="career-title">Front-End Engineer</h2>
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
  props: {
    msg: String
  }
}
</script>
<style scoped lang="scss">
  .simple-intro{
    margin-top: 50px;
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
        padding: 0 30px;
        .career-title{
          font-size: 32px;
          font-family: 'Roboto', sans-serif;
          color: #3B2C2A;
        }
        .my-name{
          margin: 20px 0;
          border-left: 10px solid #3B2C2A;
          color: #3B2C2A;
          display: flex;
          align-items: center;
          .cn-name{
            font-size: 24px;
            font-weight: bold;
            padding: 0 15px;
          }
          .en-name{
            font-size: 18px;
            font-weight: bold;
            font-family: 'Roboto', sans-serif;
          }
        }
        .my-intro{
          font-size: 18px;
          line-height: 36px;
        }
      }
    }
    .nobg-img{
      width: 20%;
      min-width: 150px;
      position: absolute;
      right: 0;
      top: 50%;
      overflow: hidden;
    }
    .scroll-hint{
      font-size: 16px;
      margin-top: 20px;
      text-align: center;
      padding: 30px;
      color: #9E8989;
    }
  }
</style>
