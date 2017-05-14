var colors = ["grey", "blue", "green", "white", "black"];
$(document).ready(function(){
	
	// open the website and first modules are present
	// most recent news start on the top, then move to the next row
	// updated news comes and
	// moves modules one row down
	// conetnt generates when scrolling - infinite scrolling 

 //we loop through our array
  for(i=0;i<colors.length;i++) {
    //each time through the loop, let's append an <option> element to our <select>
    //let's use the value of our index to get the value of the current array item 
    $('#colors').append('<option value="' + colors[i] + '">' + colors[i] + '</option>');
  }

	generateNews();

	function generateNews(){
		console.log("news was generated");

		$.ajax({
			url:'https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=5f6ac905507a4295b446c2c26cfe32d7',
			success:function(giantObject){
				console.log("data received", giantObject)
				giantObject.articles.forEach(function(element,index){
					console.log(element);

					$("#container")
					.append(
					'<div class="column">'+
						'<div class="module">'+
							'<img src="'+element.urlToImage+'"></img>'+
							'<h2 id="title"><a href="url: "https://www.theverge.com/2017/5/13/15635052/king-arthur-legend-of-the-sword-review-guy-ritchie-charlie-hunnam",">'+element.title+'</a></h2>'+
							'<h3 id="author">'+element.author+'</h3>'+
							'<p id="description">'+element.description+'</p>'+
						'</div>'+
					'</div>');
				
					
				})
			}
		});
	}
});


generateModules()


function generateModules(){
	console.log("module was created");
}

 //detect when the <select> element changes  - using the event delegation like we saw in the todo sample solution
  $('form').on('change', '#colors',function(){
    //retrieve value that the user enetered
    var color = $('#colors').val();

    //let's go through our conditions to set the background!
    if(color == 'gray') {
      $('body').attr('id','gray');
    }
    else if (color == 'white') {
      $('body').attr('id','white');
    }
    else if (color == 'black') {
      $('body').attr('id','black');
    }
    else if (color == 'blue') {
      $('body').attr('id','blue');
    }
    else if (color == 'green') {
      $('body').attr('id','green');
    }
  });




