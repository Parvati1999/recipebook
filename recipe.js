function searchMeal() {
    var query = document.getElementById('searchInput').value;
    var url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + query;
  
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var container = document.getElementById('mealContainer');
        container.innerHTML = '';
  
        if (!data.meals) {
          container.innerHTML =
            '<p class="no-results">No meals found.</p>';
          return;
        }
  
        data.meals.forEach(function(meal) {
          var sourceUrl = meal.strSource ? meal.strSource : '#';
          var card = `
            <div class="card">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
              <h2>${meal.strMeal}</h2>
              <p>Area: ${meal.strArea}</p>
              <a href="${sourceUrl}" target="_blank">View Recipe</a>
            </div>
          `;
          container.innerHTML += card;
        });
      });
  }
  