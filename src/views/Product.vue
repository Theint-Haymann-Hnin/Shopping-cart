<template>
  <div>
    <div class="row mt-5 clearfix" v-if="product">
      <div class="col-4">
        <img
          :src="product.image"
          alt=""
          style="width: 300px; height: 400px; float: right"
        />
      </div>
      <div class="col-8">
        <div class="card">
          <h5 class="card-header pt-3 pb-3" style="background-color: #e3f2fd">
            {{ product.title }}
          </h5>
          <div class="card-body">
            <h5 class="card-title">{{ product.price }}</h5>
            <input type="text" class="text-center col-1 mr-1" />
            <button class="brn btn-dark" @click="addToCart()">
              Add to cart
            </button>
            <p class="card-text">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductView",
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
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


<style scoped>
.card-text {
  text-align: left;
  text-align: justify;
  margin-top: 10px;
}

</style>
