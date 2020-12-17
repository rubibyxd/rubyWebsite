<template>
  <div class="home-portfolio">
      <div class="title">
        <h3 class="topic-cn">我的作品</h3>
        <h4 class="topic-en">MY WORK</h4>
      </div>
      <div class="work-container">
        <div class="work-card left-card">
          <div class="work-info">
            <h4>■ 射擊小遊戲</h4>
            <p>主要使用技術:</p>
            <p>HTML、CSS、JavaScript、jQuery</p>
            <div class="enter-btn">點此進入遊戲DEMO</div>
          </div>
          <div class="work-pic"></div>
        </div>
        <div class="work-card right-card">
          <div class="work-pic"></div>
          <div class="work-info">
            <h4>■ 射擊小遊戲</h4>
            <p>主要使用技術:</p>
            <p>HTML、CSS、JavaScript、jQuery</p>
            <div class="enter-btn">點此進入遊戲DEMO</div>
          </div>   
        </div>
        <div class="work-card left-card">
          <div class="work-info">
            <h4>■ 射擊小遊戲</h4>
            <p>主要使用技術:</p>
            <p>HTML、CSS、JavaScript、jQuery</p>
            <div class="enter-btn">點此進入遊戲DEMO</div>
          </div>
          <div class="work-pic"></div>
        </div>
      </div>
      <div class="guide-text">
        <router-link to="/portfolio">更多作品集 →</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomePortfolio',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
  .home-portfolio{
    padding: 60px 0;
    background-color: #F1ECEC;
    .title{
      text-align: center;
      margin-bottom: 60px;
      color: #3B2C2A;
      .topic-cn{
        font-size: 36px;
        font-weight: bold;
      }
      .topic-en{
        font-size: 24px;
        font-family: 'roboto';
      }
    }
    .work-container{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .work-card{
        width: 75%;
        margin-bottom: 120px;
        padding: 60px;
        display: flex;
        justify-content: space-between;
      }
      .left-card{
        background: linear-gradient(-45deg,#9E8989 50%, #3B2C2A 50%);
        padding-left: 140px; 
      }
      .right-card{
        background: linear-gradient(-45deg,#3B2C2A  50%, #9E8989 50%);
        padding-right: 140px;
        align-self: flex-end;
      }
      .work-pic{
        width: 338px;
        height: 190px;
        background-color: #faf;
        border-radius: 5px;
        margin: 0 40px;
      }
      .work-info{
        width: 250px;
        color: #F1ECEC;
        font-size: 16px;
        padding: 0 60px;
        h4{
          font-size: 24px;
          margin-bottom: 15px;
        }
        .enter-btn{
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          color:  #3b2c2acd;
          background-color: #fefefe;
          border-radius: 30px;
          border: 1px solid transparent;
          outline: none;
          padding: 10px 20px;
          margin-top: 30px;
          cursor: pointer;
          transition: 0.2s;
          &:hover{
            color:  #3B2C2A;
            border: 1px solid #231c1c;
            box-shadow: 5px 5px 3px #231c1c;
            transform: scale(1.06);
        }
      }
    }
    }
    .guide-text{
      margin-right: 10%;
      text-align: right;
      a{
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
        color: #fefefe;
        background-color: #3B2C2A;
        border-radius: 30px;
        padding: 10px 40px;
        &:hover{
          background-color: #624a46;
        }
      }
    }
  }
  // @media (max-width: 950px) {
  //   .home-portfolio{
  //     .work-container{
  //       .work-pic{
  //         width: 40%;
  //         height: 190px;
  //         background-color: #3e1b73;
  //         border-radius: 5px;
  //       }
  //     }  
  //   }
  // } 
</style>
