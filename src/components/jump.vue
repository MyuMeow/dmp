<template>
  <div class="jump">
    <Layout :style="{height: '100%', background: '#fff'}">
      <bread-crumb :breadCrumbItems="breadCrumbItems"/>
      <jump-header :jumpItems="jumpItems" :pageIndex="pageIndex" @jumpItemClick="changeStep"/>
      <Content :style="{background: '#f5f7f9', marginTop: '24px'}"></Content>
      <jump-footer :pageNum="getPageNum" :pageIndex="pageIndex" @jumpFooterClick="changeStep"/>
    </Layout>
  </div>
</template>

<script>
  import BreadCrumb from './breadCrumb.vue';
  import JumpHeader from './jumpHeader.vue';
  import JumpFooter from './jumpFooter.vue';

  export default {
    components: {
      BreadCrumb,
      JumpHeader,
      JumpFooter
    },
    props: [
      'breadCrumbItems',
      'jumpItems'
    ],
    data () {
      return {
        pageIndex: 0
      }
    },
    computed: {
      getPageNum () {
        return this.jumpItems.length;
      }
    },
    methods: {
      changeStep (index) {
        this.pageIndex = index;
        // change breadCrumb
        this.breadCrumbItems.push(' ');
        this.breadCrumbItems.pop();
        this.breadCrumbItems[this.breadCrumbItems.length - 1] = this.jumpItems[index];
        this.$emit('changeStep', index);
      }
    }
  }
</script>

<style>
  .jump {
    flex: 1;
  }
</style>
