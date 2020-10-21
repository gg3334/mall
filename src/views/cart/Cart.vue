<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物车({{ length }})</div>
      </template>
    </nav-bar>
    <cart-list />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
  },
  computed: {
    ...mapGetters({
      length: "cartLength",
    }),
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>