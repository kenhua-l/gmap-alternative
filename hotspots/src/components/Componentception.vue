<template>
  <div>
    <h2>{{ msg }}</h2>
    <div class="row" id="newsitem">
      <NewsItem></NewsItem>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
Vue.component("NewsItem", {
  template: "<div><span>{{item.date}}</span><span>{{item.detail}}</span></div>",
})
var NewsItem = Vue({
  el: "#newsitem",
})
export default {
  name: "Componentception",
  components: {
    NewsItem
  },
  props: {
    msg: String
  },
  data: function() {
    return {
      news: [
          {"date": "10 sept", "detail": "this is news 1"},
          {"date": "11 sept", "detail": "this is news 2"}
        ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
