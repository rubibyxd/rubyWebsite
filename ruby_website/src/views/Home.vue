<template>
  <div class="home">
    <div class="deco-circle"></div>
    <SimpleIntro />
    <div class="work-title">
      <h3 class="topic-cn">我的作品</h3>
      <h4 class="topic-en">MY WORK</h4>
    </div>
    <HomePortfolio />
    <div class="footer">
      <h3>想了解更多？</h3>
      <h4>WANNA KNOW MORE ?</h4> 
      <router-link to="/resume" class="guide-btn">簡歷  Resume</router-link>
      <div class="guide-btn" @click.stop="doCopy()">
        信箱 E-mail
        <div class="copy-msg" 
            :class="{'copy-msg-active': isActive}">
            複製成功
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleIntro from '@/components/SimpleIntro.vue'
import HomePortfolio from '@/components/HomePortfolio.vue'

export default {
  name: 'Home',
  components: {
    SimpleIntro,
    HomePortfolio,
  },
  data() {
    return {
      myMail:'rubyh.workmail@gmail.com',
      isActive:false,
    }
  },
}
</script>
<style lang="scss" scoped>
  .home{
    overflow: hidden;
    position: relative;
    .deco-circle{
      width: 1230px;
      height: 1230px;
      border-radius: 100%;
      background-color: #484E58;
      position: absolute;
      top: -25%;
      left: -40%;
      z-index: 0;
    }
    .work-title{
      padding: 60px 0;
      margin-top: 150px;
      text-align: center;
      margin-bottom: 60px;
      color: #F4F8FC;
      .topic-cn{
        font-size: 36px;
        font-weight: bold;
      }
      .topic-en{
        font-size: 24px;
        font-family: 'roboto';
      }
    }
    .footer{
      height: 474px;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/coding_pic.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h3{
        font-size: 36px;
        color: #fefefe;
        text-shadow: 0 2px 5px #222730;
      }
      h4{
        font-size: 24px;
        text-shadow: 0 2px 5px #222730;
        margin-bottom: 40px;
      }
      a{
        color: #fefefe;
        text-decoration: none;
      }
      .guide-btn{
        width: 30%;
        min-width: 260px;
        margin: 15px;
        padding: 10px;
        background-color: #927842;
        color: #fefefe;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        line-height: 36px;
        position: relative;
        cursor: pointer;
        &:hover{
          background-color: #222730;
        }
      }
    }
    .copy-msg {
      font-size: 12px;
      color: white;
      position: absolute;
      width: 100px;
      padding: 5px;
      text-align: center;
      top: 5px;
      left: 40%;
      z-index: 910;
      background-color: rgba(0, 0, 0, 0.7);
      opacity: 0;
      pointer-events: none;
      transition: opacity .2s;
    }
    .copy-msg-active {
        opacity: 1;
    } 
  }
@media(max-width: 1024px){
  .home{
    .deco-circle{
      width: 800px;
      height: 800px;
      top: -15%;
      left: -40%;
    }
  }
}
@media(max-width: 600px){
  .home{
    .deco-circle{
      left: -20%;
    }
    .work-title{
      padding: 30px 0;
      margin: 0;
      margin-top: 130px;
      .topic-cn{
        font-size: 28px;
      }
      .topic-en{
        font-size: 18px;
      }
    }
  }
}
</style>