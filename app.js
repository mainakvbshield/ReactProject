const url1= 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=5662ede71d7a528a183b41974e535073';

/*$("button").click(function(){
$.getJSON(url, function(result){
    console.log(result)
  });
});
*/

$("button").click(function(){
$.ajax({
	type: 'GET',
	url: url1,
	success: function(data){
	console.log('success',data);
	const temp= data.main.temp;
    console.log(temp);
    console.log(data.weather[0].description);	
	}
})
});

// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=5662ede71d7a528a183b41974e535073

//http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02