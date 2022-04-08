import image1 from '../images/product-images/single-product (1).png'
import image2 from '../images/product-images/single-product (2).png'
import image3 from '../images/product-images/single-product (3).png'
import image4 from '../images/product-images/single-product (4).png'
import productBrandImage from '../images/adidasBrand.png'
import color1 from '../images/product-images/color1.png'
import color2 from '../images/product-images/color2.png'

function getOneProduct() {
    return {
        thumbnails: [image1, image2, image3, image4, image1, image2, image3, image4, image1, image2, image3, image4],
        productBrandImage,
        productDescription: "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        genderCategory: "Men",
        rate: 4.9,
        ratesNumber: 22,
        price: '8,999',
        oldPrice: '9,999',
        offer: '30%',
        availableSizes: [
            'Small'
            , ' Medium'
            , ' Large'
            , ' XLarge'
            , ' XXLarge'
        ],
        availableColors: [color1, color2],
        availableQuantity: 20,
    }
}

export { getOneProduct }