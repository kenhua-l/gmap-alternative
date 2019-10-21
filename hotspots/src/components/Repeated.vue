<template>
  <div>
    <h2>{{ message }}</h2>
    <ol>
      <li v-for="line in lines" v-bind:key="line">{{ line }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Repeated",
  data: function(){
    return {
      message: "Lesson 4: Looping in Vue",
      lines: ["hello", "world", "goodbye"]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ol {
  padding: 0;
  width: 25%;
  margin: auto;
}
li {
  margin: 0 10px;
  text-align: left;
}
</style>
