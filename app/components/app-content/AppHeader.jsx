import React from 'react';

const AppHeader = ({ title, subtitle, icon }) => {
    return (
        <div className="row center margin-top">
            <div className="col-md-6 col-md-offset-3">
                <h1 className="app-title margin-top">
                    {title}
                </h1>
                <p className="lead">
                    {subtitle}
                </p>
                <p className="center">
                    <img className="app-logo" src={`assets/img/${icon}`} />
                </p>
            </div>
        </div>
    );
}

export default AppHeader;
