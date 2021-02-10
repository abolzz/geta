document.getElementById("searchBtn").addEventListener("click", function(event) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
	    if (xhr.readyState === 4){
	        let data = JSON.parse(xhr.responseText);
	        for (var i = data.results.length - 1; i >= 0; i--) {
	        	let el = document.createElement("li");
				el.innerHTML = data.results[i].display_title;
				document.getElementById("movieList").appendChild(el);
	        }
	    }
	};
	xhr.open('GET', 'http://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + document.getElementById('searchInput').value + '&api-key=yQcM340oDc1k0zrrElqhw5dmevTT9DXX');
	xhr.send();
});