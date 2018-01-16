<template>
  <div class="internal">
    <jump :breadCrumbItems="locationItems" :jumpItems="headerItems"/>
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
        locationItems: ['接口管理', '内部接口管理'],
        headerItems: []
      }
    },
    mounted () {
      this.headerItems = jumpItemList.interface.internal;
      this.locationItems.push(this.headerItems[0]);
    }
  }
</script>
