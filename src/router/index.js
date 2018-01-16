import Vue from 'vue'
import Router from 'vue-router'

// 接口管理
import External from '../views/external/index';
import Internal from '../views/internal/index';
import System from '../views/system/index';
import ElasticSearch from '../views/elasticSearch/index';
import Business from '../views/business/index';
// 数据同步管理
import DataSync from '../views/dataSync/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/external'
    },
    {
      path: '/external',
      component: External
    },
    {
      path: '/internal',
      component: Internal
    },
    {
      path: '/system',
      component: System
    },
    {
      path: '/elasticSearch',
      component: ElasticSearch
    },
    {
      path: '/business',
      component: Business
    },
    {
      path: '/dataSync',
      component: DataSync
    }
  ]
})
