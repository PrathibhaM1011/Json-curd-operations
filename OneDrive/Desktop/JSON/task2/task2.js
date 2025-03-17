let container = document.createElement("div");

container.className = "container";
let loader = document.getElementById("loader");

function fetchData(){
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {setTimeout(() => {
        displayData(data);
    }, 4000); // Adjust time as needed (3s)
})
        
        
    .catch(err => console.log(err));


}

function displayData(products){
    container.innerHTML = "";
    for (let obj of products){
        let item = document.createElement("div");
        item.className="product";
        item.innerHTML=`
        <img src='${obj.image}'class='image'>
        <p class='text'>${obj.title}- <span class='price'>₹${obj.price}</span></p>
        
        <p class='description'>${obj.description}</p>
       <span class="rating">⭐ ${obj.rating.rate}</span>        
        `;

        container.appendChild(item);
    }
    loader.remove();
    document.body.appendChild(container);
}

fetchData();
