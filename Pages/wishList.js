
// const wishlist = JSON.parse(localStorage.getItem('WishList')) || []
// const cartlist = JSON.parse(localStorage.getItem('CartList')) || []
const wishListContainer = document.getElementById('wishList_Container')

const updateWishlistToLocalstorage = () => {

    localStorage.setItem("WishList", JSON.stringify(wishList))
}

const wishListItemDisplay = () => {
    wishListContainer.innerHTML = ""
    if (wishList.length > 0) {
        wishList.forEach((list) => {
            const div = document.createElement('div')
            div.className = "flex border-b border-gray-300 py-10"
            div.innerHTML = `<div class="lg:w-4/12 w-6/12 h-full relative">
                            <img class="h-full w-full object-contain" src=${"." + list.ImageUrl} alt="Product_Img">
                            <ion-icon data-id=${list.id} id="remove"
                                class="absolute top-0 left-0 border border-gray-200 p-1 cursor-pointer hover:bg-[#7fad39] hover:text-white hover:border-[#7fad39]"
                                name="close-outline"></ion-icon>
                        </div>
                        <div class="lg:w-7/12 w-6/12 flex flex-col gap-2 ps-5">
                            <h5 class="font-medium md:text-xl text-lg uppercase">${list.name}</h5>
                            <div class="flex flex-col gap-5">
                                <p class="text-gray-500 line-clamp-4 md:text-base text-sm">
                                    Far far away, behind the word mountains, far from the countries.
                                    Far far away, behind the word mountains, far from the countries
                                    Far far away, behind the word mountains, far from the countries
                                    Far far away, behind the word mountains, far from the countries</p>
        
                                <div class="flex items-center">
                                    <ion-icon data-id=${list.id} class="bg-[#7fad39] p-1 text-white rounded-sm text-xl cursor-pointer" id="minus"
                                        name="remove-outline"></ion-icon>
                                    <p class="w-10 text-center">${list.quantity}</p>
                                    <ion-icon data-id=${list.id} class="bg-[#7fad39] p-1 text-white rounded-sm text-xl cursor-pointer"
                                        name="add-outline" id="add"></ion-icon>
                                </div>
                                <p class="font-normal text-lg">₹${list.price}.00</p>
                                <button id="add_Cart" data-id=${list.id}
                                    class="bg-[#7fad39] w-fit focus:bg-blue-600 text-sm md:text-base focus:border-blue-600 focus:text-white shadow-2xl border-2 border-transparent hover:border-[#7fad39] hover:text-[#7fad39] hover:bg-white duration-200 cursor-pointer text-white py-3 font-normal  rounded-full px-5">
                                    Add to Cart
                                </button>
                            </div>
                        </div>`
            wishListContainer.appendChild(div)
        })
    } else {
        const div = document.createElement('div')
        div.className = "h-42 flex justify-center items-center"
        div.innerHTML = `<div class="text-gray-400 text-lg text-center">Your Wishlist is empty</div>`
        wishListContainer.appendChild(div)
    }
}
wishListItemDisplay()


wishListContainer.addEventListener('click', (e) => {
    const id = e.target.dataset.id

    switch (e.target.id) {
        case "minus":
            wishList = wishList.map((item) => item.id == id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item)
            wishListItemDisplay()
            updateWishlistToLocalstorage()
            break;
        case "add":
            wishList = wishList.map((item) => item.id == id ? { ...item, quantity: Math.min(item.quantity + 1, 15) } : item)
            wishListItemDisplay()
            updateWishlistToLocalstorage()
            break;
        case "add_Cart":
            if (cartList.find((item) => item.id == id)) return alert("Item already in Cart")
            const newList = wishList.find((item) => item.id == id)
            wishList = wishList.filter((item) => item.id != id)
            cartList.push(newList)
            localStorage.setItem('CartList', JSON.stringify(cartList))
            alert("Item added to your Cart")
            updateWishlistToLocalstorage()
            CartCountDisplay()
            wishListCountDisplay()
            wishListItemDisplay()
            break;
        case "remove":
            wishList = wishList.filter((item) => item.id != id)
            wishListItemDisplay()
            wishListCountDisplay()
            updateWishlistToLocalstorage()
            break;
        default:
            break;
    }

})