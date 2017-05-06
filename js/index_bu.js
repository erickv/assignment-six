
// user submits a city name

// $(document).ready(function(){
// $("select").change(changeCity)

// var cityName = ["NYC", "SF", "LA", "ATX", "SYD"];
// var index;
// for(index = 0; index < cities.length; index = index+1){
//   console.log(cities[index]);
//   $("select").append("<option>"+cities[index]+"</option>");
   

$(document).ready(function(){
	$("form").submit(changeCity)

	
	function changeCity(){
		event.preventDefault();
		var city = $("#city-type").val();
		 if (city == "New York" || city == "NYC") {
    $("body").attr("class", "nyc");


}


  else if (city == "San Francisco" || city == "SF" || city == "Bay Area") {
    $("body").attr("class", "sf");
  }
  else if (city == "Los Angeles" || city == "LA" || city == "LAX") {
    $("body").attr("class", "la");
  }
  else if (city == "Austin" || city == "ATX") {
    $("body").attr("class", "austin");
  }
  else if (city == "Sydney" || city == "SYD") {
    $("body").attr("class", "sydney");
  }

else {
	alert("We currently don't have images for this city. Check back later!");}

}

});


	// function("changeCity")
	// $("changeCity").click(function())

// 	if city="nyc", "sydney", "la", "sf", "austin";
// 	$(img).attr("class", "nyc")

// 	submitButton("changeCity");
// });




	// user submit a city name

// 		$("city-type").changeCity();
// 		console.log("submit")
// 		// var = "cities";
// 		if ("nyc || sydney || la ||")
// 		$(img).attr("class", "nyc"); {
// 			else if (nyc):
// 				show
// 		}
// });
	// function changeCity(){
	// 	var newCity= $("newCity").val();
	// 	cityName = nyc(newCity)
	// });

	// }
	// $img attr("city-type")
	// var=(city;))
	// note, I'm confused about thge brackets in there, whates the order, I need to ask.
	// if any of these cities is selected nyc, sf, la, austin, sydney
	// background image appears
	//if user doesnt match the city and alert please enter a valid city
	//



	// then if the city is select it will show on screen if not will receive an alert //
	// 
	// $("button").click(function)
	// function("changeCity")
	// $(img)attr("city-type")
	// (var)=city;
	// if (city = ny || nyc || sf || la || austin || sydney){
	// 	else if (la)
	// 		else if (sf)
	// 			else if (austin)
