<template>
  <div id="app">
    <Layout>
      <Header></Header>
      <Layout>
        <Sider>
          <Layout :style="{height: '100%', overflow: 'hidden'}">
            <Layout :style="{width: '220px', height: '100%', overflow: 'auto', background: '#495060'}"><menu-list/></Layout>
          </Layout>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <bread-crumb/>
          <Content :style="{marginTop: '24px', padding: '24px', background: '#fff', display: 'flex'}"><router-view/></Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import MenuList from './components/menulist';
  import BreadCrumb from './components/breadcrumb';
  export default {
    name: 'app',
    components: {
      MenuList,
      BreadCrumb
    }
  }
</script>

<style>
  #app {
    display: flex;
    height: 100%;
  }
</style>
