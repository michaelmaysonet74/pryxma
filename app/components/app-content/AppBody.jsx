import React from 'react';

const AppBody = ({ info, subInfo, children }) => {
    return (
        <div className="row content">
            <h1 className="center title">
                {info}
            </h1>
            <p className="lead center">
                {subInfo}
            </p>
            { children}
        </div>
    );
};

export default AppBody;
