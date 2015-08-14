$("document").ready(function() {
	resize_content();
	//Mymap.coordinates.update();
	Mymap.initialize(); // load map

}); //end on ready;

$(window).load(function () {

	$( ".icon-center-map" ).click(function() {
		Mymap.move();	
	});

});//end on load

$(window).resize(function() {
	resize_content();
});	

function resize_content(){
 	x = $(window).height()-50;
	y = $(window).width();
	$('#map').height(x) ;
	$('#map').width(y);
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize';
  document.body.appendChild(script);
}