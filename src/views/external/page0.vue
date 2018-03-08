<template>
  <div>
      <Row :gutter="16" class-name="row-spacing">
          <i-col span="6">
                <Select clearable filterable placeholder="请选择供应商信息，若没有需要的，请新增！">
                    <Option v-for="item in externalList" :value="item" :key="item">{{ item }}</Option>
                </Select>
          </i-col>
          <i-col span="18">
              <Button type="primary" @click="add()">新增</Button>
              <Button type="primary" @click="mod()">修改</Button>
              <Button type="primary" @click="del()">删除</Button>
          </i-col>
      </Row>
      <Row :gutter="16" class-name="row-spacing">
          <i-col span="4">
              <span class="item-title">数据提供商名称</span>
          </i-col>
          <i-col span="6">
              <Input />
          </i-col>
      </Row>
      <Row :gutter="16" class-name="row-spacing">
          <i-col span="4">
              <span class="item-title">数据提供商URL地址</span>
          </i-col>
          <i-col span="6">
              <Input />
          </i-col>
      </Row>
      <Row :gutter="16" class-name="row-spacing">
          <i-col span="4">
              <span class="item-title">数据提供商用户名</span>
          </i-col>
          <i-col span="6">
              <Input />
          </i-col>
      </Row>
      <Row :gutter="16" class-name="row-spacing">
          <i-col span="4">
              <span class="item-title">数据提供商密码</span>
          </i-col>
          <i-col span="6">
              <Input />
          </i-col>
      </Row>
      <Row :gutter="16" class-name="row-spacing">
          <i-col span="4">
              <span class="item-title">数据提供商证书附件</span>
          </i-col>
          <i-col span="6">
              <Input />
          </i-col>
      </Row>
      <Row :gutter="16" class-name="row-spacing">
          <i-col span="4">
              <span class="item-title">数据提供商业务负责人名称</span>
          </i-col>
          <i-col span="6">
              <Input />
          </i-col>
      </Row>
      <Row :gutter="16" class-name="row-spacing">
          <i-col span="4">
              <span class="item-title">数据提供商的技术负责人名称</span>
          </i-col>
          <i-col span="6">
              <Input />
          </i-col>
      </Row>
  </div>
</template>

<script>
export default {
    data () {
        return {
            page0Table: {
                name: '',
                url: '',
                comName: '',
                comPwd: '',
                paper: '',
                busPeo: '',
                peo: ''
            }
        }
    },
    methods: {
        add () {},
        mod () {},
        del () {}
    }
}
</script>
