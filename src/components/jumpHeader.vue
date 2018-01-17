<template>
  <ul class="jump-header">
    <li v-for="(item, index) in jumpItems" :key="index"
        :class="{clicked: getClickedIndex >= index, error: errorIndex == index, active: getActiveIndex == index}"
        @click="jumpItemClick(index)">{{ (index + 1) + '.' + item }}
    </li>
  </ul>
</template>

<script>
  export default {
    props: [
      'jumpItems',
      'pageIndex'
    ],
    data () {
      return {
        activeIndex: 0,
        clickedIndex: 0,
        errorIndex: -1
      }
    },
    computed: {
      getActiveIndex () {
        this.activeIndex = this.pageIndex;
        return this.activeIndex;
      },
      getClickedIndex () {
        if (this.pageIndex > this.clickedIndex) {
          this.clickedIndex = this.pageIndex;
        }
        return this.clickedIndex;
      }
    },
    methods: {
      jumpItemClick (index) {
        if (this.clickedIndex >= index) {
          this.activeIndex = index;
          this.$emit('jumpItemClick', index);
        }
      }
    }
  }
</script>

<style>
  .jump-header {
    height: 40px;
    overflow: hidden;
  }

  .jump-header li {
    height: 40px;
    line-height: 40px;
    float: left;
    background: #ccc;
    color: #fff;
    margin-right: 16px;
    padding: 0 12px;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
  }

  .jump-header li.clicked {
    background: #57c5f7;
  }

  .jump-header li.error {
    background: #ed3f14;
  }

  .jump-header li.active {
    background: #2d8cf0;
  }
</style>
