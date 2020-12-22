import React, { Component } from 'react';

class Section extends Component {
    render() {
        const { id, children } = this.props;

        return (
            <div
                id={ id }
                className="container container-fluid content-container margin-bottom"
            >
                { children }
            </div>
        );
    }
}

export default Section;
