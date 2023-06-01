import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
    return class extends Component {
        componentDidMount() {
            console.log(`Component ${this.getComponentName(WrappedComponent)} is mounted.`);
        }

        componentWillUnmount() {
            console.log(`Component ${this.getComponentName(WrappedComponent)} is going to unmount.`);
        }

        getComponentName(component) {
            return component.displayName || component.name || 'Component';
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};

export default WithLogging;
