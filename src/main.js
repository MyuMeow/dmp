// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// iView
import iView from 'iview'; // 引用
import 'iview/dist/styles/iview.css'; // 导入样式
Vue.use(iView);
// normalize
import 'normalize.css';
import './assets/css/reset.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
