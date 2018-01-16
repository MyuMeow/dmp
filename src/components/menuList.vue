<template>
  <div class="menu-list">
    <Menu theme="dark" width="auto" :active-name="activeMenuName">
      <MenuGroup title="接口管理">
        <router-link to="/external">
          <MenuItem name="external">
            <Icon type="ios-navigate"></Icon>外部接口管理
          </MenuItem>
        </router-link>
        <router-link to="/internal">
          <MenuItem name="internal">
            <Icon type="ios-navigate"></Icon>内部接口管理
          </MenuItem>
        </router-link>
        <router-link to="/system">
          <MenuItem name="system">
            <Icon type="ios-navigate"></Icon>系统接口管理
          </MenuItem>
        </router-link>
        <router-link to="/elasticSearch">
          <MenuItem name="elasticSearch">
            <Icon type="ios-navigate"></Icon>ES集群管理
          </MenuItem>
        </router-link>
        <router-link to="/business">
          <MenuItem name="business">
            <Icon type="ios-navigate"></Icon>业务接口管理
          </MenuItem>
        </router-link>
      </MenuGroup>
      <MenuGroup title="数据同步管理">
        <router-link to="/dataSync">
          <MenuItem name="dataSync">
            <Icon type="ios-navigate"></Icon>数据同步管理
          </MenuItem>
        </router-link>
      </MenuGroup>
    </Menu>
  </div>
</template>

<script>
  export default {
    props: [
      'activeMenuName'
    ]
  }
</script>

<style>
</style>
