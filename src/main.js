import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "popper.js";
import "./assets/app.scss";
import { fb } from "./firebase";
import VueFirestore from "vue-firestore";
import VueCarousel from "vue-carousel";
import Vue2Filters from "vue2-filters";
import Swal from "sweetalert2";

Vue.use(Vue2Filters);
Vue.use(VueCarousel);
Vue.use(VueFirestore, {
  key: "id",
  enumerable: true
});

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000
});
window.Toast = Toast;

Vue.use(VueFirestore);

Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("add-to-cart", require("./components/AddToCart.vue").default);
Vue.component("products-list", require("./sections/ProductList.vue").default);

Vue.config.productionTip = false;

let app = "";

fb.auth().onAuthStateChanged(function(user) {
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
