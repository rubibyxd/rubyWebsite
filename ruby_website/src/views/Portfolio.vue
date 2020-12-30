<template>
  <div class="portfolio">
    <div class="portfolio-title">
      <h2>作品列表</h2>
      <div class="en-label">
        WORK LIST
      </div>
      <div class="label-border"></div>
    </div>
    <div class="work-area">
      <div class="work-card-container" v-for="(item,index) in workCards" :key="index">
        <div class="work-card">
          <div class="work-discription">
            <div class="work-title">{{ workCards[index].name }}</div>
            <div class="work-text">{{ workCards[index].text }}</div>
          </div>
          <div class="work-picture">
            <img :src="workCards[index].imgUrl" alt="work-pic">
          </div>
        </div>
        <div class="guide-label-btn">點擊查看DEMO</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Portfolio',
  data() {
    return {
      workCards:[
        {
          name:'射擊小遊戲',
          text:'維爾加曾講過，高貴的出身是一種湊巧的事情，並不是一種德行。白手起家才算是真本事。這不禁令我深思。別林斯基深信，一切真正的和偉大的東西，都是純樸而謙遜的。這段話雖短，卻足以改變人類的歷史。需要考慮周詳作品集的影響及因應對策。',
          imgUrl:'/images/JQHW.png',
        },
        {
          name:'射擊小遊戲-2',
          text:'高爾基曾提出，人如果沒有良心，哪怕有天大的聰明也活不下去。這影響了我的價值觀。貝多芬曾經說過，卓越的人一大優點是：在不利與艱難的遭遇裡百折不饒。',
          imgUrl:'/images/podcast.png',
        },
        {
          name:'射擊小遊戲-3',
          text:'莊周深信，天地與我並存，萬物與我為一。這段話非常有意思。這種事實對本人來說意義重大，相信對這個世界也是有一定意義的。世界上若沒有作品集，對於人類的改變可想而知。',
          imgUrl:'/images/BSHW.png',
        },
      ]
    }
  },
  methods: {
    scrollEvent(){
      console.log(window.scrollY)
    }
  },
}
</script>
<style lang="scss" scoped>
  .portfolio{
    margin-top: 70px;
    padding: 0 140px;
    .portfolio-title{
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
    .work-area{
      display: flex;
      flex-direction: column;
      align-items: center;
      .work-card-container{
        width: 910px;
        height: 450px;
        padding: 12px;
        background-color: #F4F8FC;
        margin-bottom: 70px;
        color: #222730;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        &:hover{
          .guide-label-btn{
            bottom: 0;
            opacity: 1;
          }
        }
        .guide-label-btn{
          width: 100%;
          background-color: #927842;
          text-align: center;
          color: #F4F8FC;
          font-size: 22px;
          font-weight: bold;
          padding: 12px 0;
          position: absolute;
          bottom: -50px;
          left: 0;
          opacity: 0;
          transition: all 0.3s;
        }
        .work-card{
          width: 100%;
          height: 100%;
          border: 3px solid #927842;
          display: flex;
        }
        .work-discription{
          width: 50%;
          .work-title{
            font-size: 30px;
            font-weight: bold;
            border-left: 70px solid #A75154;
            padding-left: 10px;
            margin-left: -15px;
            margin-top: 40px;
          }
          .work-text{
            padding: 40px;
            font-size: 16px;
            line-height: 32px;
            color: #484E58;
          }
        }
        .work-picture{
          width: 50%;
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
  @media(max-width:1024px){
    .portfolio{
      padding: 0 50px;
      .portfolio-title{
        .en-label{
          width: 300px;
        }
        .label-border{
          width: 100%;
          border-bottom: 3px solid #927842;
          margin-top: -20px;
        }
      }
      .work-area{
        .work-card-container{
          width: 90%;
          height: 330px;
          }
          .work-card{
            .work-discription{
              .work-title{
                font-size: 24px;
                border-left: 60px solid #A75154;
              }
              .work-text{
                font-size: 16px;
                padding: 0;
                margin: 20px;
                overflow: hidden;
                display: -webkit-box;
                display: -moz-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
              }
            }
          }
        }
      }
    }
  @media(max-width: 640px){
    .portfolio{
      padding: 0 30px;
      .portfolio-title{
        h2{
          font-size: 30px;
        }
        .en-label{
          font-size: 22px;
          width: 150px;
        }
        .label-border{
          width: 100%;
          border-bottom: 3px solid #927842;
          margin-top: -20px;
        }
      }
      .work-area{
        .work-card-container{
          width: 90%;
          height: 100%;
          padding: 5px;
          }
          .work-card{
            flex-wrap: wrap;
            flex-direction: space-between;
            align-items: center;
            .work-discription{
              width: 100%;
              .work-title{
                font-size: 22px;
                margin-top: 10px;
                border-left: 50px solid #A75154;
              }
              .work-text{
                font-size: 12px;
                line-height: 24px;
                padding: 0;
                margin: 15px;
                overflow: hidden;
                display: -webkit-box;
                display: -moz-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
              }
            }
            .work-picture{
              width: 100%;
            }
          }
        }
      }
    }
</style>