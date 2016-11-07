export default function (router) {
  router.map({
    '/': {
      component: require('./pages/Test.vue'),
      title: 'title default'
    },
    '/testok': {
      component: require('./pages/TestOK.vue'),
      title: 'title default'
    }
  });

};
