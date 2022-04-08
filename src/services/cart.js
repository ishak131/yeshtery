import productImage from '../images/cart-thumbnail.png'

const singleProduct = {
    productImage,
    caption: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
    quantity: 2,
    price: '9,999'
}


const getCartInfo = () => {
    return [singleProduct]
}

export { getCartInfo }