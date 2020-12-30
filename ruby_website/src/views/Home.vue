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
      <div class="guide-btn">
        <router-link to="/resume">簡歷  Resume</router-link>
      </div>
      <div class="guide-btn">
        信箱 E-mail
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
        cursor: pointer;
        a{
          color: #fefefe;
          text-decoration: none;
        }
        &:hover{
          background-color: #222730;
        }
      }
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