<template>
  <div class="data-sync">
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
        locationItems: ['数据同步管理', '数据同步管理'],
        headerItems: []
      }
    },
    mounted () {
      this.headerItems = jumpItemList.dataSync.dataSync;
      this.locationItems.push(this.headerItems[0]);
    }
  }
</script>
