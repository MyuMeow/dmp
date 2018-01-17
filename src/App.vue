<template>
  <div id="app">
    <Layout>
      <Header :style="{color: '#fff'}">Data Manage Platform Data Manage Platform Data Manage Platform Data Manage
        Platform Data Manage Platform Data Manage Platform Data Manage Platform
      </Header>
      <Layout>
        <Sider>
          <Layout :style="{height: '100%', overflow: 'hidden'}">
            <Layout :style="{width: '220px', height: '100%', overflow: 'auto', background: '#495060'}">
              <menu-list :activeMenuName="activeMenuName"/>
            </Layout>
          </Layout>
        </Sider>
        <Content :style="{padding: '24px', background: '#fff', display: 'flex'}">
          <router-view style="flex: 1; display: flex; position: relative;"/>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import MenuList from './components/menuList';
  export default {
    name: 'app',
    components: {
      MenuList
    },
    data () {
      return {
        activeMenuName: 'external'
      }
    }
  }
</script>

<style>
  #app {
    display: flex;
    height: 100%;
  }
</style>
