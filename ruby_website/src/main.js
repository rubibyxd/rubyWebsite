import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './style/reset.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueClipboard from 'vue-clipboard2'

VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(fab, far, fas);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    doCopy() {
      const _this = this
      this.isActive = true;
      this.$copyText(this.myMail).then(()=>{
        let t = setTimeout(() => {
          _this.isActive = false
          clearTimeout(t)
        }, 500)
      })
    },
    hrefEvent(url){
      if(url === ""){
        return
      }else{
        window.open(url)
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
