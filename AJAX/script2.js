$("#movieSearch").on("submit",function(e){
    e.preventDefault();
    let inputValue = this.movieName.value;
    if(inputValue.trim() != "") {
        getMovieInfo(inputValue);
    }
    function getMovieInfo(movieName){
    $.ajax({
        async: true,
        crossDomain: true,
        url: "https://api.themoviedb.org/3/search/movie?api_key=df088d075ca2e18f98caf1a167c0d426&language=en-US&query="+movieName+"&page=1&include_adult=false",
        method: "GET",
        headers: {},
        data: {},
        success: function(response){
            let movieDiv = $(".movie");
              movieDiv.html("");
            for(var i = 0; i < response.results.length; i++){
                let movieDiv = $(".movie");
                var movieText = response.results[i].title;
                $('<h4>').text(movieText).appendTo(movieDiv);
                var movieOverview = response.results[i].overview;
                $('<p>').html(movieOverview).appendTo(movieDiv);
            }
        }
    })
}

});
