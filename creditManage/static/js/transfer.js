$(document).ready(function(){

	$('#trn1').click(function(){
		$.ajax({
			url:'/detail/',
			type:'POST',
			data:{'id':1},
			success:function(response)
			{
				if(response=='success')
				{
					window.location.href='/transfer_to/'
				}
				if(response=='error')
				{
					window.alert("Hello")
					window.location.href='/'
				}
			},
			error:function(xhr,textStatus,thrownError)
			{
				window.location.href='/'
			}
		});
	});
	$('#trn2').click(function(){
		$.ajax({
			url:'/detail/',
			type:'POST',
			data:{'id':2},
			success:function(response)
			{
				if(response=='success')
				{
					window.location.href='/transfer_to/'
				}
				if(response=='error')
				{
					window.alert("Hello")
					window.location.href='/'
				}
			},
			error:function(xhr,textStatus,thrownError)
			{
				window.location.href='/'
			}
		});
	});

	$('#trn3').click(function(){
		$.ajax({
			url:'/detail/',
			type:'POST',
			data:{'id':3},
			success:function(response)
			{
				if(response=='success')
				{
					window.location.href='/transfer_to/'
				}
				if(response=='error')
				{
					window.alert("Hello")
					window.location.href='/'
				}
			},
			error:function(xhr,textStatus,thrownError)
			{
				window.location.href='/'
			}
		});
	});

	$('#trn4').click(function(){
		$.ajax({
			url:'/detail/',
			type:'POST',
			data:{'id':4},
			success:function(response)
			{
				if(response=='success')
				{
					window.location.href='/transfer_to/'
				}
				if(response=='error')
				{
					window.alert("Hello")
					window.location.href='/'
				}
			},
			error:function(xhr,textStatus,thrownError)
			{
				window.location.href='/'
			}
		});
	});

	$('#trn5').click(function(){
		$.ajax({
			url:'/detail/',
			type:'POST',
			data:{'id':5},
			success:function(response)
			{
				if(response=='success')
				{
					window.location.href='/transfer_to/'
				}
				if(response=='error')
				{
					window.alert("Hello")
					window.location.href='/'
				}
			},
			error:function(xhr,textStatus,thrownError)
			{
				window.location.href='/'
			}
		});
	});

	$('#trn6').click(function(){
		$.ajax({
			url:'/detail/',
			type:'POST',
			data:{'id':6},
			success:function(response)
			{
				if(response=='success')
				{
					window.location.href='/transfer_to/'
				}
				if(response=='error')
				{
					window.alert("Hello")
					window.location.href='/'
				}
			},
			error:function(xhr,textStatus,thrownError)
			{
				window.location.href='/'
			}
		});
	});

	$('#trn7').click(function(){
		$.ajax({
			url:'/detail/',
			type:'POST',
			data:{'id':7},
			success:function(response)
			{
				if(response=='success')
				{
					window.location.href='/transfer_to/'
				}
				if(response=='error')
				{
					window.alert("Hello")
					window.location.href='/'
				}
			},
			error:function(xhr,textStatus,thrownError)
			{
				window.location.href='/'
			}
		});
	});

	$('#trn8').click(function(){
		$.ajax({
			url:'/detail/',
			type:'POST',
			data:{'id':8},
			success:function(response)
			{
				if(response=='success')
				{
					window.location.href='/transfer_to/'
				}
				if(response=='error')
				{
					window.alert("Hello")
					window.location.href='/'
				}
			},
			error:function(xhr,textStatus,thrownError)
			{
				window.location.href='/'
			}
		});
	});

	$('#trn9').click(function(){
		$.ajax({
			url:'/detail/',
			type:'POST',
			data:{'id':9},
			success:function(response)
			{
				if(response=='success')
				{
					window.location.href='/transfer_to/'
				}
				if(response=='error')
				{
					window.alert("Hello")
					window.location.href='/'
				}
			},
			error:function(xhr,textStatus,thrownError)
			{
				window.location.href='/'
			}
		});
	});

	$('#trn10').click(function(){
		$.ajax({
			url:'/detail/',
			type:'POST',
			data:{'id':10},
			success:function(response)
			{
				if(response=='success')
				{
					window.location.href='/transfer_to/'
				}
				if(response=='error')
				{
					window.alert("Hello")
					window.location.href='/'
				}
			},
			error:function(xhr,textStatus,thrownError)
			{
				window.location.href='/'
			}
		});
	});

});

