


$( "#payment_option" ).submit(function( event ) {
  //alert( "Handler for .submit() called." );
  event.preventDefault();
  
	// Set your publishable key: remember to change this to your live publishable key in production
	// See your keys here: https://dashboard.stripe.com/account/apikeys
	var stripe = Stripe('pk_test_3wxBZJkBLhPVyGwhLbKczZcV00Da90QrHJ');


	stripe.createSource({
	  type: 'giropay',
	  amount: 1,
	  currency: 'eur',
	  owner: {
		name: 'Eric Tizie',
	  },
	  redirect: {
	   // return_url: 'http:/lvh.me/aser/others/learning/apis/stripe/stripe.html?payment_return_url=giro_',
		 return_url: 'https://cash2mobile.biz/test/test/stripe.php?payment_return_url=giro_',
	  },
	}).then(function(result) {
	  // handle result.error or result.source
	  
	  console.log('sourceObject', result);
	});
  
});


