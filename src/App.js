import { Component } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';

import Header from "./components/header/Header";
import SingleProduct from './pages/SingleProduct';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <SingleProduct />
          <Routes>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
