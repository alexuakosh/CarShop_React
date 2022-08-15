import React from 'react';
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./Button.scss";
import { cardToCartIdSelector } from '../../store/selectors/selectors';

function Button (props) {
    const cardToCartId = useSelector(cardToCartIdSelector);
    const { color, text, func } = props;
    
    return (
        <a data-id={cardToCartId} className="button" onClick={func} style={{ backgroundColor: color }}>{text}</a>
    )
    
}

Button.propTypes = {
    func: PropTypes.func,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
}

Button.defaultProps = {
    color: "red"
}

export default Button;