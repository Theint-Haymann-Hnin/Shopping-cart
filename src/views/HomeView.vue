<template>
  <!-- <div style="background-color: #EC7063;  background-image: linear-gradient(to right, red, #EC7063, red, #EC7063, red, #EC7063, red);"> -->
  <div>
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";

export default {
  name: "HomeView",
  components: {
    ProductList,
  },
};
</script>
