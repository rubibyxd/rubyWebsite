<template>
  <div class="resume">
    <div class="resume-title">
      <h2>履歷</h2>
      <div class="en-label">
        RESUME
      </div>
      <div class="label-border"></div>
    </div>
    <div class="name-card-area">
      <template v-if="page === 0">
        <div class="name-card">
          <div class="name-label">
            <div class="my-name">謝宛均 Ruby Hsieh</div>
            <div class="work-title">前端工程師 Frontend Engineer</div>
          </div>
          <main class="main-content">
            <div class="tools-area" v-for="(item,index) in myData.toolType" :key="index">
              <div class="tools-topic">
                <font-awesome-icon class="topic-icons" :icon="['fas', 'tools']" />
                {{item.title}}
              </div>
              <div class="tools-intro">{{item.text}}</div>
            </div>
            <div class="education-area">
              <div class="edu-title"><font-awesome-icon class="topic-icons" :icon="['fas', 'graduation-cap']" />學歷 Educational Background</div>
              <div class="info-card-container"> 
                <div class="school-info" v-for="(item,index) in myData.eduInfo" :key="index">
                  <div class="school-logo">
                    <img :src="item.imgUrl" alt="logo">
                  </div>
                  <div class="info-detail">
                    <div class="school-name">{{ item.schoolName }}</div>
                    <div class="major">{{ item.major }}</div>
                    <div class="graduate-date">{{ item.graduateDate }}</div>
                  </div>
                </div>
              </div> 
            </div>
            <div class="work-experience">
              <div class="work-exp-title"><font-awesome-icon class="topic-icons" :icon="['fas', 'briefcase']" />工作經歷 Work Experience</div>
              <div class="job-info-container" v-for="(item,index) in myData.workInfo" :key="index">
                <div class="company-logo">
                  <img :src="item.imgUrl" alt="">
                </div>
                <div class="job-info">
                  <div class="company-name">{{ item.companyName }}</div>
                  <div class="job-title">
                    <span>{{ item.jobTitle }}</span>{{ item.date }}
                  </div>
                  <p>主要工作內容:</p>
                  <div class="main-jobs">{{ item.workContent }}</div>
                </div>
              </div>
            </div>
          </main>
          <div class="page-btn" @click.stop="changePage">
            <span>下一頁</span>自傳
          </div>
        </div>
      </template>
      <template v-else-if="page === 1">
        <div class="name-card">
          <div class="page-topic">
            <font-awesome-icon class="topic-icons" :icon="['fas', 'user-tag']" />
            自傳 Autobiography 
          </div>
          <div class="autobiography-content">
            <div class="paragraph" v-for="(item,index) in myData.autobiography" :key="index">
              <div class="title">{{ item.title }}</div>
              <div class="text">{{ item.content }}</div>
            </div>
          </div>
          <div class="page-btn" @click.stop="changePage">
            <span>上一頁</span>履歷
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name:'Resume',
  data() {
    return {
      page:0,
      myData:null
    }
  },
  created(){
    this.axios
      .get('/json/resume.json')
      .then(response => (this.myData = response.data))
      .catch(function (error) { 
        console.log(error);
      });
  },
  methods: {
    changePage(){
      if(this.page === 0){
        this.page = 1
      }
      else{
        this.page = 0
      }
    }
  },
}
</script>
<style lang="scss" scoped>
  .resume{
    margin-top: 70px;
    padding: 0 140px;
    .resume-title{
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
      font-size: 16px;
      width: 100%;
      padding: 12px;
      border: 3px solid #222730;
      background-color: #FAFFF6;
      box-shadow: 7px 7px 0 #484E58;
      margin: 0 auto;
      .name-card{
        width: 100%;
        height: 100%;
        border: 3px solid #222730;
        color: #222730;
        display: flex;
        flex-direction: column;
        .main-content{
          padding: 0 140px;
        }
        .topic-icons{
          margin-right: 10px;
        }
        .name-label{
          display: flex;
          align-items: center;
          margin-left: -15px;
          margin-top: 60px;
          margin-bottom: 30px;
          color: #FAFFF6;
          .my-name{
            background-color: #222730;
            font-size: 28px;
            text-align: right;
            font-weight: lighter;
            padding: 12px 30px 12px 100px;
          }
          .work-title{
            font-size: 28px;
            font-weight: bold;
            color: #222730;
            padding: 12px 20px;
          }
        }
        .tools-area{
          margin-bottom: 30px;
          .tools-topic{
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 15px;
          }
        }
        .education-area{
          margin-top: 60px;
          .edu-title{
            font-size: 20px;
            font-weight: bold;
            padding-bottom: 10px;
            border-bottom: 2px solid  #222730;
          }
          .info-card-container{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .school-info{
              // min-width: 340px;
              display: flex;
              margin: 30px 0;
              .school-logo{
                margin-right: 20px;
                img{
                  width: 100px;
                  height: 100px;
                  object-fit: cover;
                }
              }
            }
            .info-detail{
              font-size: 16px;
              .school-name{
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 10px;
              }
            }
          } 
        }
        .work-experience{
          margin-top: 40px;
          margin-bottom: 60px;
          .work-exp-title{
            font-size: 20px;
            font-weight: bold;
            padding-bottom: 10px;
            border-bottom: 2px solid  #222730;
          }
          .job-info-container{
              margin: 30px 0;
              display: flex;
              align-items: center;
              border-bottom: 1px solid #484e5853;
              padding-bottom: 20px;
              .company-logo{
                width: 100px;
                height: 100px;
                margin-right: 25px;
                img{
                  width: 100%;
                  height: 100%;
                }
              }
              .company-name{
                font-size: 18px;
                font-weight: bold;
              }
              .job-title{
                margin-bottom: 10px;
                span{
                  margin-right: 10px;
                }
              }
          }
        }
        .page-btn{
          align-self: flex-end;
          width: 300px;
          background-color: #A75154;
          padding: 16px 0;
          text-align: center;
          margin-right: -15px;
          margin-bottom: 60px;
          margin-top: 40px;
          color: #FAFFF6;
          font-size: 24px;
          font-weight: bold;
          span{
            margin-right: 20px;
          }
        }
        .page-topic{
          font-size: 28px;
          font-weight: bold;
          text-align: center;
          margin-top: 60px;
          margin-bottom: 30px;
        }
        .autobiography-content{
          padding: 0 140px;
          .paragraph{
            margin-bottom: 40px;
            .title{
              font-size: 20px;
              font-weight: bold;
              margin-bottom: 15px;
            }
            .text{
              line-height: 2rem;
              white-space: pre-wrap;
            }
          }
        }     
      }
    }
  }
  @media(max-width:1024px){
    .resume{
      padding: 0 50px;
      .resume-title{
        .en-label{
          width: 300px;
        }
      }
      .name-card-area{
        .name-card{
          .main-content{
            padding: 0 60px;
          }
          .name-label{
            margin-left: -15px;
            margin-top: 30px;
            .my-name{
              background-color: #222730;
              font-size: 20px;
              padding: 12px 30px 12px 80px;
            }
            .work-title{
              font-size: 20px;
            }
          }
          .tools-area{
            .tools-topic{
              font-size: 18px;
            }
          }
          .page-topic{
            font-size: 24px;
          }
          .autobiography-content{
            padding: 0 60px;
            .paragraph{
              .title{
                font-size: 18px;
              }
              .text{
                font-size: 14px;
              }
            }
          }     
        }
      }
    }
  }
  @media(max-width: 640px){
    .resume{
      padding: 0 30px;
      .resume-title{
        h2{
          font-size: 30px;
        }
        .en-label{
          width: 200px;
          font-size: 22px;
        }
      }
      .name-card-area{
        padding: 5px;
        .name-card{
          .main-content{
            padding: 0 30px;
          }
          .name-label{
            margin-top: 30px;
            flex-direction: column;
            margin-left: 0;
            .my-name{
              width: 90%;
              font-size: 20px;
              text-align: center;
              padding: 12px;
            }
            .work-title{
              font-size: 14px;
            }
          }
          .tools-area{
            margin-bottom: 20px;
            font-size: 12px;
            .tools-topic{
              font-size: 14px;
              font-weight: bold;
              margin-bottom: 10px;
            }
          }
          .education-area{
            .edu-title{
              font-size: 14px;
              text-align: center;
              margin: 0 -20px;
              padding: 5px 0;
              border-top: 2px solid #2F394A;
              border-bottom: 2px solid #2F394A;
            }
            .info-card-container{
              .school-info{
                width: 100%;
                margin: 20px 0;
                .school-logo{
                  img{
                    width: 50px;
                    height: 50px;
                  }
                }
              }
              .info-detail{
                font-size: 12px;
                .school-name{
                  font-size: 14px;
                }
              }
            } 
          }
          .work-experience{
            .work-exp-title{
              font-size: 14px;
              text-align: center;
              margin: 0 -20px;
              padding: 5px 0;
              border-top: 2px solid #2F394A;
              border-bottom: 2px solid #2F394A;
            }
            .job-info-container{
              font-size: 12px;
              .company-logo{
                margin-right: 15px;
                img{
                  width: 50px;
                  height: 50px;
                }
              }
              .company-name{
                font-size: 14px;
                font-weight: bold;
              }
              .job-title{
                font-size: 12px;
              }
              .job-info{
                p{
                  margin: 0;
                }
              }
            }
          }
          .page-btn{
            width: 100%;
            margin-right: -0;
            margin-bottom: 40px;
            margin-top: 0;
            font-size: 18px;
            padding: 10px;
          }
          .page-topic{
            margin-top: 20px;
            font-size: 20px;
          }
          .autobiography-content{
            padding: 0 30px;
            .paragraph{
              margin-bottom: 40px;
              .title{
                font-size: 16px;
                margin-bottom: 5px;
                text-align: center;
                border: 1px solid #222730;
              }
              .text{
                font-size: 14px;
                line-height: 28px;
                white-space: pre-wrap;
              }
            }
          }     
        }
      }
    }
  }
</style>