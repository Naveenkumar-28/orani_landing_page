// Selecting elements
const BODY = document.getElementById('body')
const CategorieMenu = document.getElementById('CategorieMenu');
const CaterieItems = document.getElementById('CaterieItems');
const next = document.getElementById('next');
const prv = document.getElementById('prv');
const product_slider = document.getElementById('product_slider');

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



