import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSlider from 'vue-slider-component'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-slider-component/dist-css/vue-slider-component.css';
import 'vue-slider-component/theme/default.css';
import 'vue2-animate/dist/vue2-animate.min.css';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.component('VueSlider', VueSlider);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
