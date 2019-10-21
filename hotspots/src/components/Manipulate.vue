<template>
  <div>
    <h2>{{ message }}</h2>
    <h3>{{ manipulatedMessage }}</h3>
    <h2 v-on:click="messageMethod">Click this</h2>
  </div>
</template>

<script>
export default {
  name: "Manipulate",
  data: function() {
    return {
      message: "Lesson 5: Adding Methods in Vue",
      manipulatedMessage: "This is the message on load"
    };
  },
  methods: {
    messageMethod: function() {
      if(this.manipulatedMessage == "After click, the message changed") {
        this.manipulatedMessage = "This is the message on load";
      } else {
        this.manipulatedMessage = "After click, the message changed";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
