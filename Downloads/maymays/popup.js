$(document).ready(function(){
    $('#output').click(function(field) {
	console.log("it works?")
	field.focus();
	field.select();
    });

    $('#generate').click(function(){
	console.log();
	var resultDiv =$("#resultDivContainer");
	$.ajax({
	    url: "https://api.imgflip.com/caption_image",
	    type:"POST",
	    data: {template_id:$('#memeMenu :selected').val(),username: "maymays", password:"maymays",text0:$('#text0').val(),text1:$('#text1').val()},
	    dataType: "json",
	    success: function (result){
		//console.log(result.data.url);
		switch (result.success){
		case true:
		    $('#output').val(result.data.url);
		    break;
		default:
		    $('#output').val("Error");
		}
	    },
	    error: function(xhr,ajaxOptions, thrownError){
		alert(xhr.status);
		alert(thrownError);
	    }
	})
    });
});
