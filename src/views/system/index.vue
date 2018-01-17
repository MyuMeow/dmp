<template>
  <div class="system">
    <jump :breadCrumbItems="locationItems" :jumpItems="headerItems" @changeStep="changeStep"/>
    <div class="ins-layer">
      <div class="ins-box">
        <div v-show="0 == pageIndex">
          <Row :gutter="16" class-name="row-spacing">
            <Col span="6">
              <Select></Select>
            </Col>
            <Col span="18">
              <Button type="primary">新增</Button>
              <Button type="primary">修改</Button>
              <Button type="primary">删除</Button>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
              <span class="item-title">系统API服务系统名称</span>
            </Col>
            <Col span="6">
              <Input />
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
              <span class="item-title">系统API服务系统URI地址信息</span>
            </Col>
            <Col span="6">
              <Input />
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
              <span class="item-title">内部数据API负责人名称</span>
            </Col>
            <Col span="6">
              <Input />
            </Col>
          </Row>
        </div>
        <div v-show="1 == pageIndex">
          <Row :gutter="16" class-name="row-spacing">
            <Col span="6">
              <Select></Select>
            </Col>
            <Col span="18">
              <Button type="primary">新增</Button>
              <Button type="primary">修改</Button>
              <Button type="primary">删除</Button>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"> <span class="item-title">系统API名称</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"> <span class="item-title">系统服务API编码</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"> <span class="item-title">系统API URI地址</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"> <span class="item-title">系统API请求类型信息</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"> <span class="item-title">系统API请求方法名称</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"> <span class="item-title">系统API返回参数数据类型名称</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"> <span class="item-title">系统服务API描述信息</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4"> <span class="item-title">系统API负责人名称</span></Col>
            <Col span="6"><Input /></Col>
          </Row>
        </div>
        <div v-show="2 == pageIndex">
          <Row :gutter="16" class-name="row-spacing">
            <Col><Button type="primary">新增</Button></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing" :style="{textAlign: 'center'}">
            <Col span="3"><h3>参数名称</h3></Col>
            <Col span="3"><h3>参数类型</h3></Col>
            <Col span="3"><h3>描述信息</h3></Col>
            <Col span="3"><h3>参数负责人</h3></Col>
            <Col span="3"><h3>测试数据</h3></Col>
            <Col span="3"><h3>操作</h3></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing" :style="{textAlign: 'center'}">
            <Col span="3"><Input /></Col>
            <Col span="3"><Input /></Col>
            <Col span="3"><Input /></Col>
            <Col span="3"><Input /></Col>
            <Col span="3"><Input /></Col>
            <Col span="3"><Input /></Col>
          </Row>
        </div>
        <div v-show="3 == pageIndex">
          <Row :gutter="16" class-name="row-spacing">
            <Col><Button type="primary">新增</Button></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing" :style="{textAlign: 'center'}">
            <Col span="3"><h3>参数名称</h3></Col>
            <Col span="3"><h3>参数类型</h3></Col>
            <Col span="3"><h3>描述信息</h3></Col>
            <Col span="3"><h3>参数负责人</h3></Col>
            <Col span="3"><h3>操作</h3></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing" :style="{textAlign: 'center'}">
            <Col span="3"><Input /></Col>
            <Col span="3"><Input /></Col>
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
        locationItems: ['接口管理', '系统接口管理'],
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
      this.headerItems = jumpItemList.interface.system;
      this.headerItems.push('Finish');
      this.locationItems.push(this.headerItems[0]);
    },
    beforeDestroy (){
      this.headerItems.pop();
    }
  }
</script>
