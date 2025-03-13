// Selecting elements
const BODY = document.getElementById('body')
const CategorieMenu = document.getElementById('CategorieMenu');
const CaterieItems = document.getElementById('CaterieItems');
const next = document.getElementById('next');
const prv = document.getElementById('prv');
const product_slider = document.getElementById('product_slider');
const cartContainer = document.getElementById('cart_container')
const cartItemContainer = document.getElementById('cart_Item_Container')

const latestProductSlider = document.getElementById('latest_product_Slider')
const topRatedProductSlider = document.getElementById('Top_rated_product_Slider')
const bestReviewProductSlider = document.getElementById('best_Review_Product_Slider')


let wishList = JSON.parse(localStorage.getItem('WishList')) || []
let cartList = JSON.parse(localStorage.getItem('CartList')) || []

addEventListener('scroll', () => {
    const headerMenu = document.getElementById('header_menu')
    const offSetTop = headerMenu.offsetTop

    if (offSetTop > 40) {
        headerMenu.classList.add('shadow-lg')
    }
    if (offSetTop == 40) {
        headerMenu.classList.remove('shadow-lg')
    }

})


//cartItem display to frontend

const CartTotalAmount = () => {
    const total = cartList.reduce((acc, value) => {
        return acc + (value.quantity * value.price)
    }, 0)
    document.querySelectorAll('#total_price').forEach((totalPriceDiv) => {
        totalPriceDiv.innerText = `₹${total}`
    })
}

const CartCountDisplay = () => {
    const countContainer = document.querySelectorAll('#cartCountContainer')

    countContainer.forEach((cartIconContainer) => {
        let cartCountDiv = cartIconContainer.querySelector('#Cartcount');
        if (cartList.length > 0) {
            if (!cartCountDiv) {
                const countDiv = document.createElement('div')
                countDiv.id = "Cartcount"
                countDiv.className = "absolute top-[-5px] right-[-10px] bg-[#7fad39] rounded-full text-white h-3.5 w-3.5 text-[10px] text-center font-bold"
                countDiv.innerText = cartList.length
                cartIconContainer.appendChild(countDiv)
            }
            else {
                cartCountDiv.innerText = cartList.length
            }
        }
        else {
            if (cartCountDiv) {
                cartCountDiv.remove();

            }
        }
    })
}
// const cartItemDisplay = () => {
//     if (cartList.length > 0) {
//         cartItemContainer.innerHTML = ""
//         cartList.map((item) => {
//             const div = document.createElement('div')
//             div.className = "py-5 flex gap-5 h-44"
//             div.id = "cart_Item"
//             div.innerHTML = ` <div class=" w-6/12 overflow-hidden">
//                                 <img src=${item.ImageUrl} class="w-full h-full object-contain" alt="product_Img" srcset="">
//                             </div>
//                             <div class="w-6/12 flex flex-col gap-5">
//                                 <div class="flex justify-between items-center gap-3">
//                                     <p class="font-bold  text-lg line-clamp-2 font-mono uppercase">${item.name}</p>
//                                     <ion-icon id="trash_icon" data-id=${item.id} class="text-xl cursor-pointer text-red-600"
//                                         name="trash-outline"></ion-icon>
//                                 </div>
//                                 <p class="text-lg font-mono ">₹ ${item.price * item.quantity}</p>
//                                 <div class="flex items-center">
//                                     <ion-icon id="remove" data-id=${item.id}
//                                         class="bg-[#7fad39] cursor-pointer text-white p-1 rounded-sm text-xl font-extrabold"
//                                         name="remove-outline"></ion-icon>
//                                     <p class="w-10 text-center text-lg">${item.quantity}</p>
//                                     <ion-icon  data-id=${item.id}
//                                         class="bg-[#7fad39] cursor-pointer text-white p-1 rounded-sm text-xl font-extrabold" id="add"
//                                         name="add-outline"></ion-icon>
//                                 </div>
//                             </div>`

//             cartItemContainer.appendChild(div)

//         })

//     } else {
//         cartItemContainer.innerHTML = ""
//         const div = document.createElement('div')
//         div.innerText = "Your Cart is empty"
//         div.className = "flex justify-center items-center h-full text-lg text-gray-400"
//         cartItemContainer.appendChild(div)
//     }
// }

addEventListener('DOMContentLoaded', () => {
    CartTotalAmount()
    CartCountDisplay()
})




// Toggle menu visibility
CategorieMenu.addEventListener('click', () => {
    CaterieItems.classList.toggle('max-h-0');
    CaterieItems.classList.toggle('max-h-[500px]');
});

// Ensure product items exist
let productItems = document.querySelectorAll('.product_item'); // Using class

// Move first item to last on Next button click

const productSliderNext = () => {

    const CardsWidth = product_slider.children[0].clientWidth

    //Once Slider to end ,the first child to append to last child to Slider
    if (product_slider.scrollLeft >= product_slider.scrollWidth - product_slider.clientWidth) {
        let firstChild = product_slider.children[0];
        product_slider.appendChild(firstChild);
        product_slider.scrollLeft -= CardsWidth;
    }

    product_slider.scrollBy({ left: CardsWidth, behavior: "smooth" });
}

let nextTimeIntervel

next.addEventListener("click", () => {
    clearInterval(nextTimeIntervel)
    productSliderNext()
    automaticSlidermoving()

}
);
//Automatic Slider moving every 3s
const automaticSlidermoving = () => {
    nextTimeIntervel = setInterval(() => {

        productSliderNext()
    }, 3000)
}
automaticSlidermoving()


prv.addEventListener("click", () => {
    clearInterval(nextTimeIntervel)
    const CardsWidth = product_slider.children[0].clientWidth

    if (product_slider.scrollLeft == 0) {
        let LastChild = product_slider.children[product_slider.children.length - 1];
        product_slider.prepend(LastChild);
        product_slider.scrollLeft += CardsWidth;
    }

    product_slider.scrollBy({ left: -CardsWidth, behavior: "smooth" });
    automaticSlidermoving()
});


const menu_btn = document.querySelectorAll('.menu_btn')
menu_btn.forEach((menu) => {
    menu.addEventListener('click', () => {

        menu_btn.forEach((item) => {
            item.classList.remove('text-[#7fad39]')
        })
        menu.classList.add('text-[#7fad39]')
    })
})



// language select function

const countryName = document.querySelectorAll('#countryName_select_container p')
const flags = document.querySelectorAll('#flag')
const languages = document.querySelectorAll('#language')
countryName.forEach((lang) => {
    lang.addEventListener('click', (e) => {
        countryName.forEach((lang) => {
            lang.classList.remove('bg-white')
        })
        if (lang.innerText == 'English') {
            flags.forEach((flag) => {
                flag.src = `./img/americaFlag.png`
            })
        } else {
            flags.forEach((flag) => {
                flag.src = `./img/indianFlag.png`
            })
        }
        lang.classList.add('bg-white')
        languages.forEach((language) => {
            language.innerText = e.target.innerText
        })
    })
})

//Mobile menu 

const mobile_menu = document.getElementById('mobile_menu_items')
//Open Mobile Menu
document.getElementById('menu_icon').addEventListener('click', () => {
    mobile_menu.classList.remove('hidden')
    BODY.classList.add('overflow-hidden')
    setTimeout(() => {
        mobile_menu.children[0].classList.remove('translate-x-[-100%]')
        mobile_menu.children[0].classList.add('translate-x-0')
    }, 500)
})

const CloseMobileMenu = () => {
    mobile_menu.children[0].classList.add('translate-x-[-100%]')
    mobile_menu.children[0].classList.remove('translate-x-0')
    setTimeout(() => {
        BODY.classList.remove('overflow-hidden')
        mobile_menu.classList.add('hidden')
    }, 500)
}

//Close Mobile Menu
document.getElementById('close_menu_icon').addEventListener('click', CloseMobileMenu)

//Close Menu Black Shadow
document.getElementById('black_shadow').addEventListener('click', CloseMobileMenu)

//Scroll to top
document.getElementById('up_arrow').addEventListener('click', () => {
    scrollTo({ top: 0, left: 0, behavior: "smooth" })
})

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

const FeaturedproductContainer = document.getElementById('Featured_product_Container')
const categoryTabs = document.querySelectorAll(".category-tab");

// Function to display products
const displayProducts = (category) => {
    FeaturedproductContainer.innerHTML = "";
    const filteredProducts = category === "all"
        ? featuredProduct
        : featuredProduct.filter(p => p.category.toLowerCase() === category.toLowerCase());

    filteredProducts.forEach((item, index) => {
        const div = document.createElement('div');
        div.accessKey = item.id;
        div.id = "featured_product_item";
        div.className = "border-[1px] border-gray-200 rounded-sm group opacity-0 scale-10 transition-all duration-500 ease-in-out transform bg-white p-5 rounded-lg";
        div.setAttribute("data-name", item.categorieName);
        div.innerHTML = `
            <div class="h-9/12 relative overflow-hidden">
                <img src="${item.ImageUrl}" class="h-full w-full object-contain group-hover:scale-110 duration-500" alt="">
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

        FeaturedproductContainer.appendChild(div);

        // Fade-in and scale effect with a staggered delay
        setTimeout(() => {
            div.classList.remove("opacity-0", "scale-10");
        }, index * 100);  // Each item appears with a slight delay
    });
};

// Event Listener for Category Click
categoryTabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        categoryTabs.forEach(tab => {
            tab.classList.remove("border-[#7fad39]", "border-b-2");
        });
        e.target.classList.add("border-[#7fad39]", "border-b-2");

        const category = e.target.dataset.category;
        displayProducts(category);
    });
});

// Load all products by default
displayProducts("all");






// Function to create product elements
const createProductCard = (item) => {

    const div = document.createElement('div');
    div.className = "group overflow-hidden box-border px-1 best_product_item";
    div.innerHTML = `
        <div class="flex w-full border-[1px] border-gray-200 relative rounded-sm overflow-hidden">
            <div class="h-[120px] relative overflow-hidden w-2/5">
                <img src="${item.ImageUrl}" class="h-full w-full object-contain" alt="${item.name}">
            </div>
            <div class="flex justify-start py-5 items-start px-5 flex-col w-8/12 font-mono">
                <p class="uppercase">${item.name}</p>
                <p class="font-extrabold text-[#7fad39] py-2">₹${item.price}</p>
            </div>
            <ion-icon class="absolute opacity-0 cursor-pointer group-hover:opacity-100 duration-200 z-10 right-0 top-0 p-2 bg-[#7fad39] text-white rounded-bl-sm" 
                name="cart" id="add_Cart" data-id="${item.id}">
            </ion-icon>
        </div>`;
    return div;
};

// Function to populate a slider
const populateSlider = (container, products) => {
    const sliceProductList = products.slice(0, 9)
    sliceProductList.forEach((item) => {
        container.appendChild(createProductCard(item));
    });

};

// Populate each section
populateSlider(latestProductSlider, featuredProduct);
populateSlider(topRatedProductSlider, featuredProduct);
populateSlider(bestReviewProductSlider, featuredProduct);

//Product automatically moving every 3s
setInterval(() => {
    nextProduct(latestProductSlider)
    nextProduct(topRatedProductSlider)
    nextProduct(bestReviewProductSlider)
}, 3000)

const nextProduct = (slider) => {
    const CardsWidth = slider.scrollWidth / 3

    //Once Slider to end ,the first child to append to last child to Slider
    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 20) {
        let firstThree = [
            slider.children[0],
            slider.children[1],
            slider.children[2]
        ];

        firstThree.forEach(child => slider.appendChild(child));

        slider.scrollLeft -= CardsWidth
    }

    slider.scrollBy({ left: CardsWidth, behavior: "smooth" });
}


const forwardProduct = (slider) => {
    const CardsWidth = Math.ceil(slider.scrollWidth / 3)
    console.log(slider.scrollLeft);

    //Once Slider to end ,the first child to append to last child to Slider
    if (slider.scrollLeft == 0) {
        const length = (slider.children.length) - 1
        let firstThree = [
            slider.children[length],
            slider.children[length - 1],
            slider.children[length - 2]
        ];

        firstThree.forEach(child => slider.prepend(child));

        slider.scrollLeft += CardsWidth;
    }

    slider.scrollBy({ left: -CardsWidth, behavior: "smooth" });
}

const latestProductBtn = document.getElementById('latest_product_btn')

latestProductBtn.addEventListener('click', (e) => {
    const id = e.target.id
    if (id == "back") {
        nextProduct(latestProductSlider)

    }
    if (id == "forward") {
        forwardProduct(latestProductSlider)
    }
})

const topRatedProductBtn = document.getElementById('top_Rated_product_btn')

topRatedProductBtn.addEventListener('click', (e) => {
    const id = e.target.id

    if (id == "back") {
        nextProduct(topRatedProductSlider)

    }
    if (id == "forward") {
        forwardProduct(topRatedProductSlider)
    }
})
const ReviewProductBtn = document.getElementById('Review_product_btn')

ReviewProductBtn.addEventListener('click', (e) => {
    const id = e.target.id
    if (id == "back") {
        nextProduct(bestReviewProductSlider)

    }
    if (id == "forward") {
        forwardProduct(bestReviewProductSlider)
    }
})



document.querySelectorAll('.best_product_item').forEach((item) => {
    item.addEventListener('click', (e) => {

        if (e.target.id == "add_Cart") {
            const id = e.target.dataset.id
            const selectedItem = featuredProduct.find((item) => item.id == id)
            if (!selectedItem) {
                return
            }
            const existingItem = cartList.find((item) => item.id == selectedItem.id)
            if (existingItem) {
                return alert('This item already in cart')
            }
            cartList.push(selectedItem)
            localStorage.setItem('CartList', JSON.stringify(cartList))
            CartCountDisplay()
            CartTotalAmount()
            alert('Item added to cart')

        }
    })
})


FeaturedproductContainer.addEventListener('click', (e) => {
    if (e.target.id == "add_Cart") {
        const id = e.target.accessKey
        const selectedItem = featuredProduct.find((item) => item.id == id)
        if (!selectedItem) {
            return
        }
        const existingItem = cartList.find((item) => item.id == selectedItem.id)
        if (existingItem) {
            return alert('This item already in cart')
        }
        cartList.push(selectedItem)
        localStorage.setItem('CartList', JSON.stringify(cartList))
        CartCountDisplay()
        CartTotalAmount()
        alert('Item added to cart')

    } else if (e.target.id == "add_wishlist") {
        const id = e.target.accessKey
        const selectedItem = featuredProduct.find((item) => item.id == id)
        if (!selectedItem) {
            return
        }
        const existingItem = wishList.find((item) => item.id == selectedItem.id)
        if (existingItem) {
            return alert('This item already in Wishlist')
        }
        wishList.push(selectedItem)
        localStorage.setItem('WishList', JSON.stringify(wishList))
        wishListCountDisplay()
        alert('Item added to Wishlist')
    }
}
)


//WishList Count Display
const wishListCountDisplay = () => {
    const countContainer = document.querySelectorAll('#WishListCountContainer')

    countContainer.forEach((WishListCountIcon) => {
        let wishListCountDiv = WishListCountIcon.querySelector('#WishListCount');
        if (wishList.length > 0) {
            if (!wishListCountDiv) {
                const countDiv = document.createElement('div')
                countDiv.id = "WishListCount"
                countDiv.className = "absolute top-[-5px] right-[-10px] bg-[#7fad39] rounded-full text-white h-3.5 w-3.5 text-[10px] text-center font-bold"
                countDiv.innerText = wishList.length
                WishListCountIcon.appendChild(countDiv)
            }
            else {
                wishListCountDiv.innerText = wishList.length
            }
        }
        else {
            if (wishListCountDiv) {
                wishListCountDiv.remove();

            }
        }
    })
}
wishListCountDisplay()