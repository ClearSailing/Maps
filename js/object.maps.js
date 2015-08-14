var Mymap = {
	xmap: "",
	lat: 0,
	lng: 0,
	xgeolocation: 0,
	mapmarkers: [],
	infoWindow: "",
	boxText: document.createElement("div"),
	ib: new InfoBox(),
	xml: 0,
	
	initialize: function () {				
		console.debug("function called: Mymap.initialize");
		if (navigator.geolocation)
		{
			navigator.geolocation.getCurrentPosition(Mymap.load, Mymap.error);

		} else {
			x.innerHTML = "Geolocation is not supported by this browser.";
		}
	},

	error:function(){
		Mymap.geolocation=0;
		Mymap.lat = '42.854';
		Mymap.lng = '-70.934';
		Mymap.show();
	},

	load:function(position){
		Mymap.geolocation=1;
		Mymap.coordinates.fetch(position);	
		Mymap.show();
		
	},

	show: function () {
		Mymap.xmap = new google.maps.Map(document.getElementById("map"), {
			center: new google.maps.LatLng(Mymap.lat,Mymap.lng),
			zoom: 12,
			mapTypeId: 'roadmap'
		});
		Mymap.markers.load("./php/generate.php", Mymap.markers.show);
},
	
	markers: {
		load: function (url, callback) {
			//downloadUrl("./php/generate.php", Mymap.markers.show );
			$.ajax({
				url: url, //generate.php
				data: {action: "new", lat: Mymap.marker.lat, lng: Mymap.marker.lng}
			}).done(function (data) {
				Mymap.xml = data;
				//console.log(Mymap.xml)
				callback();//Mymap.show
			});
		},
		show: function () {
			//console.debug ("Show Markers...");
			var markers = Mymap.xml.documentElement.getElementsByTagName("marker");
			for (var i = 0; i < markers.length; i++) {
				//console.debug ("Reading Marker Information...");
//				fields = ['id','name','description']
//				xx = []
//				for (var xxx in fields) {
//					//alert(fields[xxx]);
//					 xx[fields[xxx]] = markers[i].getAttribute(fields[xxx]);
//				}
				//var xmarker = {firstName:"John", lastName:"Doe", age:46}; 
				//xmarker[]
				

				var point = new google.maps.LatLng(
								parseFloat(markers[i].getAttribute("lat")),
								parseFloat(markers[i].getAttribute("lng")));
				var html = markers[i].getAttribute("id"); //"ID: "+xx['id'];// <br/>" + address;
				var title = markers[i].getAttribute("name");
				//var icon = customIcons[type] || {};
				Mymap.marker.show(point, html,title);
			}
			var mcOptions = {gridSize: 30, maxZoom: 15};
			var mc = new MarkerClusterer(Mymap.xmap, Mymap.mapmarkers, mcOptions);
		}
	}, //markers

	marker: {

		add:{
			showdialog:function(){
				console.debug("function called: Mymap.marker.add.showdialog");
				$('#AddMarker').modal();
			},

			fromcurrentlocation:function(){
				console.debug("function called: Mymap.marker.add.fromcurrentlocation");
				$('#AddMarker').modal('hide');
				Mymap.marker.add.showform(Mymap.lat,Mymap.lng);
			},

			selectposition:function(){
				console.debug("function called: Mymap.marker.add.selectposition");
				$('#AddMarker').modal('hide');
				$('#map div').css({"cursor": "crosshair"});
				google.maps.event.addListener(Mymap.xmap, 'click', function (event) {
					Mymap.stopListening()
					Mymap.marker.lat = event.latLng.lat();
					Mymap.marker.lng = event.latLng.lng();
					Mymap.marker.marker = new google.maps.Marker({
						position: new google.maps.LatLng(Mymap.marker.lat, Mymap.marker.lng),
						title: "Hello World!",
						map: Mymap.xmap,
						draggable: true,
						icon: './images/marker.new.png',
						content: 'Boo'
										//shadow: icon.shadow
					});

				//var boxText = document.createElement("div");
				Mymap.boxText.style.cssText = "border: 1px solid black; margin-top: 8px; background: linen; padding: 5px;height:66px;";
				Mymap.boxText.innerHTML = "Drag and drop the marker to the location you want. Once the marker is in position, click finish<br><a href='#' onclick='Mymap.marker.add.positionselected()' id='marker_save'><img class='button' src='images/button.submit.png'></a><a href='#' onclick='Mymap.marker.add.cancel()' id='marker_save'><img class='button' src='images/button.cancel.png'></a>";
				var myOptions = {
					content: Mymap.boxText
					, disableAutoPan: false
					, maxWidth: 0
					, pixelOffset: new google.maps.Size(-140, 0)
					, zIndex: null
					, boxStyle: {
						//background: "url('tipbox.gif') no-repeat",
						opacity: 0.9
						, width: "280px"
					}
					, closeBoxMargin: "10px 2px 2px 2px"
					, closeBoxURL: ""
					, infoBoxClearance: new google.maps.Size(1, 1)
					, isHidden: false
					, pane: "floatPane"
					, enableEventPropagation: false
				};
				Mymap.ib = new InfoBox(myOptions);
				Mymap.ib.open(Mymap.xmap, Mymap.marker.marker);
			});
			
			},

			positionselected:function(){
				Mymap.marker.hide();
				Mymap.marker.add.showform(Mymap.marker.lat,Mymap.marker.lng);
			},
			
			showform: function (lat,lng) {
			console.debug("function: Mymap.marker.add.showform");
			$.ajax({
				type: "POST", 
				url: "php/frm.new.marker.php",
				data: {action: "new", lat: lat, lng: lng}
			}).done(function (data) {
				$("#savemarker .modal-body").html(data);
				$('#savemarker').modal({backdrop: 'static',keyboard: true});
			});

		},

			save:function(){
				console.debug("function called: Mymap.marker.add.save");
				
				FomData =  new FormData(form1);
				//FomData = $("#form1").serialize();

						$.ajax({
							url: "php/frm.new.marker.php",
							data: FomData,processData: false, contentType: false
						}).done(function () {
							//$('#savemarker').modal('hide');
				//$('#savedok').modal();
							Mymap.markers.load("./php/generate.php", Mymap.markers.show);
						});


$.ajax({
url: "php/frm.new.marker.php", // Url to which the request is send
type: "POST",             // Type of request to be send, called as method
data: new FormData(form1), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false,        // To send DOMDocument or non processed data file it is set to false
success: function(data)   // A function to be called if request succeeds
{
$('#loading').hide();
$("#message").html(data);
}
});
			},

			cancel: function () {
				Mymap.marker.hide();
			}
		},

		showdetails:function (id){
						console.debug("function called: Mymap.marker.add.showdetails");
			$.ajax({
				url: "php/show.marker.details.php",
				data: {id: id}
			}).done(function (data) {
				$("#marker .modal-content").html(data);
				$('#marker').modal({backdrop: 'static',keyboard: true});
			});

					
		},
		
		hide: function () {
			console.debug("Close: Add Marker dialog box");
			console.debug("Action: Add Marker .... Cancelled");
			Mymap.stopListening();
			Mymap.ib.close(Mymap.xmap, Mymap.marker.marker);
			Mymap.marker.marker.setVisible(false);
			$('#map div').css({"cursor": "grab"});
		},
		
		show: function (point, html,title) {
			//console.log('show marker')
			var marker = new google.maps.Marker({
				map: Mymap.xmap,
				position: point,
				title:title,
				//draggable:true	
				icon: './images/marker.png'
								//shadow: icon.shadow
							
			})
							;
			//marker.setMap(Mymap.xmap);
			Mymap.infoWindow = new google.maps.InfoWindow({});
			Mymap.marker.bindInfoWindow(marker, Mymap.xmap, Mymap.infoWindow, html);
			//console.debug (marker)	
			Mymap.mapmarkers.push(marker);
		},
		
		bindInfoWindow: function (marker, map, infoWindow, html) {
			google.maps.event.addListener(marker, 'click', function () {
				infoWindow.setContent(html);
				//$('#marker .modal-title').html(html);
				Mymap.marker.showdetails(html);

				//infoWindow.open(map, marker);
			});
			//console.debug("Bind information to marker...");
		}

	}, //marker

coordinates:{
	update: function () {
//		console.debug("function: coordinates.update");
//		if (navigator.geolocation)
//		{
//			navigator.geolocation.getCurrentPosition(Mymap.coordinates.fetch,Mymap.coordinates.fetcherror);
//
//		} else {
//			x.innerHTML = "Geolocation is not supported by this browser.";
//		}
	},

	fetch:function(position){
		console.debug("function: coordinates.fetch");
		Mymap.lat = position.coords.latitude;
		Mymap.lng = position.coords.longitude;
		$("#coordinates").html("<strong>Lat:</strong> "+ Mymap.lat.toFixed(3)+ " <strong>Long:</strong>  " + Mymap.lng.toFixed(3));
	},

		fetcherror:function(){
		console.debug("function: coordinates.fetcherror");
		// code goes here
	}

},


		


	move: function () {

		pointToMoveTo = new google.maps.LatLng(Mymap.lat, Mymap.lng);
		Mymap.xmap.panTo(pointToMoveTo);
	},
	stopListening: function () {
		google.maps.event.clearListeners(Mymap.xmap, 'click');
	},
search:function(){

}

}; //end object



