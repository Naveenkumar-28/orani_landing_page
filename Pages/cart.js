const cartItemContainer = document.getElementById('cart_Item_Container')
const CheckoutTotal = document.getElementById('total')
let cartList = JSON.parse(localStorage.getItem('CartList')) || []
let wishList = JSON.parse(localStorage.getItem('WishList')) || []


//Mobile menu 
const mobile_menu = document.getElementById('mobile_menu_items')
//Open Mobile Menu
document.getElementById('menu_icon').addEventListener('click', () => {
    mobile_menu.classList.remove('hidden')
    document.querySelector("body").classList.add('overflow-hidden')
    setTimeout(() => {
        mobile_menu.children[0].classList.remove('translate-x-[-100%]')
        mobile_menu.children[0].classList.add('translate-x-0')
    }, 500)
})

const CloseMobileMenu = () => {
    mobile_menu.children[0].classList.add('translate-x-[-100%]')
    mobile_menu.children[0].classList.remove('translate-x-0')
    setTimeout(() => {
        document.querySelector("body").classList.remove('overflow-hidden')
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

// Update localStorage after modifying cartList
const updateLocalStorage = () => {
    localStorage.setItem('CartList', JSON.stringify(cartList));
};

//cartItem display to frontend
const CartTotalAmount = () => {
    const total = cartList.reduce((acc, value) => {
        return acc + (value.quantity * value.price)
    }, 0)
    document.querySelectorAll('#total_price').forEach((totalPriceDiv) => {
        totalPriceDiv.innerText = `₹${total}.00`
    })
    CheckoutTotal.innerHTML = `₹${(total - 20) + 50}.00`
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
const cartItemDisplay = () => {
    if (cartList.length > 0) {
        cartItemContainer.innerHTML = ""
        cartList.map((item) => {
            const div = document.createElement('div')
            div.className = "w-full flex border-b border-gray-200 lg:h-auto sm:h-32 h-24 sm:gap-2 gap-1 select-none"
            div.id = "cart_Item"
            div.innerHTML = ` <div class="lg:w-3/12 w-4/12 justify-center items-center flex ">
                        <ion-icon id="close_icon"
                            class="text-sm p-1 border-[1px] border-gray-300 hover:bg-gray-100 cursor-pointer" data-id=${item.id}
                            name="close-outline"></ion-icon>
                        <div class="h-[70%] w-10/12">
                            <img class="h-full w-full object-contain" src=${"." + item.ImageUrl} alt="">
                        </div>
                    </div>
                    <div class="lg:w-4/12 w-4/12  justify-center flex flex-col items-center">
                        <h4 class="font-medium mb-2 sm:text-center w-full">${item.name}</h4>
                        <p class="line-clamp-2 text-gray-500 lg:text-base text-sm">Far far away, behind the word
                            mountains, far
                            from the
                            countries
                        </p>
                    </div>
                    <div class="lg:w-1/12  justify-center items-center lg:flex hidden font-semibold ">₹${item.price}</div>
                    <div class="lg:w-2/12 w-2/12 justify-center items-center flex gap-1 md:gap-3">
                        <ion-icon id="remove"
                            class="bg-[#7fad39] text-sm p-[2px] cursor-pointer rounded-sm text-white sm:text-lg sm:p-1" data-id=${item.id}
                            name="remove-outline"></ion-icon>
                        <p class="sm:w-5  text-center md:text-base text-sm w-4">${item.quantity}</p>
                         <ion-icon id="add"
                            class="bg-[#7fad39] cursor-pointer text-sm p-[2px] rounded-sm text-white sm:text-lg sm:p-1" data-id=${item.id}
                            name="add-outline"></ion-icon>
                       
                    </div>
                    <div class="lg:w-2/12 w-2/12  justify-center items-center flex font-semibold ">₹${item.price * item.quantity}</div>
`


            cartItemContainer.appendChild(div)

        })
        CartTotalAmount()
        CartCountDisplay()
    } else {
        cartItemContainer.innerHTML = ""
        const div = document.createElement('div')
        div.className = "flex justify-center items-center h-full text-lg text-gray-400 mt-20"
        div.innerHTML = `<div>Your Cart is empty </div>`

        cartItemContainer.appendChild(div)
    }
}

const cartListener = (e) => {
    const id = e.target.dataset.id

    if (e.target.id == "close_icon") {

        let filterCartList = cartList.filter((item) => item.id != id)
        cartList = [...filterCartList]
        cartItemDisplay()
        CartTotalAmount()
        CartCountDisplay()
        updateLocalStorage()

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
        updateLocalStorage()
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
        updateLocalStorage()

    }
    else if (e.target.id == "place_Order") {
        if (cartList.length > 0) {

            cartList = []
            cartItemDisplay()
            updateLocalStorage()
            return alert("Your order Successfully")
        }
        alert('first select your product then place the order')

    }

}
const cartItem = document.querySelectorAll('#cart_Item')

// Attach event listener to cart container
cartItemContainer.addEventListener('click', cartListener)

// Initial cart display
cartItemDisplay()

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