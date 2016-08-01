
$(document).ready(function() {

  //visual effects for input fields
    $('.action').on('focus', function(){
		$(this).removeClass('filled');
    });
	$('.action').on('blur', function(){
	    if(!this.value.trim()){
			$(this).removeClass('filled');
		}
		else{
		    $(this).addClass('filled');
		}
    });
	$('#submit').on('click', function(e){
		var password = $('.main_form').find('[data-field="password"]');
		var match = $('.main_form').find('[data-field="password-match"]');
		var first = $('.main_form').find('[data-field="first-name"]');
		var last = $('.main_form').find('[data-field="last-name"]');
		var email = $('.main_form').find('[data-field="email"]');
		var valEmail = email.val().trim();
		var valFirst = first.val().trim();
		var valLast = last.val().trim();
		var valMatch = match.val().trim();
		var valPassword = password.val().trim();
		var validFirst = validateFirst(valFirst);
		var validLast = validateLast(valLast);
		var validPassword = validatePassword(valPassword);
		var validMatch = validateMatch(valMatch);
		var validEmail = validateEmail(valEmail);

		if(!validEmail || !validPassword || !validMatch || !validFirst || !validLast){
		    e.preventDefault();
		  emailErrorBlock = email.parent().find('.help-block');
			passwordErrorBlock = password.parent().find('.help-block');
			matchErrorBlock = match.parent().find('.help-block');
			firstErrorBlock = first.parent().find('.help-block');
			lastErrorBlock = last.parent().find('.help-block');

			if(!validEmail){
			    if(valEmail){
				    error = email.data('wrong-value');
				}
				else{
				    error = email.data('empty-value');
				}
			    emailErrorBlock.html(error);
				email.addClass('inputError');
			}
			else{
		        emailErrorBlock.html('');
				email.addClass('inputError');
		    }
			if(!validPassword){
			    if(valPassword){
				    error = password.data('wrong-value');
					}
					else{
				    error = password.data('empty-value');
					}
			    passwordErrorBlock.html(error);
				password.addClass('inputError');
				}
			else{
		        passwordErrorBlock.html('');
				password.addClass('inputError');
		    }
		    if(!validMatch){
			    if(valMatch){
				    error = match.data('wrong-value');
				}
				else{
				    error = match.data('empty-value');
				}
			    matchErrorBlock.html(error);
				match.addClass('inputError');
			}
			else{
		        matchErrorBlock.html('');
				match.addClass('inputError');
		    }
		    if(!validFirst){
			    if(valFirst){
				    error = first.data('wrong-value');
				}
				else{
				    error = first.data('empty-value');
				}
			    firstErrorBlock.html(error);
				first.addClass('inputError');
			}
			else{
		        firstErrorBlock.html('');
				first.addClass('inputError');
		    }
		    if(!validLast){
			    if(valLast){
				    error = last.data('wrong-value');
				}
				else{
				    error = last.data('empty-value');
				}
			    lastErrorBlock.html(error);
				last.addClass('inputError');
			}
			else{
		        lastErrorBlock.html('');
				last.addClass('inputError');
		    }
		  }
		else{
		    passwordErrorBlock.html('');
		    matchErrorBlock.html('');
				password.removeClass('inputError');
				match.removeClass('inputError');
				firstErrorBlock.html('');
		    lastErrorBlock.html('');
				first.removeClass('inputError');
				last.removeClass('inputError');
				emailErrorBlock.html('');
				email.removeClass('inputError');
		}
		if(valMatch != valPassword) {
					notmatchErrorBlock = match.parent().find('.help-block');
					error1 = match.data('wrong-match');
					notmatchErrorBlock.html(error1);
					match.addClass('inputError');
			}
			else{
		       notmatchErrorBlock.html('');
					match.removeClass('inputError');
				}
	});
 	$('#submit_login').on('click', function(e){
		var password = $('#login-form').find('[data-field="password"]');
		var email = $('#login-form').find('[data-field="email"]');
		var valEmail = email.val().trim();
		var valPassword = password.val().trim();
		var validPassword = validatePassword(valPassword);
		var validEmail = validateEmail(valEmail);

		if(!validEmail || !validPassword){
		    e.preventDefault();
		  emailErrorBlock = email.parent().find('.help-block');
			passwordErrorBlock = password.parent().find('.help-block');

			if(!validEmail){
			    if(valEmail){
				    error = email.data('wrong-value');
				}
				else{
				    error = email.data('empty-value');
				}
			    emailErrorBlock.html(error);
				email.addClass('inputError');
			}
			else{
		        emailErrorBlock.html('');
				email.addClass('inputError');
		    }
			if(!validPassword){
			    if(valPassword){
				    error = password.data('wrong-value');
					}
					else{
				    error = password.data('empty-value');
					}
			    passwordErrorBlock.html(error);
				password.addClass('inputError');
				}
			else{
		        passwordErrorBlock.html('');
				password.addClass('inputError');
		    }
		  }
		else{
		    passwordErrorBlock.html('');
				password.removeClass('inputError');
				emailErrorBlock.html('');
				email.removeClass('inputError');
		}
	});
		function validatePassword(password){
        var re = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
		return re.test(password);
    }
    function validateMatch(match){
        var rd = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
		return rd.test(match);
    }
      function validateFirst(first){
        var re = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
		return re.test(first);
    }
  function validateLast(last){
        var re = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
		return re.test(last);
    }
  function validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
});
    

 