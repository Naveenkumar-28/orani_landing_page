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

const cartItemDisplay = () => {

    cartItemContainer.innerHTML = ""
    cartList.map((item) => {
        const div = document.createElement('div')
        div.className = "py-5 flex gap-5 h-44"
        div.id = "cart_Item"
        div.innerHTML = ` <div class=" w-6/12 overflow-hidden">
                            <img src=${item.ImageUrl} class="w-full h-full object-cover" alt="" srcset="">
                        </div>
                        <div class="w-6/12 flex flex-col gap-5">
                            <div class="flex justify-between items-center gap-3">
                                <p class="font-bold capitalize  text-lg line-clamp-2 ">${item.name}</p>
                                <ion-icon id="trash_icon" data-id=${item.id} class="text-xl cursor-pointer text-red-600"
                                    name="trash-outline"></ion-icon>
                            </div>
                            <p class="text-lg font-bold">₹ ${item.price * item.quantity}</p>
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
            alert("Your order Successfully")
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
        name: "Mutton Meat",
        price: 30,
        ImageUrl: "./img/featured/feature-1.jpg",
        categorieName: "Fresh Meat",
        quantity: 1
    },
    {
        id: 2,
        name: "Bananna",
        price: 30,
        ImageUrl: "./img/featured/feature-2.jpg",
        categorieName: "Vegetables",
        quantity: 1
    },
    {
        id: 3,
        name: "Green Guava",
        price: 30,
        ImageUrl: "./img/featured/feature-3.jpg",
        categorieName: "Oranges",
        quantity: 1
    },
    {
        id: 4,
        name: "Watermolone",
        price: 30,
        ImageUrl: "./img/featured/feature-4.jpg",
        categorieName: "Oranges",
        quantity: 1
    },
    {
        id: 5,
        name: "Grapes",
        price: 30,
        ImageUrl: "./img/featured/feature-5.jpg",
        categorieName: "Vegetables",
        quantity: 1
    },
    {
        id: 6,
        name: "Burger",
        price: 30,
        ImageUrl: "./img/featured/feature-6.jpg",
        categorieName: "Fastfood",
        quantity: 1
    },
    {
        id: 7,
        name: "Mango",
        price: 30,
        ImageUrl: "./img/featured/feature-7.jpg",
        categorieName: "Oranges",
        quantity: 1
    },
    {
        id: 8,
        name: "Apple",
        price: 30,
        ImageUrl: "./img/featured/feature-8.jpg",
        categorieName: "Fastfood",
        quantity: 1
    },
]

const FeaturedproductContainer = document.getElementById('Featured_product_Container')

featuredProduct.map((item) => {
    const div = document.createElement('div')
    div.accessKey = item.id
    div.id = "featured_product_item"
    div.className = "duration-500"
    div.setAttribute("data-name", item.categorieName)
    div.innerHTML = `
                    <div class="h-9/12 relative overflow-hidden">
                        <img src=${item.ImageUrl} class="h-full w-full" alt="">
                        <div
                            class="flex translate-y-[100%] duration-500 absolute bottom-0 left-0 justify-center pb-5 gap-5 items-end w-full h-[50%]">
                            <ion-icon
                                class="hover:bg-[#7fad39] animate-rotate duration-500 hover:text-white text-xl bg-white border-[1px] border-gray-200 p-2 rounded-full"
                                name="heart"></ion-icon>
                            <ion-icon
                                class="hover:bg-[#7fad39] animate-rotate duration-500 hover:text-white text-xl bg-white border-[1px] border-gray-200 p-2 rounded-full"
                                name="sync"></ion-icon>
                            <ion-icon 
                                class="hover:bg-[#7fad39] animate-rotate duration-500 hover:text-white text-xl bg-white border-[1px] border-gray-200 p-2 rounded-full"
                                name="cart" accessKey=${item.id}   id="add_Cart"></ion-icon>
                        </div>
                    </div>
                    <div class="flex justify-center items-center flex-col h-3/12">
                        <p>${item.name}</p>
                        <p class="font-extrabold">₹${item.price}.00</p>
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
        alert('Item added to cart')

    }
}
)

// .addEventListener('click', (e) => {
//     console.log('hi');
// })