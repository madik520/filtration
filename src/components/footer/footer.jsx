import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ onClick, value }) => (
    <footer>
        <button onClick={onClick}>{value}</button>
        <p><span>*</span>Указанные цены включают стоимость товара и доставки</p>
    </footer>
);

Footer.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
}

Footer.defaultProps = {
    onClick: () => {},
    value: ""
}

export default Footer;