// Update localStorage after modifying cartList
const updateLocalStorage = () => {
    localStorage.setItem('CartList', JSON.stringify(cartList));
};

// init CartItem Display to frontend 
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
                    <div class="lg:w-1/12  justify-center items-center lg:flex hidden font-medium ">₹${item.price}</div>
                    <div class="lg:w-2/12 w-2/12 justify-center items-center flex gap-1 md:gap-3">
                        <ion-icon id="remove"
                            class="bg-[#7fad39] text-sm p-[2px] cursor-pointer rounded-sm text-white sm:text-lg sm:p-1" data-id=${item.id}
                            name="remove-outline"></ion-icon>
                        <p class="sm:w-5  text-center md:text-base text-sm w-4">${item.quantity}</p>
                         <ion-icon id="add"
                            class="bg-[#7fad39] cursor-pointer text-sm p-[2px] rounded-sm text-white sm:text-lg sm:p-1" data-id=${item.id}
                            name="add-outline"></ion-icon>
                       
                    </div>
                    <div class="lg:w-2/12 w-2/12  justify-center items-center flex font-medium ">₹${item.price * item.quantity}</div>
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
}

// Attach event listener to cart container
cartItemContainer.addEventListener('click', cartListener)

// Initial cart display
cartItemDisplay()

