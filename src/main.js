import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSlider from 'vue-slider-component'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-slider-component/dist-css/vue-slider-component.css';
import 'vue-slider-component/theme/default.css';



Vue.use(BootstrapVue);
Vue.component('VueSlider', VueSlider);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
