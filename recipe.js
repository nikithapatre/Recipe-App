const searchForm = document.querySelector("form"); 
const searchResult = document.querySelector(".search-result");
const container = document.querySelector(".container");
let inputVal = "";

const APP_Id = "9e18b2c4"; 
const APP_Key = "c3d5aa4d5a5316523fd8923e1891b13d"; 


searchForm.addEventListener("submit", (event)  => {
    event.preventDefault(); 
    inputVal = event.target.querySelector("input").value;
    console.log(inputVal); 
    fetchAPI();
});

async function fetchAPI() {
    container.classList.remove("initial");
   const url = ` https://api.edamam.com/search?q=${inputVal}&app_id=${APP_Id}&app_key=${APP_Key}&to=10 `
   const response = await fetch(url);
   console.log(response);
   const data = await response.json();
   console.log(data)
   generateHTML(data.hits)
//    console.log(generateHTML)
}


function generateHTML(results) {
    let  html = ""
    results.map(result => {
   html +=
   `
    <div class="search-item">
              <img src=${result.recipe.image} alt="image">
                <div class="flex-container">
               <h1 class="recipe-title">${result.recipe.label}</h1>
               </div>
                <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
                         <p class="item-data">Cusine: ${result.recipe.cuisineType}</p>
             
<a href="${result.recipe.url}" target="_blank class="view-btn">View Recipe</a>
              </div>
   `
    }) 
searchResult.innerHTML = html;

}

