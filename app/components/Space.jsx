import React from 'react';

const renderBr = (size = 0) => {
    const breaks = [];

    for (let i = 0; i < size; i++) {
        breaks.push(
            <br key={i.toString()} />
        );
    }

    return breaks;
};

const Space = ({ size, children }) => {
    return (
        <div>
            {renderBr(size)}
            {children}
        </div>
    );
};

export default Space;
