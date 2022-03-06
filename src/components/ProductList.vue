<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <product-cart
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></product-cart>
  </div>
</template>

<script>
import ProductCart from "@/components/ProductCart.vue";
export default {
  name: "ProductList",
  components: {
    ProductCart,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style>
</style>