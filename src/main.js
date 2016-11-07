import Vue from 'vue';
import VueRouter from 'vue-router';
import VueConfig from './routes';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);
Vue.use(VueRouter);
/* eslint-disable no-new */
const router = new VueRouter({});
VueConfig(router);
const index = Vue.extend(require('./index'));
router.start(index, 'app');
