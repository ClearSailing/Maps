var User = {
	xmap: "",

login:{
	ShowDialog:function(){
		console.debug("function called: login");
		$.ajax({
			type: "POST",
			url: "php/frm.login.php",
			data: {username: 'x', password: 'x'}
		}).done(function (data) {
				$("#myModal .modal-body").html(data);
				$('#myModal').modal({
  backdrop: 'static',
  keyboard: true
})
			});
		
		
		$('#btn_validateSignIn').bind("click",this,function(){
			console.log("Button validate login pressed");
			User.login.validate();
			return false;
		});
	},

	validate:function(){
		$.ajax({
			type: "POST",
			url: "php/frm.login.php",
			data: {username: $("#login #username").val(), password: $("#login #password").val(),submit:1}
		}).done(function (data) {


			
			$("#myModal .modal-body").html(data);
			result = $("#login #success").val(); 

			if (result == 1){
				$('#myModal').modal('hide')
				$.ajax({
				type: "POST",
				url: "includes/navbar.php",
			}).done(function (data) {
				$("#navbar").html(data);
				Mymap.coordinates.update();
			});

			}
	});
}
	
	
},

logout: function () {
	console.debug("function called: logout");
	$.ajax({
		type: "POST",
		url: "php/logout.php",
	}).done(function (data) {
		$.ajax({
			type: "POST",
			url: "includes/navbar.php",
		}).done(function (data) {
			$("#navbar").html(data);
			Mymap.coordinates.update();
		});
			//$("#xxcontent").html(data);
	});


},

	add:function(){
		console.debug("function called: Mymap.user.add");
	$.ajax({
		type: "POST",
		url: "php/new_user.php",
		//data: {username: $("#form_login #username").val(), password: $("#form_login #password").val()}
	}).done(function (data) {
			$("#xxcontent").html(data);
		});

	$("#xxdialog").dialog({
		title: "Add New user",
		autoOpen: false,
		dialogClass: "no-close pure-form pure-form-stacked",
		modal: true,
		resizable: false,
		width: "400px",
		buttons: {
			"Create User": function () {
					$.ajax({
								type: "POST",
						url: "php/new_user.php",
						data: {username: $("#new_user #username").val(), password: $("#new_user #password").val(),submit:1}
					}).done(function (data) {
						$("#xxcontent").html(data);
						$("#xxdialog").dialog({
							title: "User saved",
							buttons: {
								"Close": function () {
									$(this).dialog("close");				
								}
							}
						});	
						});
				},
				"Cancel": function () {
					$(this).dialog("close");
				}
			}
		});
		$("#xxdialog").dialog("open");
		}

}; //end object