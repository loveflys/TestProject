<template>
  <div id="test">
    <mt-button @click="click" type="primary" size="large">跳转</mt-button>
  </div>
</template>
<style>
  #test .mint-button--large {
    margin-top: 50px;
  }
</style>
<script>
import { Indicator,MessageBox  } from 'mint-ui';
export default {
  data () {
    return {
    }
  },
  route: {
    data () {
      this.$root.state = true;
    }
  },
  methods: {
    click() {
      this.$router.go({
        path: './testok',
      });
    }
  }
}
</script>
