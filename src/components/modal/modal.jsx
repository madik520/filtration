/* eslint-disable no-unreachable */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import PropTypes from 'prop-types';


const Modal = ({ items, removeProduct }) => {
    const [total, setTotal] = useState(519);
        /*let priceSumm = items.map(item => item.price);
        const total = Object.values(priceSumm).reduce((a,b) => a + b, 0);*/
    const changeTotal = ({ target: { value } }) => {
        switch(value){
            case "1":
                return setTotal(519);
                break;
            case "2":
                return setTotal(519 * 2);
                break;
            case "3":
                return setTotal(519 * 3);
                break;
            case "4":
                return setTotal(519 * 4);
                break;
            case "5":
                return setTotal(519 * 5);
                break;
            default:
                return value;
        }
    }

    const closeWindow = () => {
        document.body.style.overflow = "auto";
        const getModal = document.querySelector(".modal");
        getModal.style.display = "none";
    }
    return (
        <div className="modal">
            {items.map(({ id, text, img, price }) => {
                return (
                <div className="modal-container" key={id}>
                    <div className="modal-header">
                        <h2>{text}</h2>
                        <i onClick={() => {closeWindow(); removeProduct(id)}} className="fas fa-times"></i>
                    </div>
                    <div className="modal-main">
                        <img src={img} alt="product" />
                        <div className="modal-order">
                            <div className="select-block">
                            <div className="first-select">
                                <p>Память</p>
                                <select>
                                    <option value="64gb">64Gb</option>
                                    <option value="64gb">128Gb</option>
                                </select>
                            </div>
                            <div className="second-select">
                                <p>Цвет</p>
                                <select>
                                    <option value="white">Белый</option>
                                    <option value="red">Красный</option>
                                    <option value="black">Чёрный</option>
                                </select>
                            </div>
                            <div className="third-select">
                                <p>Количество</p>
                                <select onChange={changeTotal}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            </div>
                            <div className="modal-price">
                                <p>${total}<span>.00</span></p>
                                <button onClick={() => alert(`Вы купили ${text} по цене: ${total}` )} className="btn-buy">Купить</button>
                            </div>
                            <a href="#">Посмотреть в магазине</a>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
};

Modal.propTypes = {
    items: PropTypes.array,
    onClick: PropTypes.func
}
Modal.defaultProps = {
    items: [],
    onClick: () => {}
}

export default Modal;