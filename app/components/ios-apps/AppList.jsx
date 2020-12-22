import React from 'react';
import IOSApp from './IOSApp.jsx';
import { camelCaseIt } from 'Utils/strings-utils.js';

const iOSAppList = ({ iOSAppList }) => {
    const renderApps = () => {
        if (typeof iOSAppList !== 'undefined' && iOSAppList.length > 0) {
            return iOSAppList.map((app) => {
                return (
                    <div id={camelCaseIt(app.title)} key={app.id}>
                        <IOSApp {...app} />
                        <hr className="divider" />
                    </div>
                );
            });
        }
    };

    return (
        <div>
            {renderApps()}
        </div>
    );
};

export default iOSAppList;
