<template>
  <div class="home-portfolio">
    <div class="work-container">
      <div v-if="tagsStatus.length > 1" class="tags">
        <div v-for="(item,index) in tagsStatus" :key="index"
            :class="{'tag--active':tagsStatus[index].isActive,
            'tag-brown':index === 0,'tag-blue':index === 1,'tag-red':index === 2}"
            @click.stop="setActiveTag(index)"></div>
      </div>
      <template v-for="(item,index) in tagsStatus">
        <div v-if="tagsStatus[index].isActive === true" class="main-card" :key="index">
          <div class="work-intro">
            <div class="intro-block">
              <div class="work-title">{{ tagsStatus[index].title }}</div>
              <div class="work-text-intro">{{ tagsStatus[index].text }}</div>
              <div class="continue-btn">
                <router-link to="/portfolio">
                  <span>看所有作品</span>
                  <span class="continue-btn-icon"><font-awesome-icon icon="chevron-right" /></span>
                </router-link>
              </div>
            </div>
          </div>
          <div v-if="tagsStatus[index].isActive === true" class="work-pic">
            <img :src="tagsStatus[index].imgUrl" alt="work-pic">
          </div>
        </div>
      </template>
      <div v-if="tagsStatus.length > 1" class="carousel-handler">
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
  created(){
    this.axios
      .get('/json/portfolio.json')
      .then(response => (
        // 把拿到的資料用map整理到this.tagStatus
          this.tagsStatus = response.data.map((item,index) => {
              item.isActive = false
              if(index === 0)
                item.isActive = true
              return item
            }).slice(0,3)
        )
      )
      .catch(function (error) { 
        console.log(error);
      });
  },
  data() {
    return {
      tagsStatus: [],
    }
  },
  methods: {
    setActiveTag(elIndex){
      this.tagsStatus = this.tagsStatus.map((item,index) => {
        item.isActive = false
        if (index === elIndex) 
          item.isActive = true
        return item
      })
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
        .tag-brown,.tag-blue,.tag-red{
          width: 67px;
          height: 30px;
          box-shadow: 3px 0 3px #0405078e;
          cursor: pointer;
        }
        .tag-brown{
          background-color: #927842;
          z-index: 10;
        }
        .tag-blue{
          background-color: #5887B9;
          z-index: 9;
        }
        .tag-red{
          background-color: #A75154;
          z-index: 8;
        }
        .tag--active{
          height: 60px;
          z-index: 30;
        }
      }
      .main-card{
        height: 400px;
        background-color: #F4F8FC;
        border: 2px solid #222730;
        box-shadow: 7px 7px 0 #484E58;
        display: flex;
        padding: 12px;
        align-items: center;
        justify-content: space-between;
        .work-intro{
          width: 40%;
          height: 100%;
          display: flex;
          align-items: center;
          white-space: pre-wrap;
          .intro-block{
            width: calc(100% - 13px);
            height: calc(100% - 6px);
            border: 3px solid #484E58;
            color:#222730;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .work-title{
              font-size: 28px;
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
              margin-bottom: 30px;
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
          width: 60%;
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
        cursor: pointer;
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
        width: 90%;
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
                font-size: 18px;
                padding: 20px 20px 20px;
              }
              .work-text-intro{
                padding: 0 20px;
                font-size: 12px;
                overflow: hidden;
                display: -webkit-box;
                display: -moz-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
              }
              .continue-btn {
                font-size: 14px;
                margin-right: 20px;
                margin-bottom: 20px;
                .continue-btn-icon {
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
  }
  @media(max-width: 640px){
    .home-portfolio{
      margin-bottom: 0;
      .work-container{
        .tags{
          display: none;
        }
        .main-card{
          width: 100%;
          height: unset;
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
              height: 100%;
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
                margin: 5px 5px 5px 0;
              }
            }
          }
        }
      }
    }
  }
</style>
