<template>
  <div>
      <Row :gutter="16" class-name="row-spacing">
          <i-col span="6">
                <Select clearable filterable placeholder="请选择API接口，若没有需要的，请新增！"></Select>
          </i-col>
          <i-col span="18">
              <Button type="primary" @click="add()">新增</Button>
              <Button type="primary" @click="mod()">修改</Button>
              <Button type="primary" @click="del()">删除</Button>
          </i-col>
      </Row>
      <Row :gutter="16" class-name="row-spacing">
        <i-col span="4">
            <span class-name="item-title">数据提供商API名称</span>
        </i-col>
        <i-col span="6">
            <Input />
        </i-col>
      </Row>
      <Row :gutter="16" class-name="row-spacing">
        <i-col span="4">
            <span class-name="item-title">数据提供商API URI地址信息</span>
        </i-col>
        <i-col span="6">
            <Input />
        </i-col>
      </Row>
      <Row :gutter="16" class-name="row-spacing">
        <i-col span="4">
            <span class-name="item-title">数据提供商API请求类型名称</span>
        </i-col>
        <i-col span="6">
            <Input />
        </i-col>
      </Row>
      <Row :gutter="16" class-name="row-spacing">
        <i-col span="4">
            <span class-name="item-title">数据提供商API编码</span>
        </i-col>
        <i-col span="6">
            <Input />
        </i-col>
      </Row>
      <Row :gutter="16" class-name="row-spacing">
        <i-col span="4">
            <span class-name="item-title">数据提供商API请求方法名称</span>
        </i-col>
        <i-col span="6">
            <Input />
        </i-col>
      </Row>
      <Row :gutter="16" class-name="row-spacing">
        <i-col span="4">
            <span class-name="item-title">数据提供商API数据类别</span>
        </i-col>
        <i-col span="6">
            <Input />
        </i-col>
      </Row>
      <Row :gutter="16" class-name="row-spacing">
        <i-col span="4">
            <span class-name="item-title">数据提供商API业务类别名称</span>
        </i-col>
        <i-col span="6">
            <Input />
        </i-col>
      </Row>
      <Row :gutter="16" class-name="row-spacing">
        <i-col span="4">
            <span class-name="item-title">数据提供商API描述信息</span>
        </i-col>
        <i-col span="6">
            <Input />
        </i-col>
      </Row>
      <Row :gutter="16" class-name="row-spacing">
        <i-col span="4">
            <span class-name="item-title">数据提供商API更新周期(天)</span>
        </i-col>
        <i-col span="6">
            <Input />
        </i-col>
      </Row>
      <Row :gutter="16" class-name="row-spacing">
        <i-col span="4">
            <span class-name="item-title">数据提供商API是否收费</span>
        </i-col>
        <i-col span="6">
            <Input />
        </i-col>
      </Row>
      <Row :gutter="16" class-name="row-spacing">
        <i-col span="4">
            <span class-name="item-title">数据提供商技术负责人名称</span>
        </i-col>
        <i-col span="6">
            <Input />
        </i-col>
      </Row>
      <!-- <Row :gutter="16" class-name="row-spacing">
        <i-col span="4">
            <span class-name="item-title"></span>
        </i-col>
        <i-col span="6">
            <Input />
        </i-col>
      </Row> -->
  </div>
</template>

<script>
export default {
  
}
</script>

