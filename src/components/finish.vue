<template>
  <div class="finish">
    <Checkbox v-model="confirm"></Checkbox>
    <b>I agree with the Terms and Conditions.</b>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        confirm: false
      }
    }
  }
</script>
