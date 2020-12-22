import React from 'react';
import {
    capitalize,
    concatWords,
    camelCaseIt
} from 'Utils/strings-utils.js';

const NavTab = (props) => {
    const {
        title,
        handleClick,
        isActive = false,
    } = props;

    const capTitle = concatWords(capitalize(title));
    const camelCaseTitle = camelCaseIt(title);

    return (
        <li id={'li' + capTitle} className={isActive && 'active'} onClick={handleClick}>
            <a className="navbar-text-color" href={`#${camelCaseTitle}`}>
                {title}
            </a>
        </li>
    );
}

export default NavTab;
