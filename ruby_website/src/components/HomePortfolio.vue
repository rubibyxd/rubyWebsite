<template>
  <div class="home-portfolio">
    <div class="work-container">
      <div class="tags">
        <div v-for="(item,index) in tagsStatus" :key="index"
            :class="{'tag--active':tagsStatus[index].isActive,
            'tag1':index === 0,'tag2':index === 1,'tag3':index === 2}"
            @click.stop="setActiveTag(index)"></div>
      </div>
      <template v-for="(item,index) in tagsStatus">
        <div class="main-card" v-if="tagsStatus[index].isActive === true" :key="index">
          <div class="work-intro">
            <div class="intro-block">
              <div class="work-title">{{ tagsStatus[index].title }}</div>
              <div class="work-text-intro">{{ tagsStatus[index].text }}</div>
              <div class="continue-btn">
                <router-link to="/portfolio">
                  <span>觀看更多</span>
                  <span class="continue-btn-icon"><font-awesome-icon icon="chevron-right" /></span>
                </router-link>
              </div>
            </div>
          </div>
          <div class="work-pic" v-if="tagsStatus[index].isActive === true">
            <img :src="tagsStatus[index].imgUrl" alt="work-pic">
          </div>
        </div>
      </template>
      <div class="carousel-handler">
        <div v-for="(item,index) in tagsStatus" :key="index">
          <div class="tap-block" 
              :class="{'block--active':tagsStatus[index].isActive}"
              @click.stop="setActiveTag(index)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePortfolio',
  data() {
    return {
      tagsStatus:[
        {
          name:'tag1',
          isActive:true,
          imgUrl:'/images/JQHW.png',
          title:'◆ 射擊小遊戲1',
          text:'希望大家能從這段話中有所收穫。作品的存在，令我無法停止對他的思考。作品必定會成為未來世界的新標準。李白講過一句值得人反覆尋思的話，黃河走東溟，白日落西海，逝川與流光，飄忽不相待。'
        },
        {
          name:'tag2',
          isActive:false,
          imgUrl:'/images/podcast.png',
          title:'◆ 射擊小遊戲2',
          text:'希望大家能從這段話中有所收穫。作品的存在，令我無法停止對他的思考。作品必定會成為未來世界的新標準。李白講過一句值得人反覆尋思的話，黃河走東溟，白日落西海，逝川與流光，飄忽不相待。'
        },
        {
          name:'tag3',
          isActive:false,
          imgUrl:'/images/BSHW.png',
          title:'◆ 射擊小遊戲3',
          text:'希望大家能從這段話中有所收穫。作品的存在，令我無法停止對他的思考。作品必定會成為未來世界的新標準。李白講過一句值得人反覆尋思的話，黃河走東溟，白日落西海，逝川與流光，飄忽不相待。'
        }
      ],
    }
  },
  methods: {
    setActiveTag(elIndex){
      // this.tagsStatus[elIndex].isActive = !this.tagsStatus[elIndex].isActive
      // this.tagsStatus = this.tagsStatus.map(item => {
      //     item.isActive = false
      //   return item
      // })
      // this.tagsStatus[elIndex].isActive = true

      this.tagsStatus = this.tagsStatus.map((item,index) => {
        // if (index !== elIndex)
        //   item.isActive = false
        // else
        //   item.isActive = true
        item.isActive = false
        if (index === elIndex) 
          item.isActive = true
        return item
      })
      // for(let i = 0; i < this.tagsStatus.length; i++){
      //   if(this.tagsStatus[i] !== this.tagsStatus[el]){
      //     this.tagsStatus[i].isActive = false
      //   }
      // }
    },
  },
}
</script>

<style scoped lang="scss">
  .home-portfolio{
    margin-top: 30px;
    margin-bottom: 100px;
    .work-container{
      width: 920px;
      height: 575px;
      margin: 0 auto;
      .tags{
        display: flex;
        align-items: flex-end;
        padding-left: 15px;
        .tag1,.tag2,.tag3{
          width: 67px;
          height: 30px;
          box-shadow: 3px 0 3px #0405078e;
        }
        .tag1{
          background-color: #927842;
          z-index: 10;
        }
        .tag2{
          background-color: #5887B9;
          z-index: 9;
        }
        .tag3{
          background-color: #A75154;
          z-index: 8;
        }
        .tag--active{
          height: 60px;
          z-index: 30;
        }
      }
      .main-card{
        height: 448px;
        background-color: #F4F8FC;
        border: 2px solid #222730;
        box-shadow: 7px 7px 0 #484E58;
        display: flex;
        padding: 12px;
        align-items: center;
        justify-content: space-between;
        .work-intro{
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          .intro-block{
            width: calc(100% - 13px);
            height: calc(100% - 6px);
            border: 3px solid #484E58;
            color:#222730;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .work-title{
              font-size: 32px;
              font-weight: bold;
              padding: 40px 40px 30px;
            }
            .work-text-intro{
              padding: 0 40px 30px;
              color: #484E58;
              font-size: 16px;
              line-height: 32px;
            }
            .continue-btn{
              padding: 5px;
              font-size: 20px;
              font-weight: bold;
              align-self: flex-end;
              margin-right: 40px;
              margin-bottom: 40px;
              text-align: right;
              border-bottom: 5px solid transparent;
              a{
                text-decoration: none;
                color: #222730;
              }
              .continue-btn-icon{
                display: inline-block;
                text-align: center;
                width: 26px;
                height: 26px;
                font-size: 18px;
                color: #222730;
                margin-left: 10px;
                border-radius: 50%;
              }
              &:hover{
                border-bottom: 5px solid #10F6A1;
              }
            }
          }
        }
        .work-pic{
          width: 50%;
          height: 100%;
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      .carousel-handler{
        width: 100%;
        margin-top: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        .tap-block{
          width: 82px;
          height: 15px;
          border: 1px solid #939599;
          margin: 0 15px;
          background-color: rgba(255, 255, 255, 0.25);
        }
        .block--active{
          background-color: #10F6A1;
        }
      } 
      
    }
  }
  @media(max-width:1024px){
    .home-portfolio{
      .work-container{
        width: 80%;
        .tags{
          padding-left: 30px;
        }
        .main-card{
          width: 95%;
          height: 350px;
          margin: 0 auto;
          .work-intro{
            .intro-block{
              overflow: hidden;
              .work-title{
                font-size: 24px;
                padding: 20px 20px 20px;
              }
              .work-text-intro{
                padding: 0 20px;
                font-size: 14px;
                overflow: hidden;
                display: -webkit-box;
                display: -moz-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
              }
              .continue-btn{
                font-size: 16px;
                margin-right: 20px;
                margin-bottom: 20px;
              }
            }
          }
        }
      }
    }
  }
  @media(max-width: 640px){
    .home-portfolio{
      .work-container{
        .tags{
          display: none;
        }
        .main-card{
          width: 100%;
          height: 500px;
          margin: 0 auto;
          flex-wrap: wrap;
          flex-direction: column-reverse;
          align-items: center;
          .work-pic{
            width: 100%;
            height: 50%;
            padding: 6px;
          }
          .work-intro{
            width: 100%;
            height: 50%;
            align-items: center;
            justify-content: center;
            .intro-block{
              overflow: hidden;
              .work-title{
                font-size: 18px;
                padding: 15px;
                text-align: center;
              }
              .work-text-intro{
                padding: 0 15px;
                font-size: 12px;
                line-height: 24px;
                overflow: hidden;
                display: -webkit-box;
                display: -moz-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
              }
              .continue-btn{
                font-size: 14px;
                margin-right: 10px;
                margin-bottom: 10px;
              }
            }
          }
        }
      }
    }
  }
</style>
