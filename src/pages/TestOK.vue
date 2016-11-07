<template>
  <div :style="{overflow: 'auto','overflow-x':'hidden',height: wrapperHeight + 'px' }">
    <ul style="margin-top: 20px;"
      v-infinite-scroll="loadMore()"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="50">
      <li v-for="item in list">{{ item }}</li>
    </ul>
    <div v-if="loading" style="text-align: center;">
      加载中。。。。。。
    </div>
  </div>
</template>
<style>
ul li {
  list-style: none;
  border: 1px solid #dfdfdf;
  text-align: center;
  margin: 50px;
}
</style>
<script>
import { InfiniteScroll, Indicator,MessageBox  } from 'mint-ui';
export default {
  data () {
    return {
      list: [],
      loading: false,
      countPage: 100,
      pageSize: 10,
      pageNum: 1,
      wrapperHeight: 0
    }
  },
  route: {
    data () {
      window.x = this;
      this.$root.state = true;
      this.wrapperHeight = document.documentElement.clientHeight-84;
    }
  },
  methods: {
    loadMore() {
      console.log("Loading")
      this.loading = true;
      setTimeout(() => {
        let last = 0;
        if(this.pageNum !== 1) {
          last = this.list[this.list.length - 1];
        }
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.pageNum++;
        this.loading = false;
      }, 2500);
    }
  }
}
</script>
