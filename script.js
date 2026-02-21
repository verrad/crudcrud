$.ajax({
  url: "https://www.omdbapi.com/?i=tt3896198&apikey=5eef877c&s=harry-potter",
  success: (results) => {
    const movies = results.Search;
    let cards = "";
    movies.forEach((m) => {
      cards += `
        <div class= "col-md4 my-3">
          <div class="card">
            <img src="${m.Poster}" class="card-img-top">
            <div class= "card-body">
              <h5 class="card-title">${m.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
              <a href ="#" class="btn btn-primary">Show Details</a>
            </div>
          </div>
        </div>
      `;
      $(".movie-container").html(cards);
    });
  },

  error: (e) => {
    console.log(e.responseText);
  },
});
