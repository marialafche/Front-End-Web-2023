let listProductHTML = document.querySelector('.list-products');
let listCartHTML = document.querySelector('.list-cart');
let listProducts = [];
let carts = [];

const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0){
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
            <img class="food" src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <h3 class="price">$${product.price}</h3>
            <button class="add-to-cart">Add to Cart</button>
            `;
            listProductHTML.appendChild(newProduct);
        })
    }
}

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('add-to-cart')){
        let product_ID = positionClick.parentElement.dataset.id;
        addToCart(product_ID);
    }
})



const addToCart = (product_ID) => {
    let putItInTheCart = carts.findIndex((value) => value.product_ID == product_ID);

    if(carts.length <= 0){
        carts = [{
            product_ID: product_ID,
            quantity: 1
        }]
    }
    else if(putItInTheCart < 0){
        carts.push({
            product_ID: product_ID,
            quantity: 1
        });
    }
    else{
        carts[putItInTheCart].quantity = carts[putItInTheCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}

const addCartToMemory = () => {
    localStorage.setItem('cart-item', JSON.stringify(carts));  //doesn't allow arrays, so JSON
}

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    if(carts.length > 0){
        carts.forEach(cart => {
            let newCart = document.createElement('div');
            newCart.classList.add('cart-item');
            newCart.dataset.id = cart.product_ID;
            let positionProduct = listProducts.findIndex((value) => value.id == cart.product_ID);
            let info = listProducts[positionProduct];
            newCart.innerHTML = `
            <div class="image">
                <img src="${info.image}" alt="Fillet Mignon">
            </div>
            <div class="name">
                <h2>${info.name}</h2>
            </div>
            <div class="price">
                <h3>$${info.price * cart.quantity}</h3>
            </div>
            <div class="quantity">
                <span class="minus">-</span>
                <span>${cart.quantity}</span>
                <span class="plus">+</span>
            </div>
            `;
        listCartHTML.appendChild(newCart);
        })
    }
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_ID = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus'; //default value
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantity(product_ID, type);
    }
})

const changeQuantity = (product_ID, type) => {
    let positionItem = carts.findIndex((value) => value.product_ID == product_ID) //find the position
    if(positionItem >= 0){
        switch(type){
            case 'plus':
                carts[positionItem].quantity = carts[positionItem].quantity + 1;
                break;
            default:
                let valueChange = carts[positionItem].quantity - 1;
                if(valueChange > 0){
                    carts[positionItem].quantity = valueChange;
                }else{
                    carts.splice(positionItem, 1); //delete
                }
                break
        }
    }
    addCartToMemory();
    addCartToHTML();
}

const initApp = () => {
    fetch('../json/fancyProducts.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        addDataToHTML();

        //get cart info
        if(localStorage.getItem('cart-item')){
            carts = JSON.parse(localStorage.getItem('cart-item'));
            addCartToHTML();
        }

    })
}
initApp();