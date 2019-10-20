import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ onChange, items, defaultChecked }) => (
    <header className="row">
        <div className="col-12">
            <ul className="checkbox-list">
                { items.map(({ id, text, active }) => {
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
    items: PropTypes.array,
    defaultChecked: PropTypes.bool
}

Header.defaultProps = {
    onChange: () => {},
    items: [],
    defaultChecked: true
}

export default Header;