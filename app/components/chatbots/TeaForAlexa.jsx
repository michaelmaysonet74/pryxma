'use strict';

import React, {Component} from 'react';

import AppHeader from './../app-content/AppHeader.jsx';
import Section from './../Section.jsx';
import Space from './../Space.jsx';
import GitHubButton from './../app-content/SourceButton.jsx';

class TeaForAlexa extends Component {
  render() {
    return (
      <Section id="tea">
        <AppHeader
          title="Tea for Alexa" 
          subtitle="Predicts when your next train will arrive." 
          icon="tea.png" 
        />

        <div className="row center margin-top margin-bottom tea-content">
          <h1 className="center title">Relax. Have some Tea.</h1>
          <p className="lead center">
            You'll never lose another train again.
          </p>
          <div className="col-md-12">
          </div>
        </div>

        <GitHubButton
          title="GitHub"
					sourceLink="https://github.com/michaelmaysonet74/tea-for-alexa"
					icon="github-icon fa fa-github"
        />
    </Section>
    );
  }
}

export default TeaForAlexa;