$(function(){ 
	$('#user_input').keyup(function(){    
		$('#hello').text('Hello ' + $('#user_input').val()) 
	})
})