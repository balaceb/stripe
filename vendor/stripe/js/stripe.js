


$(document).ready(function(){
	
	
	
	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = window.location.search.substring(1),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
			}
		}
	};

	// Get amount to charge
	var amount = getUrlParameter('amount');
	
	$('#amount').val(amount);
		

	$( "#payment_option" ).submit(function( event ) {
  
		event.preventDefault();
		
		
		var amount = $('#amount').val();
		var customer_name = $('#name').val();
		var customer_email = $('#email').val();
		
		// Get the selected payment-method
		var paymentOptionValue = $("input[name='payment-method']:checked").val();
		
		if(paymentOptionValue){
			
			var currency = 'usd';
			
			
			switch(paymentOptionValue)
					{
						case 'visa':
						
						break;
						
						case 'master':
						
						break;
						
						case 'diner':
						
						break;
						
						case 'amex':
						
						break;
						
						case 'giropay':
						currency = 'eur';
						break;
						
						case 'multibanco':
						// Note, currency must always be 'eur' for multibanco
						currency = 'eur';
						
						break;
						
						case 'sofort':
						currency = 'eur';
						break;
						
						case 'ideal':
						currency = 'eur';
						break;
						
						case 'eps':
						currency = 'eur';
						break;
						
						
						
						
						
						
						
					}
			
			// Set your publishable key: remember to change this to your live publishable key in production
			// See your keys here: https://dashboard.stripe.com/account/apikeys
			//var stripe = Stripe('pk_test_3wxBZJkBLhPVyGwhLbKczZcV00Da90QrHJ');
			var stripe = Stripe('pk_live_B1MVriNxbfFhr4oJn7bVexHs00pFbDVtG9');

			stripe.createSource({
				type: paymentOptionValue /* e.g. 'giropay' */,
				amount: parseInt(amount),
				currency: currency,
				owner: {
					name: customer_name,
					email: customer_email
				},
				redirect: {
					// return_url: 'http:/lvh.me/aser/others/learning/apis/stripe/stripe.html?payment_return_url=giro_',
					 return_url: 'https://cash2mobile.biz/test/test/stripe.php?payment_return_url=giro_',
				},
			}).then(function(result) {
				// handle result.error or result.source
				
				if(undefined !== result.source)
				{
					
				
						
					
					window.location.replace(result.source.redirect.url);
						
						
					  
					 
				}
				else
				{
					// error
					alert( "Payment Gateway Error! Contact Admin" );
				}
				  
				  
				console.log('sourceObject', result);

			  
			});
		}
		else
		{
			
		}
		
		
		
	});
	
});
	




