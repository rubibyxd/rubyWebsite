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
      <div class="work-card-container"
           @click.stop="hrefEvent(myData[index].pageUrl)" 
           v-for="(item,index) in myData" 
           :key="index">
        <div class="work-card">
          <div class="work-discription">
            <div class="work-title">{{ myData[index].title }}</div>
            <div class="work-text">{{ myData[index].text }}</div>
          </div>
          <div class="work-picture">
            <img :src="myData[index].imgUrl" alt="work-pic">
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
      myData:[]
    }
  },
  created(){
    this.axios
      .get('/json/portfolio.json')
      .then(response => (this.myData = response.data))
      .catch(function (error) { 
        console.log(error);
      });
  },
  watch:{
    $route (to, from){
      console.log(to)
      console.log(from)
    }
  }
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
        width: 80%;
        height: 380px;
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
          
          &:hover{
            img{
              width: 100%;
              height: 87%;
            }
          }
        }
        .work-discription{
          width: 50%;
          .work-title{
            font-size: 24px;
            font-weight: bold;
            border-left: 40px solid #A75154;
            padding-left: 10px;
            margin-left: -15px;
            margin-top: 40px;
          }
          .work-text{
            padding: 40px;
            font-size: 16px;
            line-height: 32px;
            color: #484E58;
            white-space: pre-wrap;
          }
        }
        .work-picture{
          width: 50%;
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.5s ease-in-out;
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
          width: 80%;
          height: 280px;
          }
          .work-card{
            .work-discription{
              .work-title{
                font-size: 18px;
                border-left: 30px solid #A75154;
              }
              .work-text{
                font-size: 14px;
                line-height: 28px;
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
                font-size: 16px;
                margin-top: 10px;
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