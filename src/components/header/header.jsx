import React from 'react';
import PropTypes from 'prop-types';

const filter = [
    {
        id: "Phones",
        text: "Смартфоны",
    },
    {
        id: "Notebooks",
        text: "Планшеты/Ноутбуки",
    },
    {
        id: "Watches",
        text: "Часы",
    },
    {
        id: "Accessories",
        text: "Аксессуары",
    },
    {
        id: "Other",
        text: "Другое",
    },
];

const Header = ({ onChange,  defaultChecked }) => (
    <header className="row">
        <div className="col-12">
            <ul className="checkbox-list">
                { filter.map(({ id, text }) => {
                    return <li key={id}>
                    <label className="checkbox">
                        <input id={id} type="checkbox" onChange={onChange} defaultChecked={defaultChecked} />
                        <span>{text}</span>
                    </label>
                    </li>
                }) }
            </ul>
        </div>
    </header>
);

Header.propTypes = {
    onChange: PropTypes.func,
    defaultChecked: PropTypes.bool
}

Header.defaultProps = {
    onChange: () => {},
    defaultChecked: true
}

export default Header;