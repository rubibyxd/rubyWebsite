<template>
  <div class="contact">
    <div class="contact-title">
      <h2>聯絡資料</h2>
      <div class="en-label">
        CONTACT INFO
      </div>
      <div class="label-border"></div>
    </div>
    <div class="name-card-area">
      <div class="name-card">
        <div class="name-label">
          <div class="my-name">{{ myInfo.name }}</div>
        </div>
        <div class="my-info">
          <p><font-awesome-icon class="card-icons" :icon="['far', 'envelope']" />{{ myInfo.mail }}</p>
          <p><font-awesome-icon class="card-icons" :icon="['fab', 'github-square']" />{{ myInfo.gitHub }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Contact',
  data() {
    return {
      myInfo:{
        name:'謝宛均 Ruby Hsieh',
        mail:'rubyh.workmail@gmail.com',
        gitHub:'https://github.com/rubibyxd'
      }
    }
  },
}
</script>
<style lang="scss" scoped>
  .contact{
    margin-top: 70px;
    padding: 0 140px;
    .contact-title{
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 80px;
      h2{
        font-size: 36px;
      }
      .en-label{
        width: 400px;
        font-size: 24px;
        font-weight: bold;
        font-family: 'Roboto';
        padding: 5px;
        background-color: #927842;
        z-index: 10;
      }
      .label-border{
        width: 100%;
        border-bottom: 3px solid #927842;
        margin-top: -20px;
      }
    }
    .name-card-area{
      width: 918px;
      // height: 338px;
      padding: 12px;
      border: 3px solid #222730;
      background-image: url('/images/nameCardBG.png');
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 7px 7px 0 #484E58;
      margin: 0 auto;
      .name-card{
        width: calc(100% - 6px);
        height: calc(100% - 6px);
        border: 3px solid #222730;
        .my-name{
          width: 30%;
          background-color: #222730;
          font-size: 28px;
          text-align: right;
          font-weight: lighter;
          padding: 12px 30px 12px 100px;
          margin-left: -15px;
          margin-top: 60px;
          margin-bottom: 30px;
        }
        .my-info{
          width: 50%;
          color: #222730;
          font-size: 24px;
          font-family: 'Roboto';
          font-weight: bold;
          margin: 0 auto;
          margin-bottom: 60px;
          cursor: pointer;
          .card-icons{
            margin-right: 20px;
          }
          p{
            margin-bottom: 20px;
          }
        }
      }
    }
  }
</style>