// Selecting elements
const BODY = document.getElementById('body')
const CategorieMenu = document.getElementById('CategorieMenu');
const CaterieItems = document.getElementById('CaterieItems');
const next = document.getElementById('next');
const prv = document.getElementById('prv');
const product_slider = document.getElementById('product_slider');
const cartContainer = document.getElementById('cart_container')
const cartItemContainer = document.getElementById('cart_Item_Container')
let cartList = []

//cartItem display to frontend

const CartTotalAmount = () => {
    const total = cartList.reduce((acc, value) => {
        return acc + (value.quantity * value.price)
    }, 0)
    document.getElementById('total_price').innerText = `₹ ${total}`
}

const CartCountDisplay = () => {
    const countContainer = document.getElementById('cartCountContainer')
    const cartcountDiv = document.getElementById('Cartcount')
    console.log(cartcountDiv);

    if (cartList.length > 0) {
        if (!cartcountDiv) {
            const countDiv = document.createElement('div')
            countDiv.id = "Cartcount"
            countDiv.className = "absolute top-[-5px] right-[-10px] bg-[#7fad39] rounded-full text-white h-3.5 w-3.5 text-[10px] text-center font-bold"
            countDiv.innerText = cartList.length
            countContainer.appendChild(countDiv)
        }
        else {
            cartcountDiv.innerText = cartList.length
        }

    }
    else {
        if (cartcountDiv) {
            countContainer.removeChild(cartcountDiv)
        }
    }


}
const cartItemDisplay = () => {

    cartItemContainer.innerHTML = ""
    cartList.map((item) => {
        const div = document.createElement('div')
        div.className = "py-5 flex gap-5 h-44"
        div.id = "cart_Item"
        div.innerHTML = ` <div class=" w-6/12 overflow-hidden">
                            <img src=${item.ImageUrl} class="w-full h-full object-contain" alt="product_Img" srcset="">
                        </div>
                        <div class="w-6/12 flex flex-col gap-5">
                            <div class="flex justify-between items-center gap-3">
                                <p class="font-bold  text-lg line-clamp-2 font-mono uppercase">${item.name}</p>
                                <ion-icon id="trash_icon" data-id=${item.id} class="text-xl cursor-pointer text-red-600"
                                    name="trash-outline"></ion-icon>
                            </div>
                            <p class="text-lg font-mono ">₹ ${item.price * item.quantity}</p>
                            <div class="flex items-center">
                                <ion-icon id="remove" data-id=${item.id}
                                    class="bg-[#7fad39] cursor-pointer text-white p-1 rounded-sm text-xl font-extrabold"
                                    name="remove-outline"></ion-icon>
                                <p class="w-10 text-center text-lg">${item.quantity}</p>
                                <ion-icon  data-id=${item.id}
                                    class="bg-[#7fad39] cursor-pointer text-white p-1 rounded-sm text-xl font-extrabold" id="add"
                                    name="add-outline"></ion-icon>
                            </div>
                        </div>`

        cartItemContainer.appendChild(div)
    })
    CartTotalAmount()
    CartCountDisplay()
}

addEventListener('DOMContentLoaded', () => {
    cartItemDisplay()
})

cartContainer.addEventListener('click', (e) => {


    const id = e.target.dataset.id


    if (e.target.id == "trash_icon") {

        let filterCartList = cartList.filter((item) => item.id != id)
        cartList = [...filterCartList]
        cartItemDisplay()

    } else if (e.target.id == "add") {

        let cartItemQtyAdded = cartList.map((item) => {
            if (item.id == id) {
                return {
                    ...item,
                    quantity: item.quantity < 15 ? item.quantity + 1 : item.quantity
                }
            }
            return item
        })
        cartList = [...cartItemQtyAdded]
        cartItemDisplay()
    }
    else if (e.target.id == "remove") {

        let cartItemQtyminus = cartList.map((item) => {
            if (item.id == id) {
                return {
                    ...item,
                    quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity
                }
            }
            return item
        })
        cartList = [...cartItemQtyminus]
        cartItemDisplay()
    } else if (e.target.id == "cart_close_icon") {
        cartContainer.children[0].classList.add('translate-x-[100%]')
        cartContainer.children[0].classList.remove('translate-x-0')
        setTimeout(() => {
            cartContainer.classList.add('hidden')
            cartContainer.classList.remove('flex')

        }, 500)
        BODY.classList.remove('overflow-hidden')
    }
    else if (e.target.id == "cart_black_layer") {
        cartContainer.children[0].classList.add('translate-x-[100%]')
        cartContainer.children[0].classList.remove('translate-x-0')
        setTimeout(() => {
            cartContainer.classList.add('hidden')
            cartContainer.classList.remove('flex')

        }, 500)
        BODY.classList.remove('overflow-hidden')
    }
    else if (e.target.id == "place_Order") {
        if (cartList.length > 0) {

            cartList = []
            cartItemDisplay()
            return alert("Your order Successfully")
        }
        alert('first select your product then place the order')

    }

})

document.querySelectorAll('#cart_icon').forEach((cartIcon) => {
    cartIcon.addEventListener('click', () => {
        BODY.classList.add('overflow-hidden')
        cartContainer.classList.remove('hidden')
        cartContainer.classList.add('flex')
        cartItemDisplay()
        setTimeout(() => {

            cartContainer.children[0].classList.remove('translate-x-[100%]')
            cartContainer.children[0].classList.add('translate-x-0')

        }, 500)



    })

})



// Toggle menu visibility
CategorieMenu.addEventListener('click', () => {
    // CaterieItems.classList.toggle('h-0');
    CaterieItems.classList.toggle('max-h-[500px]');
});

// Ensure product items exist
let productItems = document.querySelectorAll('.product_item'); // Using class

// Move first item to last on Next button click
// next.addEventListener("click", () => {
//     if (product_slider.children.length > 0) {
//         let firstChild = product_slider.children[0];
//         // product_slider.classList.add('move')
//         product_slider.appendChild(firstChild); // Moves first child to last position
//     }
// });

next.addEventListener("click", () => {
    const WIDTH = product_slider.offsetWidth
    if (WIDTH < 550) {
        return product_slider.scrollBy({ left: product_slider.clientWidth / 1, behavior: "smooth" });
    }
    else if (WIDTH < 610) {
        return product_slider.scrollBy({ left: product_slider.clientWidth / 2, behavior: "smooth" });

    }
    else if (WIDTH < 870) {
        return product_slider.scrollBy({ left: product_slider.clientWidth / 3, behavior: "smooth" });

    }

    product_slider.scrollBy({ left: product_slider.clientWidth / 4, behavior: "smooth" });
});
prv.addEventListener("click", () => {
    const WIDTH = product_slider.offsetWidth
    if (WIDTH < 550) {
        return product_slider.scrollBy({ left: -product_slider.clientWidth / 1, behavior: "smooth" });
    }
    else if (WIDTH < 610) {
        return product_slider.scrollBy({ left: -product_slider.clientWidth / 2, behavior: "smooth" });

    }
    else if (WIDTH < 870) {
        return product_slider.scrollBy({ left: -product_slider.clientWidth / 3, behavior: "smooth" });

    }
    product_slider.scrollBy({ left: -product_slider.clientWidth / 4, behavior: "smooth" });
});


const featured_product_list = document.querySelectorAll('#featured_product_list p')
featured_product_list.forEach((item) => {
    item.addEventListener('click', () => {
        featured_product_list.forEach((item) => {
            item.classList.remove('border-b-2')
            item.classList.remove('border-[#7fad39]')
        })
        item.classList.add('border-b-2')
        item.classList.add('border-[#7fad39]')

        const featured_product_item = document.querySelectorAll('#featured_product_item')
        featured_product_item.forEach((product) => {
            product.classList.remove('scale-0')
        })
        if (!(item.innerText.toLowerCase() == "all")) {
            featured_product_item.forEach((product) => {
                const select_name = item.innerText.toLowerCase()
                if (!select_name.includes(product.dataset.name.toLowerCase())) {
                    product.classList.add('scale-0')
                }

            })
        }
    })
})


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
countryName.forEach((lang) => {
    lang.addEventListener('click', (e) => {
        countryName.forEach((lang) => {
            lang.classList.remove('selected')
        })
        if (lang.innerText == 'English') {
            document.getElementById('flag').src = `./img/americaFlag.png`
        } else {
            document.getElementById('flag').src = `./img/indianFlag.png`
        }
        lang.classList.add('selected')
        document.getElementById('language').innerText = e.target.innerText
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
        categorieName: "Fresh Meat",
        quantity: 1
    },
    {
        id: 2,
        name: "Strawberry",
        price: 50,
        ImageUrl: "./img/featured/product-2.jpg",
        categorieName: "Vegetables",
        quantity: 1
    },
    {
        id: 3,
        name: "Green Beans",
        price: 20,
        ImageUrl: "./img/featured/product-3.jpg",
        categorieName: "Oranges",
        quantity: 1
    },
    {
        id: 4,
        name: "Purple Cabbage",
        price: 70,
        ImageUrl: "./img/featured/product-4.jpg",
        categorieName: "Oranges",
        quantity: 1
    },
    {
        id: 5,
        name: "Tomatoe",
        price: 100,
        ImageUrl: "./img/featured/product-5.jpg",
        categorieName: "Vegetables",
        quantity: 1
    },
    {
        id: 6,
        name: "Brocolli",
        price: 50,
        ImageUrl: "./img/featured/product-6.jpg",
        categorieName: "Fastfood",
        quantity: 1
    },
    {
        id: 7,
        name: "Carrots",
        price: 120,
        ImageUrl: "./img/featured/product-7.jpg",
        categorieName: "Oranges",
        quantity: 1
    },
    {
        id: 8,
        name: "Fruit Juice",
        price: 60,
        ImageUrl: "./img/featured/product-8.jpg",
        categorieName: "Fastfood",
        quantity: 1
    },
]

const FeaturedproductContainer = document.getElementById('Featured_product_Container')

featuredProduct.map((item) => {
    const div = document.createElement('div')
    div.accessKey = item.id
    div.id = "featured_product_item"
    div.className = "duration-500 border-[1px] border-gray-200 rounded-sm group"
    div.setAttribute("data-name", item.categorieName)
    div.innerHTML = `
                    <div class="h-9/12 relative overflow-hidden ">
                        <img src=${item.ImageUrl} class="h-full w-full object-contain group-hover:scale-110 duration-500" alt="">
                        <div
                            class="flex translate-y-[100%] group-hover:translate-y-0 duration-500 absolute bottom-0 left-0 justify-center pb-5 gap-5 items-end w-full h-[50%]">
                            <ion-icon
                                class="hover:bg-[#7fad39] hover:rotate-[360deg] animate-rotate duration-500 hover:text-white text-xl bg-white border-[1px] border-gray-200 p-2 rounded-full"
                                name="heart"></ion-icon>
                            <ion-icon
                                class="hover:bg-[#7fad39] hover:rotate-[360deg] animate-rotate duration-500 hover:text-white text-xl bg-white border-[1px] border-gray-200 p-2 rounded-full"
                                name="sync"></ion-icon>
                            <ion-icon 
                                class="hover:bg-[#7fad39] hover:rotate-[360deg] animate-rotate duration-500 hover:text-white text-xl bg-white border-[1px] border-gray-200 p-2 rounded-full"
                                name="cart" accessKey=${item.id}   id="add_Cart"></ion-icon>
                        </div>
                    </div>
                    <div class="flex justify-center items-center flex-col h-3/12">
                        <p class="font-mono uppercase">${item.name}</p>
                        <p class="font-medium text-[#7fad39]">₹${item.price}.00</p>
                    </div>`
    FeaturedproductContainer.appendChild(div)
})

// Cart Add Function 
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
        CartCountDisplay()
        alert('Item added to cart')

    }
}
)


//Latest Products display to frontend
const latestProductsContainer = document.getElementById('latest_product_container')
featuredProduct.map((item) => {
    const div = document.createElement('div')
    div.className = " relative group flex w-full border-[1px] border-gray-200 rounded-sm overflow-hidden"
    div.id = "best_product_item"
    div.innerHTML = `
                    <div class="h-[120px] relative overflow-hidden w-2/5 ">
                        <img src=${item.ImageUrl} class="h-full w-full object-contain" alt="">
                    </div>
                    <div class="flex justify-start py-5 items-start px-5 flex-col w-8/12 font-mono ">
                        <p class="uppercase">${item.name}</p>
                        <p class="font-extrabold text-[#7fad39] py-2">₹${item.price}</p>
                    </div>
                    <ion-icon
                        class="absolute opacity-0 cursor-pointer group-hover:opacity-100 duration-200 z-10 right-0 top-0 p-2 bg-[#7fad39] text-white rounded-bl-sm"
                        name="cart" id="add_Cart" data-id=${item.id}></ion-icon>`

    latestProductsContainer.appendChild(div)
})

//Top Rated Products display to frontend
const topRatedProductsContainer = document.getElementById('Top_rated_products_container')
featuredProduct.map((item) => {
    const div = document.createElement('div')
    div.className = " relative group flex w-full border-[1px] border-gray-200 rounded-sm overflow-hidden"
    div.id = "best_product_item"
    div.innerHTML = `
                    <div class="h-[120px] relative overflow-hidden w-2/5 ">
                        <img src=${item.ImageUrl} class="h-full w-full object-contain" alt="">
                    </div>
                    <div class="flex justify-start py-5 items-start px-5 flex-col w-8/12 font-mono ">
                        <p class="uppercase">${item.name}</p>
                        <p class="font-extrabold text-[#7fad39] py-2">₹${item.price}</p>
                    </div>
                    <ion-icon
                        class="absolute opacity-0 cursor-pointer group-hover:opacity-100 duration-200 z-10 right-0 top-0 p-2 bg-[#7fad39] text-white rounded-bl-sm"
                        name="cart" id="add_Cart" data-id=${item.id}></ion-icon>`

    topRatedProductsContainer.appendChild(div)
})
// Best Review Products display to frontend
const bestReviewProductsContainer = document.getElementById('best_Review_Products_container')
featuredProduct.map((item) => {
    const div = document.createElement('div')
    div.className = " relative group flex w-full border-[1px] border-gray-200 rounded-sm overflow-hidden"
    div.id = "best_product_item"
    div.innerHTML = `
                    <div class="h-[120px] relative overflow-hidden w-2/5 ">
                        <img src=${item.ImageUrl} class="h-full w-full object-contain" alt="">
                    </div>
                    <div class="flex justify-start py-5 items-start px-5 flex-col w-8/12 font-mono ">
                        <p class="uppercase">${item.name}</p>
                        <p class="font-extrabold text-[#7fad39] py-2">₹${item.price}</p>
                    </div>
                    <ion-icon
                        class="absolute opacity-0 cursor-pointer group-hover:opacity-100 duration-200 z-10 right-0 top-0 p-2 bg-[#7fad39] text-white rounded-bl-sm"
                        name="cart" id="add_Cart" data-id=${item.id}></ion-icon>`

    bestReviewProductsContainer.appendChild(div)
})

document.querySelectorAll('#best_product_item').forEach((item) => {
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
            CartCountDisplay()
            alert('Item added to cart')

        }
    })
})