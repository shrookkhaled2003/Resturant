async function loadPizzas() {
  const container = document.getElementById("pizza-container");

  try {
    const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    const data = await response.json();
    const pizzas = data.recipes.slice(0, 3);
    const row = document.createElement("div");
    row.className = "row justify-content-around align-items-stretch";

    for (let i = 0; i < pizzas.length; i++) {
      const pizza = pizzas[i];
      const col = document.createElement("div");
      col.className = "col-md-4 mt-4 d-flex justify-content-center";

      const randomPrice = (Math.random() * 10 + 5).toFixed(2);
      const randomRating = (Math.random() * 5).toFixed(1);

      col.innerHTML = `
        <div class="card h-100 w-100">
          <div class="card-image">
            <img src="${pizza.image_url}" alt="${pizza.title}">
          </div>
          <h3>${pizza.title}</h3>
          <div class="rating">
            <span>★★★★☆</span>
            <span>(${randomRating})</span>
          </div>
          <p class="price">$${randomPrice}</p>
          <button class="buy-now mx-auto">Buy Now</button>
        </div>
      `;

      row.appendChild(col);
    }

    container.appendChild(row);
  } catch (error) {
    container.innerHTML = "<p>Error loading data.</p>";
    console.error(error);
  }
}

async function loadMushrooms() {
  const container = document.getElementById("mushroom-container");

  try {
    const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=mushrooms");
    const data = await response.json();
    const mushrooms = data.recipes.slice(0, 3);
    const row = document.createElement("div");
    row.className = "row justify-content-around align-items-stretch";

    mushrooms.forEach(mushroom => {
      const col = document.createElement("div");
      col.className = "col-md-4 mt-4 d-flex justify-content-center";

      const randomPrice = (Math.random() * 10 + 5).toFixed(2);
      const randomRating = (Math.random() * 5).toFixed(1);

      col.innerHTML = `
        <div class="card h-100 w-100">
          <div class="card-image">
            <img src="${mushroom.image_url}" alt="${mushroom.title}">
          </div>
          <h3>${mushroom.title}</h3>
          <div class="rating">
            <span>★★★★☆</span>
            <span>(${randomRating})</span>
          </div>
          <p class="price">$${randomPrice}</p>
          <button class="buy-now mx-auto">Buy Now</button>
        </div>
      `;

      row.appendChild(col);
    });

    container.appendChild(row);
  } catch (error) {
    container.innerHTML = "<p>Error loading data.</p>";
    console.error(error);
  }
}

loadPizzas();
loadMushrooms();
