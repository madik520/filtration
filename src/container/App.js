import React, { useState } from 'react';
import Header from '../components/header/header';
import { connect } from 'react-redux';
import { addProduct, removeProduct } from '../actions/actionCreator';

import Card from '../components/card/card';
import Footer from '../components/footer/footer';
import Modal from '../components/modal/modal';



const App = ({ product, addProduct, removeProduct }) => {
  const [itemProduct, setItemProduct] = useState(product);
  const [maxLength, setMaxLength] = useState(8);

  const addProductLength = () => {
    setMaxLength(maxLength + 4);
  };
  const closeList = () => {
    window.scrollTo(0,0);
    setMaxLength(8);
  };
  const changeFilter = ({ target: { checked, id } }) => {
    if(checked){
      const newFilter = product.filter(n => n.brend === id).concat(itemProduct);
      setItemProduct(newFilter);
    }else{
      const delFilter = itemProduct.filter(n => n.brend !== id);
      setItemProduct(delFilter);
    }
  };
    return(
      <div className="container">
      <Header onChange={changeFilter} />
      <section>
        <Card addProduct={addProduct} items={itemProduct.slice(0, maxLength)}/>
        <Modal removeProduct={removeProduct} items={product.slice(19)} />
      </section>
      <Footer onClick={maxLength <= 18 ? addProductLength : closeList} value={maxLength <= 18 ? "Загрузить ещё" : "Вверх"} />
      </div>
    )
}

export default connect(({ product }) => ({
  product
}), { addProduct, removeProduct })(App);
