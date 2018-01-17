<template>
  <div class="data-sync">
    <jump :breadCrumbItems="locationItems" :jumpItems="headerItems" @changeStep="changeStep"/>
    <div class="ins-layer">
      <div class="ins-box">
        <div v-show="0 == pageIndex">
          <Row :gutter="16" class-name="row-spacing">
            <Col span="6"><Select placeholder="请选择公司名称，若没有需要的，请新增！"></Select></Col>
            <Col span="18">
              <Button type="primary">新增</Button>
              <Button type="primary">修改</Button>
              <Button type="primary">删除</Button>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">公司名称</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">公司名称代码</span></Col>
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
            <Col span="4"><span class="item-title">应用名称</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">应用名称代码</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
        </div>
        <div v-show="2 == pageIndex">
          <Row :gutter="16" class-name="row-spacing">
            <Col>
              <Button type="primary">新增</Button>
              <Button type="primary">修改</Button>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">token</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">ip+port</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">文件根路径</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"><span class="item-title">通知邮箱地址</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
        </div>
        <div v-show="3 == pageIndex">
          <Row :gutter="16" class-name="row-spacing">
            <Col><Button type="primary">新增</Button></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing" :style="{textAlign: 'center'}">
            <Col span="3"><h3>时间策略代码</h3></Col>
            <Col span="3"><h3>同步机制</h3></Col>
            <Col span="3"><h3>同步规则</h3></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="3"><Input /></Col>
            <Col span="3"><Input /></Col>
            <Col span="3"><Input /></Col>
          </Row>
        </div>
        <div v-show="4 == pageIndex"><finish /></div>
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
        locationItems: ['数据同步管理', '数据同步管理'],
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
      this.headerItems = jumpItemList.dataSync.dataSync;
      this.headerItems.push('Finish');
      this.locationItems.push(this.headerItems[0]);
    },
    beforeDestroy (){
      this.headerItems.pop();
    }
  }
</script>
