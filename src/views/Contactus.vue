<template>
  <div class="bg">
    <div class="row">
      <div class="col-md-6">
        <p class="ttl">
          Have Us Contact You By Filling <br />
          And Submitting The Form
        </p>
        <p class="text">
          You are just a few steps away from a personalized offer. Just fill in
          the form and send it to us and we'll get right back with a call to
          help you.
        </p>
        <ul class="list">
          <b><li>It's very easy just fill in the form so we can send</li></b>
          <b><li>To send meaasage , we'll require some info</li></b>
          <b
            ><li>
              Don't hesitate to email us for any questions or inquiries
            </li></b
          >
        </ul>
      </div>
      <div class="col-md-6 mt-5">
        <form action="" style="width: 700px">
          <div class="form-group mt-3 mr-5">
            <p style="text-align: left" class="text-dark"><b>Name</b></p>
            <input
              type="text"
              class="form-control"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          <div class="form-group mt-3 mr-5">
            <p style="text-align: left" class="text-dark"><b>Email</b></p>
            <input
              type="text"
              class="form-control"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div class="form-group mt-3 mr-5">
            <p style="text-align: left" class="text-dark"><b>Message</b></p>
            <textarea
              name="meaasge"
              class="form-control"
              id="meaasge"
              rows="3"
              placeholder="Your Meaasge"
            ></textarea>
          </div>

          <div class="form-group checkbox white mt-5">
            <input
              type="checkbox"
              id="lterms"
              value="Agreed-to-Terms"
              name="lterms"
              required
            /><i class="text-dark"
              ><b> I agree Privacy Policy and Terms & Conditions </b></i
            >
          </div>

          <div class="form-group mt-5">
            <button class="btn btn-success">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactUs",
  components: {},
};
</script>
<style scoped>
.bg {
  background: url("https://thumbs.dreamstime.com/b/concept-online-shopping-sales-valentine-s-day-mobile-phone-woman-hand-white-sweater-red-background-clo-close-up-204189041.jpg")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  height: 800px;
  overflow: hidden;
}
.ttl {
  font-size: 35px;
  text-align: left;
  margin-top: 20px;
  margin-left: 45px;
}
.text {
  font-size: 25px;
  text-align: left;
}
.list {
  text-align: left;
  margin-top: 20px;
}
</style>
