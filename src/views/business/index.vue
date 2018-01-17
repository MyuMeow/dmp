<template>
  <div class="business">
    <jump :breadCrumbItems="locationItems" :jumpItems="headerItems" @changeStep="changeStep"/>
    <div class="ins-layer">
      <div class="ins-box">
        <div v-show="0 == pageIndex">
          <Row :gutter="16" class-name="row-spacing">
            <Col span="6"><Select></Select></Col>
            <Col span="18">
              <Button type="primary">新增</Button>
              <Button type="primary">修改</Button>
              <Button type="primary">删除</Button>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">业务系统名称</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">业务系统业务域名</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">业务系统IP</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">业务系统端口号</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">业务系统负责人名称</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
        </div>
        <div v-show="1 == pageIndex"><finish /></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Jump from '../../components/jump.vue';
  import Finish from '../../components/finish.vue';

  // mock 数据
  import jumpItemList from '../../mock/jumpItemList.json';

  export default {
    components: {
      Jump,
      Finish
    },
    data () {
      return {
        locationItems: ['接口管理', '业务系统管理'],
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
      this.headerItems = jumpItemList.interface.business;
      this.headerItems.push('Finish');
      this.locationItems.push(this.headerItems[0]);
    },
    beforeDestroy (){
      this.headerItems.pop();
    }
  }
</script>
