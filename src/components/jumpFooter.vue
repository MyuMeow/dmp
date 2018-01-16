<template>
  <ul class="jump-footer">
    <li :class="{disabled: !isFinish}" @click="finishClick">Finish</li>
    <li @click="cancelClick">Cancel</li>
    <li :class="{disabled: isLastPage}" @click="nextClick">Next</li>
    <li :class="{disabled: isFirstPage}" @click="preClick">Previous</li>
  </ul>
</template>

<script>
  export default {
    props: [
      'pageNum',
      'pageIndex'
    ],
    data () {
      return {
        isFinish: false,
        goalIndex: 0
      }
    },
    computed: {
      isFirstPage () {
        return !this.pageIndex; // 0-->true   not 0-->false
      },
      isLastPage () {
        if (this.pageIndex == this.pageNum - 1) {
          this.isFinish = true;
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      preClick () {
        if (!this.isFirstPage) {
          this.goalIndex = this.pageIndex - 1;
          this.$emit('jumpFooterClick', this.goalIndex);
        }
      },
      nextClick () {
        if (!this.isLastPage) {
          this.goalIndex = this.pageIndex + 1;
          this.$emit('jumpFooterClick', this.goalIndex);
        }
      },
      finishClick () {
        if (this.isFinish) {
          console.log('finishClick');
        }
      },
      cancelClick () {
//        window.location.reload();
      }
    }
  }
</script>

<style>
  .jump-footer {
    height: 64px;
    padding-right: 24px;
    background: #f5f7f9;
    overflow: hidden;
  }

  .jump-footer li {
    height: 40px;
    line-height: 40px;
    float: right;
    margin-left: 12px;
    padding: 0 24px;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    color: #fff;
    background: #2d8cf0;
  }

  .jump-footer li.disabled {
    color: #000;
    background: #ccc;
  }
</style>
