 var popup = {
	 
show:function(x){
		$('#overlay').fadeIn('slow');
		//dialog.center(x);
		$('#' + x).fadeIn('slow');
	},

 	AddTextbox:function(xid,xclass,txt,value){
		$('#'+dialog.myID+' #input_area').append("<label class='CSS_input_label'>"+txt+":<input id='"+xid+"' class='CSS_input "+xclass+"' type='text' value='"+value+"'name='x'  /></label>")
	}	,

 	AddButton:function (xid,xclass,txt)  {
		$('#'+dialog.myID+' #button_area').append("<div class='" +xclass+" button' id='"+xid+"'><p>"+txt+"</p> </div>")
		$('#dialog #button_area #'+xid).click(function() {

		//hide_dialog('save_content')
		//action()
		})
	},

	center:function(x){
	 // el =x
	// console.debug("Center dialog" + el)
		// box_top = ($(window).height() - $('#'+ el).height())/2
		// box_left = ($(window).width() - $('#'+ el).width())/2
		// $('#'+ el).css("top",box_top+"px")
		// $('#'+ el).css("left",box_left+"px")
	 },

	clear:function ()  {

		$('#'+dialog.myID+' #input_area').html("")
		$('#'+dialog.myID+' #button_area').html("")
	}	,

	title:function (x)  {
		$('#'+dialog.myID+' h1').html(x)
	},

	text:function (x)  {
		$('#'+dialog.myID+' h2').html(x)
	},

	show:function(){
	alert ("HE")
	console.debug("Showing Dialog: " + dialog.myID)

		//dialog.showdialog(dialog.myID)
	},

	// showfile:function(){
		// dialog.showdialog("file_dialog")
	// },
	hidefile:function(){

		dialog.hidedialog("file_dialog")
	},

	

	hide:function(){
		dialog.hidedialog(dialog.myID)
		$('#'+dialog.myID).attr("id",'CSS_dialog');
	},

	hidedialog:function(x){
		$('#' + x).fadeOut('slow')
		$('#CSS_overlay').fadeOut('slow')

	},

	create:function(){
// rename div
	$('#CSS_dialog').attr("id",dialog.myID);
}


 }