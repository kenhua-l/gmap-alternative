<template>
  <h2 v-if="show">{{ message }}</h2>
</template>

<script>
export default {
  name: "IfElse",
  data: function(){
    return {
      message: "Lesson 3: Conditional Component",
      show: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>