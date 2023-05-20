import React from 'react';

const Button = ({ children }) => {
    return (
        <div className="card-actions justify-start">
            <button className="btn btn-secondary rounded-none">{children}</button>
        </div>
    );
};

export default Button;