//Task 1: Setup basic HTML structure for product webpage

//Task 2: Fetch Products from the API Using Fetch and Promises

const productContainer = document.getElementById(".product-container");

fetch("https://www.course-api.com/javascript-store-products")
.then(response => {
    if(!response.ok) {
        new Error("network response is bad");
    }
    return response.json();
})
.then(prodcuts => {
    prodcuts.forEach(product => {
        const{ company, price } product.fields;
        const productName = product.fields.name;
        const productImage = product.fields.image[0].url;

        const productDiv = document.createElement("div");
        productDiv.className = "product";

        const nameElement = document.createElement();
        nameElement.textContent = "Name: ${productName}";
        productDiv.appendChild(nameElement);

        const companyElement = document.createElement();
        companyElement.textContent = "Company: ${company}";
        productDiv.appendChild(companyElement);

        const priceElement = document.createElement();
        priceElement.textContent = "Price: $${price / 100}";
        productDiv.appendChild(priceElement);

        const imageElement = document.createElement();
        imageElement.src = productImage;
        imageElement.alt = productName;
        productDiv.appendChild(imageElement);

        productContainer.appendChild(productDiv);
    });
})
.catch(error => {
    console.error("error fetching plz try again", error);
});
