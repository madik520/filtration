import React from 'react';
import PropTypes from  'prop-types';


const Card = ({ items, addProduct }) => {
    const openModal = () => {
        document.body.style.overflow = "hidden";
        const getModal = document.querySelector(".modal");
        getModal.style.display = "block";
    };
    return(
    <div className="Card-container">
        {items.map(({ id, img, text, price }) => {
            return (
                <div key={id} className="card-content">
                    <img src={img} alt="img" />
                    <h3>{text}</h3>
                    <p>$ {price}<span>.00</span></p>
                    <div className="hide-btn-block">
                       <button onClick={() => { openModal(); addProduct((new Date().getTime()), text, img, price)}}>Купить</button>
                    </div>
                </div>
            )
        })}
    </div>
    )
};

Card.propTypes = {
    items: PropTypes.array,
}
Card.defaultProps = {
    items: [],
}

export default Card;