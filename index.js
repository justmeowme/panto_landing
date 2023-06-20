function setSelectedTab(){
    current_tab = document.getElementById(this.id)
    all_tabs = document.getElementsByClassName("tabs-item")

    for (let i = 0; i< all_tabs.length; i++){
        all_tabs[i].style.background = "none"
    }

    current_tab.style.background = "#ffffff"
}

let all_tabs = document.getElementsByClassName("tabs-item")

for (let i = 0; i< all_tabs.length; i++){
    all_tabs[i].onclick = setSelectedTab
}

class Product {
    constructor(type, name, price, image) {
      this.type = type;
      this.name = name;
      this.price = price;
      this.image = image;
    }
}

let products_list = [
    new Product("chair", "Sakarias Armchair", "392 $", "assets/images/chair1.png"),
    new Product("chair", "Baltsar Chair", "299 $", "assets/images/chair2.png"),
    new Product("chair", "Sakarias Armchair", "392 $", "assets/images/chair1.png"),
    new Product("chair", "Anjay Chair", "519 $", "assets/images/chair3.png"),
]

function render_products(){
    let products_ui = document.querySelectorAll(".product")

    for (let i=0; i<products_ui.length; i++){
        products_ui[i].querySelector(".product-info-name").innerText = products_list[i%4].name
        products_ui[i].querySelector(".product-price").innerText = products_list[i%4].price
        products_ui[i].querySelector(".product-info-type").innerText = products_list[i%4].type
        products_ui[i].querySelector(".product-image").src = products_list[i%4].image
    }
}

render_products()

let left_arrow = document.querySelector(".products-arrow-left")
let right_arrow = document.querySelector(".products-arrow-right")

function move_items_left(){
    products_list = [products_list.at(1), products_list.at(2), products_list.at(3), products_list.at(0)]
    render_products()
}

function move_items_right(){
    products_list = [products_list.at(3), products_list.at(0), products_list.at(1), products_list.at(2)]
    render_products()
}

left_arrow.onclick = move_items_left

right_arrow.onclick = move_items_right
