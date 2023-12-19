export let cart= JSON.parse(localStorage.getItem('cart'));   // parse is to return the original type of the localStorage
                                            // localstorage can only save strings 
                                             // so in line 13 we convert it into string using JSON.stringify()
if (!cart) {
    cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2
    }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1
    }];
} 


function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    let matchingItem;
        
        cart.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });
        
        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            cart.push({
                productId: productId ,
                quantity : 1
            });
        }

        saveToStorage();
}
/*HOW THE BELOW FUNCTION WORK ? 
    => Create a new array
    => Loop through the cart
    => Add each product to the new array, except for this productId
*/
export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}