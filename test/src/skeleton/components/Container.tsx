import React, { Component } from 'react';
import { ContainerType } from '../types'
class Container extends Component<ContainerType> {

    render() {
        const { width, height, children } = this.props
        return (
            <div style={{ width, height }} className="sk-container">
                {children}
            </div>
        );
    }
}

export default Container;
