import { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from "./components/header/Header";
// import SingleProduct from './pages/SingleProduct';
import MyCart from './components/my-cart/MyCart';

import { getCartInfo } from './services/cart';


const SingleProduct = lazy(() => import('./pages/SingleProduct'));

class App extends Component {
  constructor() {
    super()
    this.state = {
      cartItems: [],
      total: 0,
      isCalculated: false
    }
  }

  componentDidMount() {
    this.setState({ cartItems: getCartInfo() })
  }

  componentDidUpdate() {
    if (!this.state.isCalculated) {
      this.setState({ isCalculated: true })
      this.handleCalculateTotal()
    }
  }

  handleAddProductToCart = (newProduct) => {
    console.log(newProduct);
    this.setState(({ cartItems }) => ({ cartItems: [...cartItems, newProduct] }))
    this.initiateTotalCalculation()
  }

  handleRemoveProductFromCart = (index) => {
    this.setState(({ cartItems }) => {
      let spliceArray = [...cartItems]
      spliceArray.splice(index, 1)
      return { cartItems: spliceArray }
    })
    this.initiateTotalCalculation()
  }

  initiateTotalCalculation = () => this.setState({ isCalculated: false })

  handleCalculateTotal = () => {
    const allItemsPrices = this.state.cartItems.map(({ price = "" }) => (parseFloat(price.replace(",", ""))))
    this.setState({ total: allItemsPrices.reduce((a, b) => a + b, 0) })
  }

  render() {
    const { cartItems, total } = this.state
    console.log({ cartItems });
    return (
      <div className="App">
        <BrowserRouter>
          <MyCart handleRemoveProductFromCart={this.handleRemoveProductFromCart} total={total} cartItems={cartItems} />
          <Header cartItemsCount={cartItems.length} />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path='/home' element={<main>
                <h1>Home</h1>
                <h1>
                  <Link to="/single-product/:id">single-Product</Link>
                </h1>
              </main>} />
              <Route path='/single-product/:id' element={<SingleProduct handleAddProductToCart={this.handleAddProductToCart} />} />
              <Route
                path="*"
                element={<Navigate to="/single-product/abcdefg1234567890" />}
              />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
