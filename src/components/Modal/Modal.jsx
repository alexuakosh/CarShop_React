import React from 'react';
import PropTypes from "prop-types";
import "./Modal.scss";

function Modal (props) {
    const { header, text, color, actions } = props;
    return (
        <div className="modal" style={{ backgroundColor: color }}>
            <div className="modal-header">
                <h2 className="title">{header}</h2>
            </div>
            <p className="text">{text}</p>
            {actions}
        </div>
    )
    
}

Modal.propTypes = {
    header: PropTypes.string.isRequired,
    text: PropTypes.string,
    color: PropTypes.string,
    actions: PropTypes.element.isRequired,
}

Modal.defaultProps = {
    color: "blue",
    text: "Think about it!"
}

export default Modal;