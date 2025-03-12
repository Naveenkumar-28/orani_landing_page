const HeaderDiv = document.createElement('div')
HeaderDiv.innerHTML = `
   <!-- Mobile Slider  -->
    <div id="mobile_menu_items" class="fixed h-full w-full z-[100] hidden lg:hidden">

        <div class="w-12/12 sm:w-7/12 md:w-6/12 h-full bg-white z-50 px-5 pt-2 duration-500 translate-x-[-100%]">
            <div class="flex flex-col h-full justify-between pb-5">
                <div>
                    <div class="flex justify-between items-center ">
                        <div class="h-15 w-25 overflow-hidden flex"><img class="h-full w-full object-contain"
                                src="../img/logo.png" alt="" srcset="">
                        </div>

                        <div id="close_menu_icon" class="py-3 text-3xl flex justify-end px-2 cursor-pointer">
                            <ion-icon name="close"></ion-icon>
                        </div>
                    </div>

                    <div class="flex justify-between group ">
                        <div id="language_container"
                            class="flex py-3  items-center px-5 gap-2 cursor-pointer relative ">
                            <div class="h-4 w-7 overflow-hidden flex justify-center items-center"><img
                                    class="object-cover " id="flag" src="../img/americaFlag.png" alt="" srcset=""></div>
                            <div id="language" class="font-normal ms-1 text-[14px]">English</div>
                            <ion-icon class="text-[13px]" name="chevron-down-outline"></ion-icon>
                            <div id="countryName_select_container"
                                class="bg-gray-200 group-hover:flex hidden duration-300 p-2 rounded-sm absolute bottom-[-100px] z-20 right-0 w-full justify-center flex-col items-center">
                                <p
                                    class="font-normal text-[14px] py-3 bg-white w-full text-center duration-500 rounded-sm">
                                    English
                                </p>
                                <p class="font-normal text-[14px] py-3 w-full text-center duration-500 rounded-sm">
                                    Tamil</p>
                            </div>
                        </div>
                        <div class="flex items-center px-5 cursor-pointer">
                            <ion-icon name="person"></ion-icon>
                            <p class="font-normal ms-1 text-[14px]">Login</p>
                        </div>
                    </div>
                    <div class="flex gap-2 items-center justify-center py-3 border-b-2 border-gray-200">
                        <div class="relative" id="WishListCountContainer">
                            <ion-icon class="text-2xl cursor-pointer" name="heart"></ion-icon>

                        </div>
                        <div class="relative h-full" id="cartCountContainer">
                            <ion-icon id="cart_icon" class="text-2xl ms-3 cursor-pointer" name="bag-handle"></ion-icon>

                        </div>

                        <div class="flex ms-5">
                            <p>item:</p>
                            <p id="total_price" class="font-semibold ms-2 text-[#7fad39]">₹0</p>
                        </div>
                    </div>
                    <ul class="gap-2 flex flex-col mt-5 ">
                        <li
                            class="menu_btn py-2 hover:bg-gray-100 rounded-sm flex justify-center items-center  font-medium text-balance uppercase text-[#7fad39]">
                            <a href="#">Home</a>
                        </li>
                        <li
                            class="menu_btn py-2 relative group hover:bg-gray-100 rounded-sm flex justify-center items-center font-medium text-balance uppercase">
                            <a href="./Pages/shop.html">Shop</a>
                            <div class="absolute hidden  group-hover:block top-0 right-0">
                                <ul
                                    class=" flex  w-36 bg-white px-5 shadow-2xl py-3 font-light text-sm flex-col flex-nowrap gap-2 rounded-sm">
                                    <li><a class="hover:text-[#7fad39]" href="./Pages/shop.html">Shop</a></li>
                                    <li><a class="hover:text-[#7fad39]" href="./Pages/wishList.html">Wishlist</a></li>
                                    <li><a class="hover:text-[#7fad39]" href="./Pages/singleProduct.html">Single
                                            Product</a>
                                    </li>
                                    <li><a class="hover:text-[#7fad39]" href="./Pages/cart.html">Cart</a></li>
                                    <li><a class="hover:text-[#7fad39]" href="./Pages/checkout.html">Checkout</a></li>
                                </ul>
                            </div>
                        </li>
                        <li
                            class="menu_btn py-2 hover:bg-gray-100 rounded-sm flex justify-center items-center font-medium text-balance uppercase">
                            <a href="#">Pages</a>
                        </li>
                        <li
                            class="menu_btn py-2 hover:bg-gray-100 rounded-sm flex justify-center items-center font-medium text-balance uppercase">
                            <a href="./Pages/blog.html">Blog</a>
                        </li>
                        <li
                            class="menu_btn py-2 hover:bg-gray-100 rounded-sm flex justify-center items-center font-medium text-balance uppercase">
                            <a href="./Pages/contact.html">Contact</a>
                        </li>
                    </ul>
                </div>

                <div class="flex flex-col gap-2 items-center justify-center">
                    <div class="flex items-center pe-5">
                        <ion-icon name="mail"></ion-icon>
                        <div class="font-normal ms-1 text-[14px]">hello@colorlib.com</div>
                    </div>
                    <div class="ps-5 font-normal text-[14px]">Free Shipping for all Order of ₹99</div>
                </div>
            </div>
        </div>
        <div id="black_shadow" class="bg-gray-700 absolute top-0 w-full h-full z-[-10] opacity-50">
        </div>
    </div>

    <!-- Header -->
    <header class="lg:h-10 w-full bg-[#7fad39] text-white  hidden lg:block ">
        <div
            class="lg:flex justify-between items-center h-full lg:container   mx-auto  lg:px-20 container md:px-20 px-10 2xl:px-52">
            <div class="flex items-center justify-center">
                <div class="flex items-center pe-5 text-sm">
                    <ion-icon name="mail"></ion-icon>
                    <div class=" ms-1 text-[12px]">hello@colorlib.com</div>
                </div>
                <div class="h-6 bg-gray-300 w-[2px] rounded-full"></div>
                <div class="ps-5 font-normal text-[12px]">Free Shipping for all Order of ₹99</div>
            </div>
            <div class="flex items-center group">
                <div id="language_container" class="flex py-3   items-center px-5 gap-2 cursor-pointer relative ">
                    <div class="h-4 w-7 overflow-hidden flex justify-center items-center"><img class="object-cover "
                            id="flag" src="../img/americaFlag.png" alt="" srcset=""></div>
                    <div id="language" class="font-normal ms-1 text-[14px]">English</div>
                    <ion-icon class="text-[13px]" name="chevron-down-outline"></ion-icon>
                    <div id="countryName_select_container"
                        class="bg-gray-200 hidden group-hover:flex duration-300 p-2 rounded-sm absolute bottom-[-100px] z-[100] right-0 w-full justify-center flex-col items-center">
                        <p
                            class="font-normal text-[14px] py-3 w-full text-center text-black duration-500 rounded-sm bg-white">
                            English
                        </p>
                        <p class="font-normal text-[14px] py-3 w-full text-center text-black duration-500 rounded-sm">
                            Tamil</p>
                    </div>
                </div>
                <div class="h-6 bg-gray-300 w-[2px] rounded-full"></div>
                <div class="flex items-center px-5 cursor-pointer">
                    <ion-icon name="person"></ion-icon>
                    <p class="font-normal ms-1 text-[14px]">Login</p>
                </div>
            </div>
        </div>

    </header>
   `
const menuHeader = document.createElement('header')
menuHeader.id = "header_menu"
menuHeader.className = "select-none sticky top-0 z-[99] bg-white shadow-lg"
menuHeader.innerHTML = ` <!-- Menu Section  -->
        <div
            class="lg:h-[4.5rem] flex lg:flex-row flex-row items-center lg:py-0 py-5 gap-5 h-16  bg-white container lg:px-20 mx-auto md:px-20 sm:px-5 px-5 2xl:px-52">
            <div class="lg:w-3/12 w-full h-full flex items-center justify-between">
                <div class=" overflow-hidden flex uppercase text-3xl font-extrabold">
                    <img class="h-full w-full object-contain" src="../img/logo.png" alt="" srcset="">

                </div>
                <div class="lg:hidden cursor-pointer" id="menu_icon">
                    <ion-icon class="font-extrabold text-4xl" name="menu"></ion-icon>
                </div>
            </div>
            <div class="lg:flex justify-between lg:w-9/12 w-full items-center hidden">
                <ul class="gap-8 lg:gap-10 flex ">
                    <li><a class="menu_btn font-medium  hover:text-[#7fad39]  text-base uppercase text-[#7fad39]"
                            href="../index.html">Home</a>
                    </li>
                    <li><a class="menu_btn font-medium  hover:text-[#7fad39]  text-base uppercase" href="#">Pages</a>
                    </li>
                    <li class="relative group">
                        <a href="#shop"
                            class="menu_btn font-medium  hover:text-[#7fad39]  text-base uppercase">Shop</a>
                        <div class="absolute hidden  group-hover:block left-[-50%] top-[100%] pt-7">
                            <ul
                                class=" flex  w-36 bg-white px-5 shadow-2xl py-3 font-light text-sm flex-col flex-nowrap gap-2 rounded-sm">
                                <li><a class="hover:text-[#7fad39]" href="./shop.html">Shop</a></li>
                                <li><a class="hover:text-[#7fad39]" href="./wishList.html">Wishlist</a></li>
                                <li><a class="hover:text-[#7fad39]" href="./singleProduct.html">Single Product</a>
                                </li>
                                <li><a class="hover:text-[#7fad39]" href="./cart.html">Cart</a></li>
                                <li><a class="hover:text-[#7fad39]" href="./checkout.html">Checkout</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a class="menu_btn font-medium  hover:text-[#7fad39]  text-base uppercase"
                            href="./blog.html">Blog</a></li>
                    <li><a class="menu_btn font-medium  hover:text-[#7fad39]  text-base uppercase"
                            href="./contact.html">Contact</a></li>
                </ul>
                <div class="lg:flex gap-4 h-full  items-center hidden">
                    <div class="relative h-full" id="WishListCountContainer">
                        <ion-icon class="text-2xl cursor-pointer" name="heart"></ion-icon>
                        
                    </div>
                    <div class="relative h-full" id="cartCountContainer">
                        <ion-icon id="cart_icon" class="text-2xl ms-3 cursor-pointer" name="bag-handle"></ion-icon>

                    </div>

                    <div class="flex">
                        <p>item:</p>
                        <p id="total_price" class="font-semibold ms-1 text-[#7fad39]">₹0</p>
                    </div>
                </div>
            </div>
        </div>`

const footerSection = document.createElement('section')
footerSection.id = "contact"
footerSection.className = "bg-neutral-100 py-20 relative"
footerSection.innerHTML = `
   <!-- Scroll to top button  -->
        <div id="up_arrow"
            class="top-[-25px] rounded-full left-[50%] translate-x-[-50%] z-40 bg-[#7fad39] text-white duration-500 absolute shadow-2xl px-4 py-3 cursor-pointer text-2xl">
            <ion-icon class="animate-bounce 2xl" name="chevron-up-outline"></ion-icon>
        </div>
        <!-- Footer  -->
        <div class="flex flex-col container lg:px-20 mx-auto md:px-20 px-5 sm:px-5 2xl:px-52">
            <div class="grid gap-10  pb-10 lg:grid-cols-2 xl:grid-cols-3">
                <div class=" gap-2 flex flex-col">
                    <div class="h-18 w-30 overflow-hidden justify-center flex items-center">
                        <img src="../img//logo.png" class="object-cover" alt="" srcset="">
                    </div>
                    <div class="flex gap-2">
                        <p class="font-medium text-base">Address:</p>
                        <p class="font-normal text-gray-600">60-49 Road 11378 New York</p>
                    </div>
                    <div class="flex gap-2">
                        <p class="font-medium text-base">Phone:</p>
                        <p class="font-normal text-gray-600">+65 11.188.888</p>
                    </div>
                    <div class="flex gap-2">
                        <p class="font-medium text-base">Email:</p>
                        <p class="font-normal text-gray-600">hello@colorlib.com</p>
                    </div>
                </div>
                <div class=" gap-2 flex flex-col">
                    <h1 class="font-medium text-lg">Useful Links</h1>
                    <ul class="flex flex-col gap-2">
                        <li class=" text-gray-500"><a class="hover:text-[#7fad39]" href="#">About
                                Us</a></li>
                        <li class=" text-gray-500"><a class="hover:text-[#7fad39]" href="#">About
                                Our Shop</a></li>
                        <li class=" text-gray-500"><a class="hover:text-[#7fad39]" href="#">Secure
                                Shopping</a></li>
                        <li class=" text-gray-500"><a class="hover:text-[#7fad39]" href="#">Delivery infomation</a>
                        </li>
                        <li class=" text-gray-500"><a class="hover:text-[#7fad39]" href="#">Privacy Policy</a></li>
                        <li class=" text-gray-500"><a class="hover:text-[#7fad39]" href="#">Our
                                Sitemap</a></li>
                    </ul>

                </div>
                <div class=" flex flex-col gap-2">
                    <h1 class="font-medium text-lg">Join Our Newsletter Now</h1>
                    <div class="flex gap-8 flex-col">
                        <p class="text-base text-gray-500">Get E-mail updates about our latest shop and
                            special offers.
                        </p>
                        <div class="w-full rounded-sm overflow-hidden  bg-white h-12 justify-between flex">
                            <input
                                class="h-full w-8/12 rounded-ss-sm rounded-es-sm ps-3 outline-0 border-gray-300 border"
                                type="text" placeholder="Enter your mail">
                            <button
                                class="font-semibold text-sm uppercase w-4/12 duration-200 text-white cursor-pointer bg-[#7fad39] hover:bg-white hover:text-[#7fad39] border-2 border-[#7fad39] h-full ">Subscribe</button>
                        </div>
                        <ul class="flex gap-5 ">
                            <li class="text-3xl duration-500 hover:scale-120"><a href="#"><ion-icon
                                        name="logo-facebook"></ion-icon></a>
                            </li>
                            <li class="text-3xl duration-500 hover:scale-120"><a href="#"><ion-icon
                                        name="logo-instagram"></ion-icon></a>
                            </li>
                            <li class="text-3xl duration-500 hover:scale-120"><a href="#"><ion-icon
                                        name="logo-twitter"></ion-icon></a>
                            </li>
                            <li class="text-3xl duration-500 hover:scale-120"><a href="#"><ion-icon
                                        name="logo-github"></ion-icon></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex items-center w-full justify-center">

                    <p class="font-normal text-base text-gray-500  ">Copyright ©2025 All
                        rights
                        reserved | This
                        template is
                        made by <a class="text-[#7fad39] font-normal text-base " href="#">Colorlib</a></p>

                </div>
            </div>

        </div>`
document.querySelector('body').prepend(menuHeader)
document.querySelector('body').prepend(HeaderDiv)
document.querySelector('body').appendChild(footerSection)



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

//cartItem display to frontend
const CartTotalAmount = () => {
    const total = cartList.reduce((acc, value) => {
        return acc + (value.quantity * value.price)
    }, 0)
    document.querySelectorAll('#total_price').forEach((totalPriceDiv) => {
        totalPriceDiv.innerText = `₹${total}.00`
    })
    if (CheckoutTotal) {
        CheckoutTotal.innerHTML = `₹${(total - 20) + 50}.00`
    }
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
CartCountDisplay()
CartTotalAmount()
wishListCountDisplay()

