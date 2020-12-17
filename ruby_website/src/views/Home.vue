<template>
  <div class="home" @mousewheel="scrollTest()">
    <SimpleIntro />
    <HomePortfolio />
    <div class="footer">
      <h3>想了解更多？ 你可以 ... ...</h3>
      <div class="guide-btn">
        <router-link to="/resume">點這邊  看我的簡歷</router-link>
      </div>
      <div class="guide-btn">
        點這邊 複製我的 E-mail
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
  .footer{
    height: 474px;
    background-image: url('/images/work-731198_1920.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
      font-size: 36px;
      color: #fefefe;
      text-shadow: 0 2px 5px #292828;
      margin-bottom: 50px;
    }
    .guide-btn{
      width: 30%;
      min-width: 260px;
      height: 36px;
      margin: 15px;
      padding: 10px;
      background-color: #3B2C2A;
      border-radius: 30px;
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
        background-color: #624a46;
      }
    }
  }
</style>