import React from 'react';
import { removeExtension } from 'Utils/strings-utils.js';

const ScreenShot = (props) => {
    const {
        title,
        glyphicon,
        image,
    } = props;

    return (
        <div className="col-sm-12 col-md-4 margin-top center">
            <h2>
                <span className={`glyphicon ${glyphicon}`}></span>
                {` ${title}`}
            </h2>
            <p>
                <img
                    id={removeExtension(image, '.png')}
                    className="screenshot"
                    src={`assets/screenshots/${image}`}
                />
            </p>
        </div>
    );
};

export default ScreenShot;
