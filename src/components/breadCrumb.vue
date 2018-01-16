<template>
  <div class="bread-crumb">
    <Breadcrumb>
      <BreadcrumbItem v-for="(item, index) in breadCrumbItems" :key="index">{{ item }}</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
  export default {
    props: [
      'breadCrumbItems'
    ]
  }
</script>

<style>
  .bread-crumb {
    margin-bottom: 24px;
  }
</style>
