//featured product display to frontend
const featuredProduct = [
    {
        id: 1,
        name: "Bell Pepper",
        price: 30,
        ImageUrl: "./img/featured/product-1.jpg",
        category: "Vegetables",
        quantity: 1
    },
    {
        id: 2,
        name: "Strawberry",
        price: 50,
        ImageUrl: "./img/featured/product-2.jpg",
        category: "Fruits",
        quantity: 1
    },
    {
        id: 3,
        name: "Green Beans",
        price: 20,
        ImageUrl: "./img/featured/product-3.jpg",
        category: "Vegetables",
        quantity: 1
    },
    {
        id: 4,
        name: "Purple Cabbage",
        price: 70,
        ImageUrl: "./img/featured/product-4.jpg",
        category: "Oranges",
        quantity: 1
    },
    {
        id: 5,
        name: "Tomatoe",
        price: 100,
        ImageUrl: "./img/featured/product-5.jpg",
        category: "Vegetables",
        quantity: 1
    },
    {
        id: 6,
        name: "Brocolli",
        price: 50,
        ImageUrl: "./img/featured/product-6.jpg",
        category: "Oranges",
        quantity: 1
    },
    {
        id: 7,
        name: "Carrots",
        price: 120,
        ImageUrl: "./img/featured/product-7.jpg",
        category: "Vegetables",
        quantity: 1
    },
    {
        id: 8,
        name: "Fruit Juice",
        price: 60,
        ImageUrl: "./img/featured/product-8.jpg",
        category: "Juice",
        quantity: 1
    },
    {
        id: 9,
        name: "Onion",
        price: 100,
        ImageUrl: "./img/featured/product-9.jpg",
        category: "Vegetables",
        quantity: 1
    },
    {
        id: 10,
        name: "Apple",
        price: 80,
        ImageUrl: "./img/featured/product-10.jpg",
        category: "Fruits",
        quantity: 1
    },
    {
        id: 11,
        name: "Garlic",
        price: 60,
        ImageUrl: "./img/featured/product-11.jpg",
        category: "Vegetables",
        quantity: 1
    },
    {
        id: 12,
        name: "Chilli",
        price: 120,
        ImageUrl: "./img/featured/product-12.jpg",
        category: "Vegetables",
        quantity: 1
    },
    {
        id: 13,
        name: "Orange",
        price: 120,
        ImageUrl: "./img/featured/product-13.jpg",
        category: "Oranges",
        quantity: 1
    },
]

const itemsContainer = document.getElementById('items_container')

// Function to display products
const displayProducts = (category) => {
    itemsContainer.innerHTML = "";
    const filteredProducts = category === "all"
        ? featuredProduct
        : featuredProduct.filter(p => p.category.toLowerCase() === category.toLowerCase());

    filteredProducts.forEach((item, index) => {
        const div = document.createElement('div');
        div.accessKey = item.id;
        div.id = "featured_product_item";
        div.className = "border-[1px] snap-start border-gray-200 rounded-sm group opacity-0 scale-10 transition-all duration-500 ease-in-out transform bg-white p-5 rounded-lg";
        div.setAttribute("data-name", item.categorieName);
        div.innerHTML = `
            <div class="h-9/12 relative overflow-hidden">
                <img src="${"." + item.ImageUrl}" class="h-full w-full object-contain group-hover:scale-110 duration-500" alt="">
                <div class="flex translate-y-[100%] group-hover:translate-y-0 duration-500 absolute bottom-0 left-0 justify-center pb-5 gap-5 items-end w-full h-[50%]">
                    <ion-icon class="hover:bg-[#7fad39] hover:rotate-[360deg] cursor-pointer duration-500 hover:text-white text-xl bg-white border-[1px] border-gray-200 p-2 rounded-full" name="heart" accessKey="${item.id}" id="add_wishlist"></ion-icon>
                    <ion-icon class="hover:bg-[#7fad39] hover:rotate-[360deg] cursor-pointer duration-500 hover:text-white text-xl bg-white border-[1px] border-gray-200 p-2 rounded-full" name="sync"></ion-icon>
                    <ion-icon class="hover:bg-[#7fad39] hover:rotate-[360deg] cursor-pointer duration-500 hover:text-white text-xl bg-white border-[1px] border-gray-200 p-2 rounded-full" name="cart" accessKey="${item.id}" id="add_Cart"></ion-icon>
                </div>
            </div>
            <div class="flex justify-center items-center flex-col h-3/12">
                <p class="font-mono uppercase">${item.name}</p>
                <p class="font-medium text-[#7fad39]">₹${item.price}.00</p>
            </div>
        `;

        itemsContainer.appendChild(div);

        // Fade-in and scale effect with a staggered delay
        setTimeout(() => {
            div.classList.remove("opacity-0", "scale-10");
        }, index * 100);  // Each item appears with a slight delay
    });
};



const SingleProductContainer = document.getElementById('Single_product_container')
const singleProductDisplay = (id) => {
    SingleProductContainer.innerHTML = "";
    const item = featuredProduct.find((list) => list.id == id)
    if (item) {
        const productDiv = document.createElement('div');
        productDiv.accessKey = item.id;
        productDiv.id = "single_Product";
        productDiv.className = "flex lg:flex-row flex-col h-full lg:gap-0 gap-10"
        productDiv.innerHTML = `
             <div class="xl:w-7/12 lg:w-6/12 w-full h-full">
                <img class="h-full w-full object-contain" src=${"." + item.ImageUrl} alt="Product_Image">
            </div>
            <div class="xl:w-5/12 lg:w-6/12 w-full flex flex-col gap-8">
                <h1 data-categorie_name=${item.category} id="product_Name" class="font-normal uppercase text-3xl">
                ${item.name}
                </h1>
                <div class="flex gap-5">
                    <div class="flex  justify-center text-green items-center gap-1">
                        <p>5.0</p>
                        <div class="justify-center items-center flex text-yellow-400">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                        </div>
                    </div>
                    <div class="flex justify-center items-center gap-1">
                        <p>100</p>
                        <p class="text-gray-500">Rating</p>
                    </div>
                    <div class="flex justify-center items-center gap-1">
                        <p>500</p>
                        <p class="text-gray-500">Sold</p>
                    </div>
                </div>
                <p class="text-2xl">₹${item.price}.00</p>
                <p class="text-gray-500">A small river named Duden flows by their place and supplies it with the
                    necessary regelialia. It is a
                    paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn
                    around and return to its own, safe country. But nothing the copy said could convince her and so it
                    didn't take long until.</p>
                <div class="flex gap-2 h-10">
                   
                       <ion-icon 
                         class="border select-none h-full shadow active:shadow-inner cursor-pointer px-3 border-gray-300 flex justify-center items-center"  data-name="minus_btn"  name="remove-outline"></ion-icon>
                   
                    <input value=${item.quantity} type="number" id="quantityInput"
                        class="border appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-gray-300 w-25 outline-none h-full text-center">

                       <ion-icon  class="border select-none h-full shadow active:shadow-inner cursor-pointer px-3 border-gray-300 flex justify-center items-center"
                       data-name="add_btn"     name="add-outline"></ion-icon>
                </div>
                <p class="font-medium">600 kg available</p>
                <button data-name="add_to_Cart" id=${item.id}
                    class="bg-[#7fad39] w-max text-xl focus:bg-blue-600 focus:border-blue-600 focus:text-white shadow-2xl border-2 border-transparent hover:border-[#7fad39] hover:text-[#7fad39] hover:bg-white duration-200 cursor-pointer text-white py-3 font-normal  rounded-full px-6">
                    Add to Cart
                </button>
            </div>
        `;

        SingleProductContainer.appendChild(productDiv);
    }
}

//Init to Single Product to Display Frontend
singleProductDisplay(1)

addEventListener('DOMContentLoaded', () => {
    const productCategorieName = document.getElementById('product_Name').dataset.categorie_name || "all"
    displayProducts(productCategorieName)
})

//Init Single_Product_Container add to EventListener
SingleProductContainer.addEventListener('click', (e) => {
    const quantityInput = document.getElementById('quantityInput')

    const name = e.target.dataset.name
    if (name == "minus_btn") {
        const quantity = Number(quantityInput.value)
        quantityInput.value = (quantity <= 1 ? 1 : quantity - 1)
    }
    else if (name == "add_btn") {
        const quantity = Number(quantityInput.value)
        quantityInput.value = quantity + 1
    }
    else if (name == "add_to_Cart") {

    }

})
