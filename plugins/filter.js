import Vue from "vue";


Vue.filter('arabic', function (str) {
  return str.toLocaleString("ar-EG");
})
