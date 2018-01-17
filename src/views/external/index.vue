<template>
  <div class="external">
    <jump :breadCrumbItems="locationItems" :jumpItems="headerItems" @changeStep="changeStep"/>
    <div class="ins-layer">
      <div class="ins-box">
        <div v-show="0 == pageIndex">
          <Row :gutter="16" class-name="row-spacing">
            <Col span="6">
            <Select clearable filterable placeholder="请选择供应商信息，若没有需要的，请新增！">
              <Option v-for="item in externalList" :value="item" :key="item">{{ item }}</Option>
            </Select>
            </Col>
            <Col span="18">
            <Button type="primary">新增</Button>
            <Button type="primary">修改</Button>
            <Button type="primary">删除</Button>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">数据提供商名称</span>
            </Col>
            <Col span="6">
            <Input placeholder="(ﾟ∀ﾟ　)"/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">数据提供商URL地址</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">数据提供商用户名</span>
            </Col>
            <Col :gutter="16" span="6">
            <Input/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">数据提供商密码</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">数据提供商证书附件</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">数据提供商业务负责人名称</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">数据提供商的技术负责人名称</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
        </div>
        <div v-show="1 == pageIndex">
          <Row :gutter="16" class-name="row-spacing">
            <Col span="6">
            <Select placeholder="请选择API接口，若没有需要的，请新增！"></Select>
            </Col>
            <Col span="18">
            <Button type="primary">新增</Button>
            <Button type="primary">修改</Button>
            <Button type="primary">删除</Button>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">数据提供商API名称</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">数据提供商API URI地址信息</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">数据提供商API请求类型名称</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">数据提供商API编码</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">数据提供商API请求方法名称</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">数据提供商API数据类别</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">数据提供商API业务类别名称</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">数据提供商API描述信息</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">数据提供商API更新周期(天)</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">数据提供商API是否收费</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
          <Row :gutter="16" class-name="row-spacing">
            <Col span="4">
            <span class="item-title">数据提供商技术负责人名称</span>
            </Col>
            <Col span="6">
            <Input/>
            </Col>
          </Row>
        </div>
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

  // mock 数据
  import jumpItemList from '../../mock/jumpItemList.json';

  export default {
    components: {
      Jump,
      Finish
    },
    data () {
      return {
        locationItems: ['接口管理', '外部接口管理'],
        headerItems: [],
        pageIndex: 0,
        externalList: ['option1', 'option2', 'option3', 'option4']
      }
    },
    methods: {
      changeStep (index) {
        this.pageIndex = index;
      }
    },
    mounted () {
      this.headerItems = jumpItemList.interface.external;
      this.headerItems.push('Finish');
      this.locationItems.push(this.headerItems[0]);
    },
    beforeDestroy (){
      this.headerItems.pop();
    }
  }
</script>
