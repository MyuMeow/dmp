<template>
  <div class="external">
    <jump :breadCrumbItems="locationItems" :jumpItems="headerItems" @changeStep="changeStep"/>
    <div class="ins-layer">
      <div class="ins-box">
        <div v-show="0 == pageIndex">
          <Select :style="{width: '360px'}" placeholder="请选择供应商信息，若没有需要的，请新增！"></Select>
          <Button>新增</Button>
          <Button>修改</Button>
          <Button>删除</Button>
        </div>
        <div v-show="1 == pageIndex">1111</div>
        <div v-show="2 == pageIndex">2222</div>
        <div v-show="3 == pageIndex">3333</div>
        <div v-show="4 == pageIndex">4444</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Jump from '../../components/jump.vue';

  // mock 数据
  import jumpItemList from '../../mock/jumpItemList.json';

  export default {
    components: {
      Jump
    },
    data () {
      return {
        locationItems: ['接口管理', '外部接口管理'],
        headerItems: [],
        pageIndex: 0
      }
    },
    methods: {
      changeStep (index) {
        this.pageIndex = index;
      }
    },
    mounted () {
      this.headerItems = jumpItemList.interface.external;
      this.locationItems.push(this.headerItems[0]);
    }
  }
</script>

