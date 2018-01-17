<template>
  <div class="elastic-search">
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
            <Col span="4"><span class="item-title">ES集群名称</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">ES集群URI地址</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">ES集群用户名称</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">ES集群密码</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">ES集群负责人名称</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
        </div>
        <div v-show="1 == pageIndex">
          <Row :gutter="16" class-name="row-spacing">
            <Col span="6"><Select></Select></Col>
            <Col span="18">
              <Button type="primary">新增</Button>
              <Button type="primary">修改</Button>
              <Button type="primary">删除</Button>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">ES索引名称</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">ES索引分片数</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">ES索引副本数</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">ES索引负责人</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
        </div>
        <div v-show="2 == pageIndex">
          <Row :gutter="16" class-name="row-spacing">
            <Col span="6"><Select></Select></Col>
            <Col span="18">
              <Button type="primary">新增</Button>
              <Button type="primary">修改</Button>
              <Button type="primary">删除</Button>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">第三方数据提供商API标识</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">ES索引类型名称</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">ES索引类型负责人名称</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
        </div>
        <div v-show="3 == pageIndex"><finish /></div>
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
        locationItems: ['接口管理', 'ES集群管理'],
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
      this.headerItems = jumpItemList.interface.elasticSearch;
      this.headerItems.push('Finish');
      this.locationItems.push(this.headerItems[0]);
    },
    beforeDestroy (){
      this.headerItems.pop();
    }
  }
</script>
