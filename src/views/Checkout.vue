<template>
  <div class="checkout">
    <Navbar></Navbar>
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-md-8">
          <h4 class="py-4">Checkout Page</h4>
          <ul>
            <li v-for="item in this.$store.state.cart" class="media">
              <img
                :src="item.productImage"
                width="80px"
                class="align-self-center mr-3"
                alt
              />
              <div class="media-body">
                <h5 class="mt-0">
                  {{ item.productName }}
                  <span
                    class="float-right"
                    @click="$store.commit('removeFromCart', item)"
                    >X</span
                  >
                </h5>
                <p class="mt-0">
                  {{ (item.productPrice * item.productQuantity) | currency }}
                </p>
                <p class="mt-0">Quantity : {{ item.productQuantity }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <p>Total Price: {{ this.$store.getters.totalPrice | currency }}</p>
          <button class="btn btn-primary">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const axios = require('axios')
// const Stripe = require('stripe')
// const stripe = Stripe('pk_test_thZJJ02orx3RMhXu4dlXzVr400WZM3Dvrm')
export default {
  data() {
    return {
      sessionId: ''
    }
  },
  methods: {
    // pay() {
    //   stripe
    //     .redirectToCheckout({
    //       // Make the id field from the Checkout Session creation API response
    //       // available to this file, so you can provide it as parameter here
    //       // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
    //       sessionId: this.sessionId
    //     })
    //     .then(function(result) {
    //       // If `redirectToCheckout` fails due to a browser or network
    //       // error, display the localized error message to your customer
    //       // using `result.error.message`.
    //     })
    // }
    // created() {
    //   axios
    //     .post(
    //       'https://us-central1-vue-shop-e76c2.cloudfunctions.net/CheckoutSession'
    //     )
    //     .then((response) => {
    //       this.sessionId = response.data
    //       console.log(response.data)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // }
  }
}
</script>
<style>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;
  height: 40px;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}
.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}
.StripeElement--invalid {
  border-color: #fa755a;
}
.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>
