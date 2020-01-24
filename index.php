<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  
  <style>
	/*
	*
	* ==========================================
	* FOR DEMO PURPOSES
	* ==========================================
	*
	*/

	body {
	  background: #f5f5f5;
	}

	.rounded-lg {
	  border-radius: 1rem;
	}

	.nav-pills .nav-link {
	  color: #555;
	}

	.nav-pills .nav-link.active {
	  color: #fff;
	}
  </style>
</head>
<body>

<div class="container">
  <h3>Inline List</h3>
  
	<!-- Centered Pills -->
	<ul class="nav nav-pills nav-justified">
	  <li class="active"><a data-toggle="tab" href="#creditcardid">Credit Card</a></li>
	  <li><a data-toggle="tab" href="#bankid">Bank</a></li>
	</ul>
	
	
	<div class="tab-content">
	  <div id="creditcardid" class="tab-pane fade in active">
		<h3>Pay with a Credit Card</h3>
		<form role="form">
              <div class="form-group">
                <label for="username">Full name (on the card)</label>
                <input type="text" name="username" placeholder="Jason Doe" required class="form-control">
              </div>
              <div class="form-group">
                <label for="cardNumber">Card number</label>
                <div class="input-group">
                  <input type="text" name="cardNumber" placeholder="Your card number" class="form-control" required>
                  <div class="input-group-append">
                    <span class="input-group-text text-muted">
						<i class="fa fa-cc-visa mx-1"></i>
						<i class="fa fa-cc-amex mx-1"></i>
						<i class="fa fa-cc-mastercard mx-1"></i>
					</span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label><span class="hidden-xs">Expiration</span></label>
                    <div class="input-group">
                      <input type="number" placeholder="MM" name="" class="form-control" required>
                      <input type="number" placeholder="YY" name="" class="form-control" required>
                    </div>
                  </div>
                </div>
                <div class="col-sm-2">
                  <div class="form-group mb-4">
                    <label data-toggle="tooltip" title="Three-digits code on the back of your card">CVV
						<i class="fa fa-question-circle"></i>
					</label>
                    <input type="text" required class="form-control">
                  </div>
                </div>

              </div>
              <button type="button" class="subscribe btn btn-primary btn-block rounded-pill shadow-sm"> Confirm  </button>
            </form>
	  </div>
	  <div id="bankid" class="tab-pane fade">
		<h3>Pay With Bank Account</h3>
		<p>Some content in menu 1.</p>
	  </div>
	</div>
	
</div>



	

	<script>
		$(function() {
		  $('[data-toggle="tooltip"]').tooltip()
		})
	</script>
  </body>
</html>
<?php
