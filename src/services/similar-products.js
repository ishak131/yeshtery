import thumbnail from '../images/product-images/similar-products.png'
import brandImage from '../images/product-images/brand.svg'

const sim_pro = {
    caption: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: "9,999",
    oldPrice: "10,999",
    offer: '30%',
    rate: 4.2,
    thumbnail,
    brandImage,
    pickedFrom: 'Egypt',
    pickedTo: 'Egypt',
    duration: 3
}

const sim_pro_with_no_dur = {...sim_pro}
delete sim_pro_with_no_dur.duration

const getSimilarProducts = () => {
    return [...Array(2).fill(sim_pro), ...Array(4).fill(sim_pro_with_no_dur)]
}


export { getSimilarProducts }