<template>
  <div>
    <header class="masthead text-center text-white">
      <div class="masthead-content">
        <div class="container px-5">
          <h1 class="masthead-heading mb-0">FASHION TRENDS</h1>
          <h2 class="masthead-subheading mb-0">Buy & Sell Near You</h2>
          <router-link to="/about" class="nav-link">
            <a class="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll"
              >About Us</a
            ></router-link
          >
        </div>
      </div>
      <div class="bg-circle-1 bg-circle"></div>
      <div class="bg-circle-2 bg-circle"></div>
      <div class="bg-circle-3 bg-circle"></div>
      <div class="bg-circle-4 bg-circle"></div>
    </header>
  </div>
</template>

<script>
export default {
  name: "BannerView",
};
</script>

<style>
header.masthead {
  position: relative;
  overflow: hidden;
  padding-top: calc(7rem + 72px);
  padding-bottom: 7rem;
  background: linear-gradient(0deg, #ff6a00 0%, #ee0979 100%);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: scroll;
  background-size: cover;
}
header.masthead .masthead-content {
  z-index: 1;
  position: relative;
}
header.masthead .masthead-content .masthead-heading {
  font-size: 4rem;
}
header.masthead .masthead-content .masthead-subheading {
  font-size: 2rem;
}
header.masthead .bg-circle {
  z-index: 0;
  position: absolute;
  border-radius: 100%;
  background: linear-gradient(0deg, #ee0979 0%, #ff6a00 100%);
}
header.masthead .bg-circle-1 {
  height: 90rem;
  width: 90rem;
  bottom: -55rem;
  left: -55rem;
}
header.masthead .bg-circle-2 {
  height: 50rem;
  width: 50rem;
  top: -25rem;
  right: -25rem;
}
header.masthead .bg-circle-3 {
  height: 20rem;
  width: 20rem;
  bottom: -10rem;
  right: 5%;
}
header.masthead .bg-circle-4 {
  height: 30rem;
  width: 30rem;
  top: -5rem;
  right: 35%;
}
header.masthead .masthead-content {
  z-index: 1;
  position: relative;
}
header.masthead .masthead-content .masthead-heading {
  font-size: 4rem;
  font-family: "Raleway", sans-serif;
}
header.masthead .masthead-content .masthead-subheading {
  font-size: 2rem;
}
header.masthead .bg-circle {
  z-index: 0;
  position: absolute;
  border-radius: 100%;
  background: linear-gradient(0deg, #ee0979 0%, #ff6a00 100%);
}
header.masthead .bg-circle-1 {
  height: 90rem;
  width: 90rem;
  bottom: -55rem;
  left: -55rem;
}
header.masthead .bg-circle-2 {
  height: 50rem;
  width: 50rem;
  top: -25rem;
  right: -25rem;
}
header.masthead .bg-circle-3 {
  height: 20rem;
  width: 20rem;
  bottom: -10rem;
  right: 5%;
}
header.masthead .bg-circle-4 {
  height: 30rem;
  width: 30rem;
  top: -5rem;
  right: 35%;
}
.container,
.container-fluid,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}
</style>