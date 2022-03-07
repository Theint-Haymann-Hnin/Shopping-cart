<template>
  <div>
    <!-- <nav class="navbar navbar-expand-lg navbar-light" id="navigation" v-on:scroll="scrollFunction"> -->
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contactus" class="nav-link"
                >Contact us</router-link
              >
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <span class="your-cart">Your Cart</span>
          <a
            class="btn btn-outline-dark dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-shopping-cart"></i> {{ cartItemCount }} Cart
          </a>
          <mini-cart></mini-cart>
        </div>
      </div>
    </nav>
    <banner></banner>
  </div>
</template>

<script>
import MiniCart from "@/components/MiniCart.vue";
import Banner from "@/components/Banner.vue";

export default {
  name: "AppHeader",
  components: {
    MiniCart,
    Banner,
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
  mounted() {
    // const nav = document.querySelector("#navigation");
    // const navTop = nav.offsetTop;
    // function stickyNavigation() {
    //   console.log("navTop = " + navTop);
    //   console.log("scrollY = " + window.scrollY);
    //   if (window.scrollY >= navTop) {
    //     document.body.style.paddingTop = nav.offsetHeight + "px";
    //     document.body.classList.add("fixed-nav");
    //   } else {
    //     document.body.style.paddingTop = 0;
    //     document.body.classList.remove("fixed-nav");
    //   }
    // }
    // window.addEventListener("scroll", stickyNavigation);
  },
};
</script>


<style>
nav {
  width: 100%;
  background-image: linear-gradient(red, #ec7063);
}

.fixed-nav nav {
  position: fixed;
  top: 0;
  z-index: 1;
}
.dropdown {
  float: right;
}
.your-cart {
  font-size: 15px;
  margin-right: 15px;
}
.nav-link {
  font-family: "The Nautigal", cursive;
  font-size: 30px;
  margin-left: 20px;
}
</style>