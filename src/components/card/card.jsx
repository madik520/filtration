import React from 'react';
import PropTypes from  'prop-types';


const Card = ({ items, onClick }) => (
    <div className="Card-container">
        {items.map(({ id, img, text, price }) => {
            return (
                <div key={id} className="card-content">
                    <img src={img} alt="img" />
                    <h3>{text}</h3>
                    <p>$ {price}<span>.00</span></p>
                    <div className="hide-btn-block">
                       <button onClick={onClick}>Купить</button>
                    </div>
                </div>
            )
        })}
    </div>
);

Card.propTypes = {
    items: PropTypes.array,
    onClick: PropTypes.func
}
Card.defaultProps = {
    items: [],
    onClick: () =>{}
}

export default Card;