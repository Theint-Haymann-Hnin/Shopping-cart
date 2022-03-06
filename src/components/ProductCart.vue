<template>
  <div class="card col-md-2">
    <img :src="product.image" class="card-img" alt="" />
    <div class="card-body text-left">
      <p class="card-title">
        <router-link :to="{ name: 'Product', params: { id: product.id } }">{{
          product.title
        }}</router-link>
      </p>
      <p>{{ product.price }}</p>
      <p class="description">
        {{ product.description }}
      </p>
      <a
        href="#"
        class="atc-btn btn btn-primary text-dark"
        style="background-image: linear-gradient(red, #ec7063)"
        @click.prevent="addToCart()"
        >Add to Cart</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style>
.card {
  margin: 25px 15px 0px 35px;
}
.card-title {
  white-space: nowrap;
  overflow: hidden;
}
.description {
  text-align: left;
  text-align: justify;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-img {
  width: 250px;
  height: 350px;
  padding: 50px;
  transition: transform 0.2s;
}
.card-img:hover {
  -ms-transform: scale(1.5);
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}
</style>