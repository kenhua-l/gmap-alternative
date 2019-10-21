<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>{{ message }}</p>
    <hr />
    <App1></App1>
    <hr />
    <IfElse></IfElse>
    <hr />
    <Repeated></Repeated>
    <hr />
    <Manipulate></Manipulate>
  </div>
</template>

<script>
import App1 from "./components/App1.vue";
import IfElse from "./components/IfElse.vue";
import Repeated from "./components/Repeated.vue";
import Manipulate from "./components/Manipulate.vue";
export default {
  name: "app",
  components: {
    App1,
    IfElse,
    Repeated,
    Manipulate,
  },
  data: function() {
    return {
      message: "Hi"
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
