$(document).ready(function(){



  //alert(mockData);
  //$("body").append("<h1>HELLo!</h1>")

  $.get("http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC", render(mockData))
  //console.log("heres you data", mockData)

  function render(data){
  var data1 = data.data;
  data1.forEach(function(item,i){
    var gif = item.images.fixed_height.url;
    $("#blah").append("<img src='" + gif + "'>"); // mind the single vs. double quotes!
  })  
}


$('#searchForm').submit(function(event) {
	event.preventDefault();
	var inputValue = $(this.search).val();
	console.log(inputValue);
	$.get("http://api.giphy.com/v1/gifs/search?q="+inputValue+"&api_key=dc6zaTOxFJmzC", function(data) {
        var data1 = data.data;
          $("#blah").empty();
       data1.forEach(function(item,i){
       var gif = item.images.fixed_height.url;
      $("#blah").append("<img src='" + gif + "'>"); // mind the single vs. double quotes!
  })  


})

})




/*$("#input").submit(function(event)) {
var $submitClicked = $(event.target); 
   var inputVal = $("#input").val() 

  
      
}

}*/


});






  // code in here!
  //console.log("here's your data:", mockData)



//mockData.data[0].images

