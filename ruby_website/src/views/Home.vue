<template>
  <div class="home" @mousewheel="scrollTest()">
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
// @ is an alias to /src
import SimpleIntro from '@/components/SimpleIntro.vue'
import HomePortfolio from '@/components/HomePortfolio.vue'

export default {
  name: 'Home',
  components: {
    SimpleIntro,
    HomePortfolio,
  },
  methods: {
    scrollTest(){
      // console.log(window.scrollY)
    }
  },
}
</script>
<style lang="scss" scoped>
  .deco-circle{
    width: 1230px;
    height: 1230px;
    border-radius: 100%;
    background-color: #484E58;
    position: absolute;
    top: -55%;
    left: -20%;
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
    // background-image: url('/images/coding_pic.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    // opacity: 0.9;
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
      height: 36px;
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
</style>