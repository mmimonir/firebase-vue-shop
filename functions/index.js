const functions = require('firebase-functions')
const stripe = require('stripe')('sk_test_5NqgCuWfKcql8AcGr7TO3PlU003MZPGO6u')
const cors = require('cors')({ origin: true })
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!')
})
exports.CheckoutSession = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    stripe.checkout.sessions.create(
      {
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
        payment_method_types: ['card'],
        line_items: [
          {
            name: 'T-shirt',
            description: 'Comfortable cotton t-shirt',
            amount: 1500,
            currency: 'usd',
            quantity: 2
          }
        ]
      },
      function(err, session) {
        response.send(session)
      }
    )
  })
})
