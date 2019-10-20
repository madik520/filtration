import React, { Component } from 'react';
import Header from '../components/header/header';
import { PRODUCT, filter } from '../product';

import Card from '../components/card/card';
import Footer from '../components/footer/footer';


class App extends Component{
  state = {
    product: [],
    maxLength: 4,
  }

  addProducts = () => {
    const { maxLength } = this.state
    this.setState({
      maxLength: maxLength + 4
    })
  }
  closeList = () => {
    window.scrollTo(0,0);
    this.setState({
      maxLength: 4
    })
  }

  


  render(){
    const { product, maxLength } = this.state;
    return(
      <div className="container">
      <Header  items={filter} />
      <section>
        <Card />
      </section>
      <Footer onClick={maxLength <= 18 ? this.addProducts : this.closeList} value={maxLength <= 18 ? "Загрузить ещё" : "Вверх"} />
      </div>
    )
  }
};

export default App;
