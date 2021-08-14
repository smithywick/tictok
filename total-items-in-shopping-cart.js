const cart = [
    {
        name: 'Apple',
        type: 'fruit',
        quantity: 2,
        price: 1.29
    },
    {
        name: 'Banana',
        type: 'fruit',
        quantity: 5,
        price: 0.49
    },
    {
        name: 'Cherry',
        type: 'fruit',
        quantity: 2,
        price: 0.10
    },
    {
        name: 'Onion',
        type: 'vegetable',
        quantity: 2,
        price: 0.79
    },
    {
        name: 'Potato',
        type: 'vegetable',
        quantity: 5,
        price: 0.49
    },
    {
        name: 'Green Beans',
        type: 'vegetable',
        quantity: 2,
        price: 1.29
    }
]

function totalCart(items) {
    const sum = items.reduce((total, item) => total + item.quantity * item.price, 0);
    const roundedSum = Math.ceil(sum * 100) / 100;
    return roundedSum
}

totalCart(cart);

function totalCartByType(items) {
    let cartTotals = {}
    for (const item of items) {
        const itemType = item.type
        if (typeof cartTotals[itemType] === "undefined") {
            cartTotals[itemType] = 0;
        }
        cartTotals[itemType] = cartTotals[itemType] + item.quantity * item.price;
    }
    return cartTotals
}

totalCartByType(cart);

function printCartTotals(totaledItems) {
    const cartTypes = Object.keys(totaledItems);
    let cartPrintout = "";
    for (const type of cartTypes) {
        let commaAndSpace = ", ";
        cartPrintout += `${type}: ${totaledItems[type]}${commaAndSpace}`;
    }
    return cartPrintout
}