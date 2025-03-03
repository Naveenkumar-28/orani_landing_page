document.addEventListener("DOMContentLoaded", () => {
    // Selecting elements
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

        product_slider.scrollBy({ left: product_slider.clientWidth / 4, behavior: "smooth" });
    });
    prv.addEventListener("click", () => {
        product_slider.scrollBy({ left: -product_slider.clientWidth / 4, behavior: "smooth" });
    });

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



