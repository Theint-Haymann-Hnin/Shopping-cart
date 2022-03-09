<template>
    <div
    class="dropdown-menu p-2"
    style="
      min-width: 320px;
      right: 0;
      left: auto;
      background-image: linear-gradient(rgb(154, 205, 50), #ec7063);
    "
    aria-labelledby="dropdownMenuLink"
    @click="$event.stopPropagation()"
  >
    <div>
      <div
        class="cart d-flex justify-content-between"
        v-for="item in cart"
        :key="item.product.id"
      >
        <div>
          <strong>{{ item.product.title }}</strong> <br />{{ item.quantity }} x
          ${{ item.product.price }}
          <a
            href="#"
            class="remove-btn badge"
            @click.prevent="removeProductFromCart(item.product)"
            style="background-image: linear-gradient(red, #ec7063)"
            >remove</a
          >
        </div>
      </div>
    </div>
    <hr />
    <div class="clear-cart d-flex justify-content-between">
      <span>Total: ${{ cartTotalPrice }}</span>
      <a
        href="#"
        class="clear-cart badge"
        @click.prevent="clearCartItems()"
        style="background-image: linear-gradient(red, #ec7063)"
        >Clear Cart</a
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  mounted() {
    this.$store.dispatch("getCartItems");
  },
  methods: {
    removeProductFromCart(product) {
      this.$store.dispatch("removeProductFromCart", product);
    },
    clearCartItems() {
      this.$store.dispatch("clearCartItems");
    },
  },
};
</script>

<style>
.cart {
  padding: 2px;
}
.remove-btn {
  margin-left: 20px;
  text-decoration: none;
}
.remove-btn:hover {
  color: black;
  text-decoration: none;
}
.clear-cart {
  text-decoration: none;
}
.clear-cart :hover {
  text-decoration: none;
  color: black;
}
</style>