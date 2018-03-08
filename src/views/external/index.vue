<template>
  <div class="external">
    <jump :breadCrumbItems="locationItems" :jumpItems="headerItems" @changeStep="changeStep" />
    <div class="ins-layer">
      <div class="ins-box">
        <div v-show="0 == pageIndex"><page0 /></div>
        <div v-show="1 == pageIndex"><page1 /></div>
        <div v-show="2 == pageIndex">
          <Row :gutter="16" class-name="row-spacing">
            <Col>
            <Button type="primary">新增</Button>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing" :style="{textAlign: 'center'}">
            <Col span="3">
            <h3>参数名称</h3></Col>
            <Col span="3">
            <h3>参数类型</h3></Col>
            <Col span="3">
            <h3>描述信息</h3></Col>
            <Col span="3">
            <h3>参数负责人</h3></Col>
            <Col span="3">
            <h3>测试数据</h3></Col>
            <Col span="3">
            <h3>操作</h3></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="3">
            <Input/></Col>
            <Col span="3">
            <Input/></Col>
            <Col span="3">
            <Input/></Col>
            <Col span="3">
            <Input/></Col>
            <Col span="3">
            <Input/></Col>
            <Col span="3">
            <Input/></Col>
          </Row>
        </div>
        <div v-show="3 == pageIndex">
          <Row :gutter="16" class-name="row-spacing">
            <Col>
            <Button type="primary">新增</Button>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing" :style="{textAlign: 'center'}">
            <Col span="3">
            <h3>参数名称</h3></Col>
            <Col span="3">
            <h3>参数类型</h3></Col>
            <Col span="3">
            <h3>描述信息</h3></Col>
            <Col span="3">
            <h3>参数负责人</h3></Col>
            <Col span="3">
            <h3>操作</h3></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="3">
            <Input/></Col>
            <Col span="3">
            <Input/></Col>
            <Col span="3">
            <Input/></Col>
            <Col span="3">
            <Input/></Col>
            <Col span="3">
            <Input/></Col>
          </Row>
        </div>
        <div v-show="4 == pageIndex">
          <Row :gutter="16" class-name="row-spacing">
            <Col>
            <Button type="primary">新增</Button>
            <Button type="primary">编辑</Button>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">API收费方法名称</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">API收费价格（元）</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">API收费逻辑</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">API收费规则负责人名称</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">API收费规则是否停用</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
        </div>
        <div v-show="5 == pageIndex">
          <Row :gutter="16" class-name="row-spacing">
            <Col>
            <Button type="primary">新增</Button>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing" :style="{textAlign: 'center'}">
            <Col span="3">
            <h3>参数名称</h3></Col>
            <Col span="3">
            <h3>参数值</h3></Col>
            <Col span="3">
            <h3>参数负责人</h3></Col>
            <Col span="3">
            <h3>操作</h3></Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="3">
            <Input/></Col>
            <Col span="3">
            <Input/></Col>
            <Col span="3">
            <Input/></Col>
            <Col span="3">
            <Input/></Col>
          </Row>
        </div>
        <div v-show="6 == pageIndex">
          <finish/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Jump from '../../components/jump.vue';
  import Finish from '../../components/finish.vue';

  import Page0 from './page0.vue';
  import Page1 from './page1.vue';
  import Page2 from './page2.vue';
  import Page3 from './page3.vue';
  import Page4 from './page4.vue';
  import Page5 from './page5.vue';
  import Page6 from './page6.vue';

  // mock 数据
  import jumpItemList from '../../mock/jumpItemList.json';
  import external from '../../mock/external.json'

  export default {
    components: {
      Jump,
      Finish,
      Page0,
      Page1,
      Page2,
      Page3,
      Page4,
      Page5,
      Page6
    },
    data () {
      return {
        locationItems: ['接口管理', '外部接口管理'],
        headerItems: [],
        pageIndex: 0,
        externalList: ['option1', 'option2', 'option3', 'option4'],
        seen: false,
        llaa: '',
        mmseen: true
      }
    },
    methods: {
      changeStep (index) {
        this.pageIndex = index;
        this.seen = false;
        this.mmseen = true;
      },
      add() {
        this.llaa = "";
        this.seen = !this.seen;
      },
      mod() {
        this.mmseen = !this.mmseen;
        this.seen = true;
      },
      del() {
        this.seen = !this.seen;
      },
      refy() {
        this.mmseen = !this.mmseen;
        this.seen = false;
      }
    },
    mounted () {
      this.headerItems = jumpItemList.interface.external;
      this.headerItems.push('Finish');
      this.locationItems.push(this.headerItems[0]);

      this.llaa = external;
    },
    beforeDestroy (){
      this.headerItems.pop();
    }
  }
</script>
