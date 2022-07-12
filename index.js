


// ...............................................................................................




const productListDom = document.querySelector(".product-list");
allEvenListener()



// ................................................................................................
function allEvenListener() {
    loadProduct();
    document.querySelector(".cart-icon i").addEventListener("click", function () {
        document.querySelector(".cart-container").classList.toggle("d-block");
    });
    remo();
    checkInput();
    updateCartTotall();
    document.querySelector(".cart-icon span").innerText = 0;



}


// .........................................Load Product.............................................
async function loadProduct() {

    const response = await fetch("asset/index.json");
    productList = await response.json();

    let productListHTML = "";
    for (let product of productList) {
        productListHTML += `
     <div class="product-item">
                <div class="product-img">
                <img class="img" src="${product.imgSrc}" alt="">
                </div>
                <div class="product-info">
                    <div class="poduct-name">${product.name}</div>
                    <div class="poduct-price">${product.price}</div>

                </div>
                <button id="${product.id}" class="add-cart">Add to cart</button>
              
    </div>

        `;
    }
    productListDom.innerHTML = productListHTML;
    // .........................................Add to Card.............................................
    var addToCardButtons = document.getElementsByClassName("add-cart");
    for (let i = 0; i < addToCardButtons.length; i++) {
        var button = addToCardButtons[i];
        button.addEventListener("click", addToCardClicked)
    }
    function addToCardClicked(event) {
        var button = event.target;
        var productItem = button.parentElement;
        var title = productItem.getElementsByClassName("poduct-name")[0].innerText;
        var price = productItem.getElementsByClassName("poduct-price")[0].innerText;
        var image = productItem.getElementsByClassName("img")[0].src;
        addItemToCard(title, price, image);
        updateCartTotall();
    }
    function addItemToCard(title, price, image) {
        var cart = document.createElement("div");

        var cartItem = document.getElementsByClassName("cart-container")[0];

        var cartContainer = `
                     <div class="cart-item">
                        <div class="cart-name">

                            <div>
                                <img src="${image}" alt="" class="imgg">
                                <p>${title}</p>
                            </div>

                        </div>
                        <div class="cart-price">${price}</div>
                        <div>
                            <input class="quantity" type="number" name="" id="" value="1">
                        </div>
                        <button class="btn-danger" type="button">Xóa</button>
  
                    </div>
                    `
        cart.innerHTML = cartContainer;
        cartItem.append(cart);
        cart.getElementsByClassName("btn-danger")[0].addEventListener("click", removeCartItem)
        cart.getElementsByClassName("quantity")[0].addEventListener('change', function (event) {
            var input = event.target;
            if (isNaN(input.value) || input.value <= 0) {
                input.value = 1;
            }

            updateCartTotall()
        })

        var countCart = document.getElementsByClassName("cart-item").length;

        document.querySelector(".cart-icon span").innerText = countCart;
    }



}






// .........................................Remove Product.............................................


function remo() {
    var removeCartItemButtons = document.getElementsByClassName("btn-danger");


    for (let i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener("click", removeCartItem)
    }

}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateCartTotall()
    var countCart = document.getElementsByClassName("cart-item").length;

    document.querySelector(".cart-icon span").innerText = countCart;

}





// .........................................Check Input.............................................

function checkInput() {
    var quantityInputs = document.getElementsByClassName("quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged)
    }

    function quantityChanged(event) {
        var input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updateCartTotall()
    }
}
// .........................................Total Price.............................................
function updateCartTotall() {
    var cartContainer = document.getElementsByClassName("cart-container")[0];
    var cartItems = cartContainer.getElementsByClassName("cart-item");
    var total = 0;
    for (var i = 0; i < cartItems.length; i++) {
        var cartItem = cartItems[i];
        var priceElement = cartItem.getElementsByClassName("cart-price")[0];
        var quantityElement = cartItem.getElementsByClassName("quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = total.toFixed(2);
    document.getElementsByClassName("total")[0].innerText = "$" + total;
}



// .....................Back to top.................................


var mybutton = document.getElementById("myBtn");


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}