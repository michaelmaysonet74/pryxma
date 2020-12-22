import React, { Component } from 'react';
import { getApps } from 'iOSAppsService';
import Nav from './navbar/Nav.jsx';
import AppList from './ios-apps/AppList.jsx';
import Athena from './chatbots/Athena.jsx';
import BackToTop from './BackToTop.jsx';
import Footer from './Footer.jsx';

class Pryxma extends Component {
    constructor(props) {
        super(props);

        this.state = {
            iOSAppList: []
        };

        this.loadApps = this.loadApps.bind(this);
    }

    loadApps() {
        getApps().then(apps => {
            this.setState({ iOSAppList: [...apps] });
        });
    }

    componentDidMount() {
        this.loadApps();
    }

    render() {
        const { iOSAppList } = this.state;

        return (
            <div className="pryxma">
                <Nav iOSAppList={iOSAppList} />
                <AppList iOSAppList={iOSAppList} />
                <Athena />
                <BackToTop />
                <Footer />
            </div>
        );
    }
}

export default Pryxma;
